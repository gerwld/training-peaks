import React from "react";
import { connect } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import actionCreators from "@/redux/actions";
import { getHashValues } from "@/utils";

import { formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { setCreateMode } from "../../redux/reducers/app-reducer";
import tippy from 'tippy.js';

import ReactTooltip from 'react-tooltip';
import RenderEvent from "./renderEvent/RenderEvent";

class Calendar extends React.Component {
  
 render() {
  return (
   <div className="calendar">
    {/* {this.renderSidebar()} */}
    <div className="calendar-main">
     <FullCalendar
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
      selectable={true}
      selectMirror={true}
      displayEventTime={false}
      dayMaxEvents={true}
      firstDay={1}
      weekends={this.props.weekendsVisible}
      datesSet={this.handleDates}
      select={this.handleDateSelect}
      events={this.props.events}
      eventContent={(ev) => <RenderEvent eventInfo={ev}/>}
      // eventClick={this.handleEventClick}

      eventAdd={this.handleEventAdd}
      eventChange={this.handleEventChange} // called for drag-n-drop/resize
      eventRemove={this.handleEventRemove}
      displayEventTime={true}
      // eventMouseEnter={this.handleEventPositioned}
      eventDidMount={(info) => {
        console.log(info.el)
        info.el.remove();
      }}
      eventMouseEnter={ (info) => {
        // console.log(info.event.title)
     }}
    //  eventDidMount={ (info) => {
    //     tippy(info.el, {
    //        trigger: 'click',
    //        touch: 'hold',
    //        allowHTML: true,
    //        content:
    //           `
    //           <div class="desc_train-tooltip">
    //           <h3>${info.event.extendedProps.type}</h3>
    //            <hr/>
    //            <h5>${info.event.extendedProps.distance}</h5>
    //            <hr/>
    //            <p>${info.event.extendedProps.description}</p>
    //            </div>`,
    //     });
    //  }}
  />
     <ReactTooltip/>
    </div>
   </div>
  );
 }

 handleEventPositioned(info) {
  console.log(info);
  info.el.innerText;
  info.el.setAttribute("data-tip","some text tip");
   ReactTooltip.rebuild();
 }

 renderSidebar() {
  return (
   <div className="calendar-sidebar">
    <div className="calendar-sidebar-section">
     <h2>Instructions</h2>
     <ul>
      <li>Select dates and you will be prompted to create a new event</li>
      <li>Drag, drop, and resize events</li>
      <li>Click an event to delete it</li>
     </ul>
    </div>
    <div className="calendar-sidebar-section">
     <label>
      <input type="checkbox" checked={this.props.weekendsVisible} onChange={this.props.toggleWeekends}></input>
      toggle weekends
     </label>
    </div>
    <div className="calendar-sidebar-section">
     <h2>All Events ({this.props.events.length})</h2>
     <ul>{this.props.events.map(renderSidebarEvent)}</ul>
    </div>
   </div>
  );
 }

 // handlers for user actions
 // ------------------------------------------------------------------------------------------

 handleDateSelect = async (selectInfo) => {
  let calendarApi = selectInfo.view.calendar;

  await this.props.setCreateMode(true);

  calendarApi.unselect(); // clear date selection

  if (true) {
   calendarApi.addEvent(
    {
     // will render immediately. will call handleEventAdd
     title: 'Morning Run',
     type: 'Training Run',
     desc: 'description for train',
     dist: '5.2km',
     rtss: '60',
     start: selectInfo.startStr,
     end: selectInfo.endStr,
     allDay: false,
     editable: true,
    },
    true
   ); // temporary=true, will get overwritten when reducer gives new events
  }
 };

 handleEventClick = (clickInfo) => {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
   clickInfo.event.remove(); // will render immediately. will call handleEventRemove
  }
 };

 // handlers that initiate reads/writes via the 'action' props
 // ------------------------------------------------------------------------------------------

 handleDates = (rangeInfo) => {
  this.props.requestEvents(rangeInfo.startStr, rangeInfo.endStr).catch(reportNetworkError);
 };

 handleEventAdd = (addInfo) => {
  this.props.createEvent(addInfo.event.toPlainObject()).catch(() => {
   reportNetworkError();
   addInfo.revert();
  });
 };

 handleEventChange = (changeInfo) => {
  this.props.updateEvent(changeInfo.event.toPlainObject()).catch(() => {
   reportNetworkError();
   changeInfo.revert();
  });
 };

 handleEventRemove = (removeInfo) => {
  this.props.deleteEvent(removeInfo.event.id).catch(() => {
   reportNetworkError();
   removeInfo.revert();
  });
 };
}

function renderSidebarEvent(plainEventObject) {
 return (
  <li key={plainEventObject.id}>
   <b>{formatDate(plainEventObject.start, { year: "numeric", month: "short", day: "numeric" })}</b>
   <i>{plainEventObject.title}</i>
  </li>
 );
}

function reportNetworkError() {
 alert("This action could not be completed");
}

function mapStateToProps() {
 const getEventArray = createSelector((state) => state.eventsById, getHashValues);

 return (state) => {
  return {
   events: getEventArray(state),
   weekendsVisible: state.weekendsVisible,
  };
 };
}

export default connect(mapStateToProps, ({...actionCreators, setCreateMode}))(Calendar);
