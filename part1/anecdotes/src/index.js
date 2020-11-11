import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([0, 5, 7, 9, 4, 8]);

  const handleSelect = () => {
    const anecdoteLength = props.anecdotes.length;
    const ranSlect = Math.floor(Math.random() * anecdoteLength);
    setSelected(ranSlect);
  };

  const handleVote = () => {
    let cp = [...points];
    cp[selected] += 1;
    setPoints(cp);
  };
  const idx = points.indexOf(Math.max.apply(null, points));
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>
        {props.anecdotes[selected]} has {points[selected]} vote
      </p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleSelect}>Next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>
        {props.anecdotes[idx]} has {points[idx]} vote
      </p>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>,
  document.getElementById("root")
);
