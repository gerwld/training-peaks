import React from "react";
import { connect } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import {updateEvent} from "@/redux/actions/event-actions";
import { getHashValues } from "@/utils";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { setCreateMode } from "../../redux/reducers/app-reducer";

import ReactTooltip from 'react-tooltip';
import RenderEvent from "./renderEvent/RenderEvent";
import DayCell from "../../components/UI/blocks/DayCell";
import epochConvert from "../../utils/epochConvert";

class Calendar extends React.Component {

 render() {
  return (
   <div className="calendar">
    {/* {this.renderSidebar()} */}
    <div className="calendar-main">
     <FullCalendar
     ref={this.calendarRef}
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
       left: "title",
       center: "",
       right: 'prev,next today'
      }}
      initialView="dayGridWeek"
      editable={true}
      allDaySlot={false}
      slotEventOverlap={false}
      selectable={false}
      eventDurationEditable={false}
      selectMirror={true}
      displayEventTime={false}
      dayMaxEvents={true}
      firstDay={1}
      weekends={true}
      datesSet={this.handleDates}
      select={this.handleDateSelectTrue}
      events={this.props.events}
      eventContent={e => <RenderEvent {...e}/>}
      dayCellContent={e => <DayCell {...e} />}

      // eventAdd={this.handleEventAdd}
      eventChange={this.handleEventChange} // called for drag-n-drop/resize
      // eventRemove={this.handleEventRemove}
  />
     <ReactTooltip/>
    </div>
   </div>
  );
 }


 // handlers for user actions
 // ------------------------------------------------------------------------------------------

 handleDateSelectTrue = async (selectInfo) => {
  this.startStr = selectInfo.startStr;
 }

 handleDateSelect = async (selectInfo) => {
  let calendarApi = selectInfo.view.calendar;

  await this.props.setCreateMode(true);

  calendarApi.unselect(); // clear date selection

   calendarApi.addEvent(
    {
     // will render immediately. will call handleEventAdd
     title: 'Morning Run',
     type: 'Training Run',
     desc: 'description for train',
     dist: '5.2',
     rtss: '60',
     start: selectInfo.startStr,
    //  end: selectInfo.endStr,
     allDay: false,
     editable: true,
    },
    true
   ); // temporary=true, will get overwritten when reducer gives new events
 };

 handleEventClick = (clickInfo) => {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
   clickInfo.event.remove(); // will render immediately. will call handleEventRemove
  }
 };

 // handlers that initiate reads/writes via the 'action' props
 // ------------------------------------------------------------------------------------------

 handleDates = (rangeInfo) => {
  this.props.fetchEventsCallback(rangeInfo.startStr, rangeInfo.endStr);
 };

 handleEventChange = (changeInfo) => {
  let plain = changeInfo.event.toPlainObject();
  let newObj = {
      id: plain.id / 1,
      name: plain.extendedProps.name,
      description: plain.extendedProps.description,
      link: plain.extendedProps.link,
      distance: plain.extendedProps.distance,
      epochDate: epochConvert(plain.start),
      start: plain.start,
  }

  this.props.updateEvent(newObj);
 };

 handleEventRemove = (removeInfo) => {
  this.props.deleteEvent(removeInfo.event.id).catch(() => {
   reportNetworkError();
   removeInfo.revert();
  });
 };
}

function reportNetworkError() {
 alert("This action could not be completed");
}

function mapStateToProps() {
 const getEventArray = createSelector((state) => state.main.eventsById, getHashValues);

 return (state) => {
  return {
   events: getEventArray(state)
  };
 };
}

export default connect(mapStateToProps, ({setCreateMode, updateEvent}))(Calendar);
