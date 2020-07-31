import { Draggable, Droppable } from "react-drag-and-drop";

import { useIntervalTimer } from "../../hooks/intervalTimer";
import { useStore } from "../../hooks/useStore";
import "./style.css";

import React from "react";

function Schedule() {
  const { rootStore } = useStore();

  const [seconds] = useIntervalTimer((seconds) => {
    let twenty_four_hour = seconds % 24;
    rootStore.characterStore.save();
    rootStore.scheduleStore.execute(twenty_four_hour);
  });

  let twenty_four_hour = seconds % 24;
  let listMorning = [];
  let listAfternoon = [];

  const onDrop = function (data, scheduleItemID) {
    rootStore.scheduleStore.setScheduleItem(scheduleItemID, data.action);
  };

  rootStore.scheduleStore.schedule.forEach((scheduleItem, i) => {
    let hour = i;
    let ampm = "am";
    if (i > 12) {
      hour = hour - 12;
      ampm = "pm";
    }
    let block = (
      <li className="no-dot">
        <Droppable
          types={["action"]} // <= allowed drop types
          onDrop={(data) => onDrop(data, i)}
        >
          <div
            className={
              "row ScheduleItem " + (twenty_four_hour === i ? "Active" : "")
            }
          >
            <span className="col-6">
              <strong>
                {hour}:00 {ampm}
              </strong>
            </span>{" "}
            <span className="col-6">{scheduleItem.title}</span>
          </div>
        </Droppable>
      </li>
    );
    if (i < 12) {
      listMorning.push(block);
    } else {
      listAfternoon.push(block);
    }
  });

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <h2>Actions:</h2>
            <ul className="no-indent">
              {rootStore.actionStore.all.map((action) => {
                return (
                  <Draggable type="action" data={action.slug}>
                    <li>{action.title}</li>
                  </Draggable>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h2>Schedule</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>Morning</h3>
            <ul className="no-indent">{listMorning}</ul>
          </div>
          <div className="col-md-6">
            <h3>Afternoon</h3>
            <ul className="no-indent">{listAfternoon}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
