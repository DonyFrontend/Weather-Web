import { useEffect, useState } from "react";
import Header from "src/components/header/Header";
import Footer from "./components/footer/Footer";
import { currentWeather } from "./api/queries/current/current";
import { ICurrent } from "./api/queries/current/currentTypes";
import axios from "axios";

function App() {
  const [state, setState] = useState({ origin: '' });
  const [current, setCurrent] = useState<ICurrent>();
  const [location, setLocation] = useState<string | undefined>('');

  useEffect(() => {
    axios.get('https://httpbin.org/ip')
    .then(data => setState(data.data))
    .catch(error => console.error('Error:', error));

    console.log(state.origin);

    currentWeather(location ? location : 'Kara-Balta')
      .then(res => setCurrent(res.data))
  }, [state.origin, location])

  console.log(current);
  if (typeof current == 'undefined' || setCurrent == undefined) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Header state={setLocation}/>
      <div>

      </div>
      <Footer />
    </>
  )
}

export default App;