import React, { useState } from "react";
import Scheduler from "react-mui-scheduler";



export default function Calendar() {
  const [state] = useState({
    options: {
      transitionMode: "zoom", // or fade
      startWeekOn: "mon", // or sun
      defaultMode: "month", // or week | day | timeline
      minWidth: 540,
      maxWidth: 540,
      minHeight: 540,
      maxHeight: 540
    },
    toolbarProps: {
      showSearchBar: true,
      showSwitchModeButtons: true,
      showDatePicker: true
    }
  });

  const events = [
    {
      id: "event-1",
      label: "Medical Vaccination",
      groupLabel: "Goat Vaccination",
      user: "admin",
      color: "#f28f6a",
      startHour: "04:00 AM",
      endHour: "05:00 AM",
      date: "2024-05-25",
      createdAt: new Date(),
      createdBy: "admin"
    },
    {
      id: "event-2",
      label: "Cow Disinefection",
      groupLabel: "Cow Disinefection",
      user: "admin",
      color: "#099ce5",
      startHour: "09:00 AM",
      endHour: "10:00 AM",
      date: "2024-05-20",
      createdAt: new Date(),
      createdBy: "admin"
    },
    {
      id: "event-3",
      label: "Vet Check Up",
      groupLabel: "Vet Check Up",
      user: "admin",
      color: "#263686",
      startHour: "13 PM",
      endHour: "14 PM",
      date: "2024-05-13",
      createdAt: new Date(),
      createdBy: "admin"
    },
    {
      id: "event-4",
      label: "Vet Check Up",
      groupLabel: "Vet Check Up",
      user: "admin",
      color: "#f28f6a",
      startHour: "08:00 AM",
      endHour: "09:00 AM",
      date: "2024-05-11",
      createdAt: new Date(),
      createdBy: "admin"
    }
  ];

  const handleCellClick = (event, row, day) => {
    
  };

  const handleEventClick = (event, item) => {
    
  };

  const handleEventsChange = (item) => {
    
  };

  const handleAlertCloseButtonClicked = (item) => {
    
  };

  return (
    <div className="App">
      <Scheduler
        locale="en"
        events={events}
        legacyStyle={false}
        options={state?.options}
        toolbarProps={state?.toolbarProps}
        onEventsChange={handleEventsChange}
        onCellClick={handleCellClick}
        onTaskClick={handleEventClick}
        onAlertCloseButtonClicked={handleAlertCloseButtonClicked}
      />
    </div>
  );
}
