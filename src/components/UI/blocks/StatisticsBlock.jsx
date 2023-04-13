import React from 'react'
import { useSelector } from 'react-redux'

const StatisticsBlock = ({date}) => {
  const {runDistance} = useSelector(({statistics}) => ({
    runDistance: statistics.runDistance
  }))
  return (
    <div className='stats_block'>
      <span className="tooltip_title">{date ? date + ' ' : ''}Statistics:</span>

      <div className="stats_item">
        <span className="stats_title">Week total run:</span>
        <span className="stats_metric">{runDistance?.totalSum ? runDistance?.totalSum : 0} KM</span>
      </div>

    </div>
  )
}

export default StatisticsBlock