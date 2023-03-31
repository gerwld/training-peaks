import React from 'react'
import AddTrainForm from './AddTrainForm'

const AddTrain = () => {
  const onAddTrain = (data) => {

  }
  return (
    <div className="addtrain">
      <div className="addtrain__content">
        <AddTrainForm onAddTrain={onAddTrain}/>
      </div>
    </div>
  )
}

export default AddTrain