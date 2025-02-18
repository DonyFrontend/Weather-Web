import React from 'react'
import { ICurrentData } from 'src/api/queries/current/currentTypes'

const CurrentData: React.FC<ICurrentData> = ({data}) => {

  return (
    <div>
      <p>{data.location.name}</p>
    </div>
  )
}

export default CurrentData;