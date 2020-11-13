import React from "react";

import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

function Course({ courses }) {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Header course={courses[0].name} />
      <Content
        part1={courses[0].parts[0]}
        part2={courses[0].parts[1]}
        part3={courses[0].parts[2]}
      />
      <Total
        total={
          courses[0].parts[0].exercises +
          courses[0].parts[1].exercises +
          courses[0].parts[2].exercises
        }
      />
      <h2>{courses[1].name}</h2>
      <p>
        {courses[1].parts[0].name} {courses[1].parts[0].exercises}
      </p>
      <p>
        {courses[1].parts[1].name} {courses[1].parts[1].exercises}
      </p>
      <strong>
        Total of {courses[1].parts[0].exercises + courses[1].parts[1].exercises}{" "}
        exercises
      </strong>
    </div>
  );
}

export default Course;
