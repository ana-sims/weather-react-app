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
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        className="bi bi-clock text-clock"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z"
        />
        <path
          fillRule="evenodd"
          d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
        />
      </svg>
      {hours}:{minutes}
    </div>
  );
}
