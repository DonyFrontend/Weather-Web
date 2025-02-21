import React from "react";
import { getWeather } from "src/api/queries/current/current";
import { ICurrentQuery } from "src/api/queries/current/currentTypes";
import { getHistory, setHistoryItem } from "src/shared/const/History";

const QueryHistory: React.FC<ICurrentQuery> = ({loading, state}) => {
  const history = getHistory();
  const time = `${String(new Date().getHours())}:${new Date().getMinutes()}`


  if (history == null) {
    return <div className="p-3 rounded-[10px] bg-blue-400 text-white"><h1 className="text-[21px] font-semibold">You haven't made any requests yet</h1></div>
  }

  history.reverse();

  function handleWeather(location: string): void {
    loading(true);
    getWeather(location)
      .then(res => {
        state(res.data);
        setHistoryItem({
          location: res.data.location.name,
          temperature: res.data.current.temp_c,
          time,
        })
      })
      .catch(err => console.log(err))
      .finally(() => loading(false));
  }

  return (
    <div className="flex flex-col w-full items-start gap-y-6 mt-5 p-3">
      <h1 className="text-[21px] font-bold">Your query history</h1>
      <article className="w-full grid grid-cols-7 gap-4 auto-rows-auto">
        {history.map((item, index) => <section key={index} onClick={() => handleWeather(item.location)} className="flex hover:cursor-pointer hover:-translate-y-2 flex-col items-center gap-x-3 text-white bg-blue-400 rounded-[10px] p-2  ">
          <p className="text-[19px]">{item.location}</p>
          <p className="text-[25px] font-medium">{item.temperature} C°</p>
          <p className="text-[18px]">{item.time}</p>
        </section>)}
      </article>
    </div>
  )
}

export default QueryHistory;