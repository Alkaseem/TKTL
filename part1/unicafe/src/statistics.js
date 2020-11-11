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
          <strong>All: {props.good + props.neutral + props.bad}</strong>
          <p>Average: {(props.good + props.neutral + props.bad) / 3}</p>
          <p>
            Positve: {((props.good + props.neutral + props.bad) / 3) * 100}%
          </p>{" "}
        </>
      ) : (
        <p>No Feedback Given</p>
      )}
    </div>
  );
}

export default statistics;
