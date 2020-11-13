import React from "react";

function statistics(props) {
  return (
    <div>
      <h2>Statistics</h2>
      {props.good > 0 || props.neutral > 0 || props.bad > 0 ? (
        <>
          <p>Good: {props.good}</p>
          <p>Neutral: {props.neutral}</p>
          <p>Bad: {props.bad}</p>
          <strong>All: {props.all}</strong>
          <p>Average: {(props.good - props.bad) / props.all}</p>
          <p>Positve: {(props.all / 3) * 100}%</p>{" "}
        </>
      ) : (
        <p>No Feedback Given</p>
      )}
    </div>
  );
}

export default statistics;
