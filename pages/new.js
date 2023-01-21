import React from "react";
import FreeCourseCard from "../components/freeCourseCard";
import ag from "../public/ag.jpg";
const New = () => {
  const cont = [
    "These terms and conditions constitute the entire agreement between you and us",
    "These terms and conditions constitute the entire agreement between you and us",
    "These terms and conditions constitute the entire agreement between you and us",
  ];
  return (
    <div>
      <FreeCourseCard
        img={ag}
        tittle="Code Your Own Adventure Game"
        s1="Learn basic programming concepts while creating an interactive adventure game. "
        s2="Create an interactive adventure game using basic programming concepts in a fun and engaging way."
        array={[
          "These terms and conditions constitute the entire agreement between you and us",
          "These terms and conditions constitute the entire agreement between you and us",
          "These terms and conditions constitute the entire agreement between you and us",
        ]}
      />
    </div>
  );
};

export default New;
