import React from "react";

const Skill = (props) => (
  <div>
    <h1>{props.tech}</h1>
    {props.svg}
  </div>
);

export default Skill;
