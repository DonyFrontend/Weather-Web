import { useEffect, useState } from "react";
import Header from "src/components/header/Header";
import { ICurrent } from "./api/queries/current/currentTypes";
import axios from "axios";
import Loading from "./pages/Loading/Loading";
import { getWeatherFromIP } from "./api/queries/fromIP/fromIP";
import { getWeather } from "./api/queries/current/current";
import Data from "./components/data/Data";
import { setHistoryItem } from "./shared/const/History";
import QueryHistory from "./pages/queryHistory/QueryHistory";

function App() {
  const [state, setState] = useState({ origin: '' });
  const [loading, setLoading] = useState<boolean>();
  const [data, setData] = useState<ICurrent>();
  const time = `${String(new Date().getHours())}:${new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()}`;


  useEffect(() => {
    setLoading(true)
    axios.get('https://httpbin.org/ip')
      .then(data => {
        setState(data.data);
        getWeatherFromIP(data.data.origin)
          .then(data => getWeather(data.data.city)
            .then(res => {
              setData(res.data);
              setHistoryItem({
                location: res.data.location.name,
                temperature: res.data.current.temp_c,
                time,
              })
            })
          )
          .catch(err => console.log(err))
      })
      .catch(error => console.error('Error:', error))
      .finally(() => setLoading(false));
  }, [state.origin, time])

  if (typeof data == 'undefined' || setData == undefined || state.origin == '' || loading) {
    return <>
      <Header state={setData} loading={setLoading} />
      <Loading />
    </>
  }

  return (
    <>
      <Header state={setData} loading={setLoading} />
      <div className="mt-[65px]">
        <Data current={data.current} forecast={data.forecast} location={data.location} />
        <QueryHistory state={setData} loading={setLoading}/>
      </div>
    </>
  )
}

export default App;