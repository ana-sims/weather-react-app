import React from "react";

export default function FormatTime(props) {
  let minutes = props.date.getMinutes();
  let hours = props.date.getHours();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  return (
    <div>
      {hours}:{minutes}
    </div>
  );
}
