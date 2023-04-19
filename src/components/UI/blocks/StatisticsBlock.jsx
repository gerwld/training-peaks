import React from 'react'
import { useSelector } from 'react-redux'
import { getHashValues } from '@/utils'

const StatisticsBlock = ({date}) => {
  const {runDistance} = useSelector(({main}) => ({
    runDistance: getHashValues({...main.eventsById}).reduce((a, c) => a + c.distance, 0)
  }))

  return (
    <div className='stats_block'>
      <span className="tooltip_title">{date ? date + ' ' : ''}Statistics:</span>

      <div className="stats_item">
        <span className="stats_title">Week total run:</span>
        <span className="stats_metric">{runDistance ? runDistance : 0} KM</span>
      </div>

    </div>
  )
}

export default StatisticsBlock