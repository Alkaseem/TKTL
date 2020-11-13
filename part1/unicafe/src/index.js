import React, { useState } from "react";
import ReactDOM from "react-dom";

import Statistics from "./statistics";

function Index() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById("root")
);
