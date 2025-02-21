import React from 'react'
import { IForecast } from 'src/api/queries/current/forecastTypes'
import { getAstro } from 'src/shared/const/Astro';

const NextDays: React.FC<IForecast> = ({ forecastday }) => {
  console.log(forecastday);

  return (
    <main className="flex w-full">
      <article className='w-full flex flex-col items-center p-3 gap-y-12 text-white'>
        {forecastday.map((item, index) => <section key={index} className='w-full bg-blue-400 rounded-[10px] flex flex-col items-center p-3 gap-y-5 text-white'>
          <p className='text-[26px] font-bold'>{item.date}</p>
          <div className="flex flex-col items-center">
            <div className="flex gap-x-2 items-center">
              <p className="text-[37px]">{item.day.avgtemp_c} C°</p>
              <img src={item.day.condition.icon} alt="Image" />
            </div>
            <p className="text-[18px]">{item.day.condition.text}</p>
          </div>

          <article className="w-full text-black flex p-3 gap-x-4 rounded-[10px] overflow-x-auto bg-white">
            {item.hour.map((item, index) => <section key={index} className="shadow-hourItemShadow flex flex-col items-center justify-around p-2 px-5 border-[1px] rounded-[10px] border-gray-500">
              <p className="text-[18px] text-gray-400">{item.time.slice(11)}</p>
              <img src={item.condition.icon} alt="" />
              <p className="text-nowrap">{item.temp_c} C°</p>
            </section>)}
          </article>
          
          <article className="w-full flex flex-shrink-0 justify-center gap-x-6">
            {getAstro({
              moon_phase: item.astro.moon_phase,
              moonrise: item.astro.moonrise,
              moonset: item.astro.moonset,
              sunrise: item.astro.sunrise,
              sunset: item.astro.sunset
            }).map((item, index) => <section key={index} className="shadow-xl hover:-translate-y-2 transition-transform flex flex-col items-center justify-around p-2 px-5 border-[2px] rounded-[10px] border-white">
              <p className="text-[20px] font-medium text-white">{item.text}</p>
              <img src={item.icon} className="w-[75px] h-[75px]" alt="Moon phase moonrise moonset sunrise sunset" />
              <p className="text-nowrap">{item.time}</p>
            </section>)}
          </article>
        </section>)}
      </article>
    </main>
  )
}

export default NextDays;