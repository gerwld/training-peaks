import React from "react";
import AddTrainForm from "./AddTrainForm";

const AddTrainPopup = ({ isCreateMode, toggleCreate }) => {
 const onAddTrain = (data) => {};
 return (
  <div className={`modal modal_createnew ${isCreateMode ? "modal_open" : "modal_close"}`}>
   <div className="modal_content">
    <h1 className="modal_title">Add Training</h1>
    <AddTrainForm onAddTrain={onAddTrain} />
    <button onClick={toggleCreate} className="btn_close">close</button>
   </div>
  </div>
 );
};

export default AddTrainPopup;
