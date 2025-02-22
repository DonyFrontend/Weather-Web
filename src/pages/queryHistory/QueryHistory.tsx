import React from "react";
import { getWeather } from "src/api/queries/current/current";
import { ICurrentQuery } from "src/api/queries/current/currentTypes";
import { getHistory, setHistoryItem } from "src/shared/const/History";
import Condition_more from "./conditions/Condition_more";
import Condition_less from "./conditions/Condition_less";

const QueryHistory: React.FC<ICurrentQuery> = ({ loading, state }) => {
  const history = getHistory();
  const time = `${String(new Date().getHours())}:${new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes()}`;

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

      <div className="w-full flex flex-col gap-y-3">
        {history.length > 10 ? <Condition_more handler={handleWeather} history={history} /> : <Condition_less handler={handleWeather} history={history} />}
      </div>
    </div>
  )
}

export default QueryHistory;