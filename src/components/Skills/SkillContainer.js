import React from "react";
import Skill from "./Skill";

const skillContainer = (props) => {
  let skills = props.data.forEach((skill) => {
    return <Skill tech={skill.tech} svg={skill.svg} />;
  });

  return <div>{skills}</div>;
};

export default skillContainer;
