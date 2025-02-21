import { useEffect, useState } from "react";
import Header from "src/components/header/Header";
import Footer from "./components/footer/Footer";
import { ICurrent } from "./api/queries/current/currentTypes";
import axios from "axios";
import Loading from "./pages/Loading/Loading";
import { getWeatherFromIP } from "./api/queries/fromIP/fromIP";
import { getWeather } from "./api/queries/current/current";
import Data from "./components/data/Data";

function App() {
  const [state, setState] = useState({ origin: '' });
  const [loading, setLoading] = useState<boolean>();
  const [data, setData] = useState<ICurrent>();

  useEffect(() => {
    setLoading(true)
    axios.get('https://httpbin.org/ip')
      .then(data => {
        setState(data.data);
        getWeatherFromIP(data.data.origin)
          .then(data => getWeather(data.data.city)
            .then(res => setData(res.data))
          )
          .catch(err => console.log(err))
      })
      .catch(error => console.error('Error:', error))
      .finally(() => setLoading(false));

    console.log(state.origin);
  }, [state.origin])

  if (typeof data == 'undefined' || setData == undefined || state.origin == '' || loading) {
    return <>
      <Header state={setData} loading={setLoading} />
      <Loading />
    </>
  }



  console.log(data);

  return (
    <>
      <Header state={setData} loading={setLoading} />
      <div className="mt-[65px]">
        <Data current={data.current} forecast={data.forecast} location={data.location} />
      </div>
      <Footer />
    </>
  )
}

export default App;