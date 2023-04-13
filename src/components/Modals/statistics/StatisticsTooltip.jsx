import React from 'react'
import StatisticsBlock from '../../UI/blocks/StatisticsBlock'

const StatisticsTooltip = (props) => {
  return (
    <div className='stats_tooltip'>
      <StatisticsBlock {...props}/>
    </div>
  )
}

export default StatisticsTooltip