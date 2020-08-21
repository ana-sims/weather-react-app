import React from "react";

export default function FormatDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let weekday = days[props.date.getDay()];
  let day = props.date.getDate();
  let month = months[props.date.getMonth()];
  let year = props.date.getYear();

  return (
    <div>
      {weekday}, {day}/{month}/{year}
    </div>
  );
}
