import React from "react";

type titleData = {
  title: string
}

const Title: React.FC<titleData> = ({title}) => {
  return (
    <div className="bg-blue-400 rounded-[10px] text-white p-3">
      <h1 className="text-[20px] font-semibold">{title}</h1>
    </div>
  )
}

export default Title;