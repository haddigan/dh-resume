import React from "react";
import Small from "../elements/Small";

const smallText = `One of the things I am most passionate about is learning. I feel strongly that everyone should 
aspire to be a lifelong learner. In my free time, I like to expand my knowledge by reading and
taking online courses. I try to learn something new every day.`

const Education = () => (
  <div>
    <h2>Education</h2>
    <Small text={smallText}/>
    <ul style={{ listStyle: "none" }}>
      <li><strong>React Nanodegree</strong> - Udacity</li>
      <li><strong>Frontend Web Developer Nanodegree</strong> - Udacity</li>
      <li><strong>Bachelor of Fine Arts</strong> - The University of the Arts</li>
    </ul>
  </div>
);

export default Education;
