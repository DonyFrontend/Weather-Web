import React, { useState } from 'react'
import { ICondition } from '../types/condition-type';

const Condition_more: React.FC<ICondition> = ({ handler, history }) => {
  const [allHistory, setAllHistory] = useState<boolean>(false);
  history.reverse();
  const clickableClassName: string = ' hover:bg-blue-600 active:bg-blue-700 transition-colors';

  return (
    <div className='flex flex-col gap-y-8'>
      <div className='w-[15%]'>
        <button onClick={() => setAllHistory(!allHistory)} className={`p-3 w-full ${clickableClassName} text-nowrap rounded-[10px] bg-blue-400 text-white text-[20px] font-medium`}>{allHistory ? 'Hide' : 'Show all history'}</button>
      </div>
      <article className="w-full grid grid-cols-7 gap-4 auto-rows-auto">
        {allHistory ? history.map((item, index) => <section key={index} onClick={() => handler(item.location)} className={`flex hover:cursor-pointer hover:-translate-y-2 flex-col items-center gap-x-3 text-white bg-blue-400 rounded-[10px] p-2  ${clickableClassName}`}>
          <p className="text-[19px]">{item.location}</p>
          <p className="text-[25px] font-medium">{item.temperature} C°</p>
          <p className="text-[18px]">{item.time}</p>
        </section>) : history.slice(0, 10).map((item, index) => <section key={index} onClick={() => handler(item.location)} className={`flex hover:cursor-pointer hover:-translate-y-2 flex-col items-center gap-x-3 text-white bg-blue-400 rounded-[10px] p-2  ${clickableClassName}`}>
          <p className="text-[19px]">{item.location}</p>
          <p className="text-[25px] font-medium">{item.temperature} C°</p>
          <p className="text-[18px]">{item.time}</p>
        </section>)}
        {!allHistory && <section onClick={() => setAllHistory(!allHistory)} className={`flex  ${clickableClassName} hover:cursor-pointer hover:-translate-y-2 justify-center items-center text-white font-bold text-[25px] bg-blue-400 rounded-[10px]  p-2  `}>...</section>}
      </article>
    </div>
  )
}

export default Condition_more;