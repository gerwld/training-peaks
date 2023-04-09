import React from 'react'
import { MainLoader } from '../../components'

const PlanPageAll = ({isInit}) => {
  return (
    <div className="planpg_all">
      <h1 class="plan_title">Choose a plan</h1>
      <div className="planpg_all__content">
        <div className="planpg_all__item">
          <span className="planpg_all__title">My Plan #1</span>
          <div className="group">
            <button>Select</button>
            <button>Edit</button>
          </div>
        </div>
        <div className="planpg_all__item">
          <span className="planpg_all__title">My Plan #2</span>
          <div className="group">
            <button>Select</button>
            <button>Edit</button>
          </div>
        </div>
        <div className="planpg_all__item">
          <span className="planpg_all__title">My Plan #3</span>
          <div className="group">
            <button>Select</button>
            <button>Edit</button>
          </div>
        </div>
        <div className="planpg_all__item">
          <span className="planpg_all__title">My Plan #4</span>
          <div className="group">
            <button>Select</button>
            <button>Edit</button>
          </div>
        </div>
      </div>
      <MainLoader isVisible={!isInit} />
    </div>
  )
}

export default PlanPageAll