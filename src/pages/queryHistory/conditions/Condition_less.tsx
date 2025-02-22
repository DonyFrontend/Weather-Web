import React from 'react'
import { ICondition } from '../types/condition-type';

const Condition_less: React.FC<ICondition> = ({ handler, history }) => {
  history.reverse();

  return (
    <div >
      <article className="w-full grid grid-cols-7 gap-4 auto-rows-auto">
        {history.map((item, index) => <section key={index} onClick={() => handler(item.location)} className="flex hover:cursor-pointer hover:-translate-y-2 flex-col items-center gap-x-3 text-white bg-blue-400 rounded-[10px] p-2  ">
          <p className="text-[19px]">{item.location}</p>
          <p className="text-[25px] font-medium">{item.temperature} C°</p>
          <p className="text-[18px]">{item.time}</p>
        </section>)}
      </article>
    </div>
  )
}

export default Condition_less;