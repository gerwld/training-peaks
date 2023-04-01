import React from "react";
import EditTrainForm from "./EditTrainForm";

const EditTrainPopup = ({ isEditMode, toggleEdit }) => {
 const onAddTrain = (data) => {};
 return (
  <div className={`modal modal_createnew ${isEditMode ? "modal_open" : "modal_close"}`}>
   <div className="modal_content">
    <h1 className="modal_title">Edit Training</h1>
    <EditTrainForm onAddTrain={onAddTrain}/>
    <button onClick={toggleEdit} className="btn_close">
     close
    </button>
   </div>
  </div>
 );
};

export default EditTrainPopup;
