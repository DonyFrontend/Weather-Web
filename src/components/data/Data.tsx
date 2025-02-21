import { Button } from "antd";
import React from "react";
import { ICurrent } from "src/api/queries/current/currentTypes";
import moonPhase from "src/assets/icons/moon-phase.svg";
import moonrise from "src/assets/icons/moonrise.svg";
import moonset from "src/assets/icons/moonset.svg";
import sunrise from "src/assets/icons/sunrise.svg";
import sunset from "src/assets/icons/sunset.svg";

const Data: React.FC<ICurrent> = ({ current, forecast, location }) => {
  const astro = forecast.forecastday[0].astro;

  const astroData = [
    {
      text: "Moon phase",
      icon: moonPhase,
      time: astro.moon_phase,
    },
    {
      text: "Moonrise",
      icon: moonrise,
      time: astro.moonrise,
    },
    {
      text: "Moonset",
      icon: moonset,
      time: astro.moonset,
    },
    {
      text: "Sunrise",
      icon: sunrise,
      time: astro.sunrise,
    },
    {
      text: "Sunset",
      icon: sunset,
      time: astro.sunset,
    }
  ]

  return (
    <div className="flex flex-col">
      <main className="flex bg-blue-400 w-full flex-col items-center p-3 gap-y-5 text-white">
        <div className="flex flex-col items-center">
          <div className="flex gap-x-2 items-center">
            <p className="text-[37px]">{current.temp_c} C°</p>
            <img src={current.condition.icon} alt="Image" />
          </div>
          <p className="text-[18px]">{current.condition.text}, feels like {current.feelslike_c} C°</p>
        </div>

        <h1 className="text-[20px] font-bold">
          {location.country} • {location.name} • {location.localtime.slice(11)}
        </h1>

        <article className="w-full text-black flex p-3 gap-x-4 rounded-[10px] overflow-x-scroll bg-white">
          {forecast.forecastday[0].hour.map((item, index) => <section key={index} className="shadow-hourItemShadow flex flex-col items-center justify-around p-2 px-5 border-[1px] rounded-[10px] border-gray-500">
            <p className="text-[18px] text-gray-400">{item.time.slice(11)}</p>
            <img src={item.condition.icon} alt="" />
            <p className="text-nowrap">{item.temp_c} C°</p>
          </section>)}
        </article>

        <article className="w-full flex flex-shrink-0 justify-center gap-x-6">
          {astroData.map((item, index) => <section key={index} className="shadow-xl hover:-translate-y-2 transition-transform flex flex-col items-center justify-around p-2 px-5 border-[2px] rounded-[10px] border-white">
            <p className="text-[20px] font-medium text-white">{item.text}</p>
            <img src={item.icon} className="w-[75px] h-[75px]" alt="Moon phase moonrise moonset sunrise sunset" />
            <p className="text-nowrap">{item.time}</p>
          </section>)}
        </article>

        <div className="self-center">
          <Button className="text-[16px] font-medium p-2">View weather history for the last 7 days</Button>
        </div>
      </main>
    </div>
  )
}

export default Data;