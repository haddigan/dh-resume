import React from "react";
import Small from '../elements/Small';

const smallText=`My skills and interests generally skew toward the frontend, but I do have some experience 
working in the backend (in fact, I worked in PHP before learned JavaScript). I highly enjoy working with React 
and it's related ecosystem.`;

const Skills = () => (
  <div>
    <h2>Skills</h2>
    <Small text={smallText} />
    <ul style={{listStyle: "none"}}>
      <li>JavaScript: ES5 - ES2015+, jQuery</li>
      <li>React ecosystem: React, React Native, Redux</li>
      <li>Frontend development: JS, CSS, HTML, Bootstrap</li>
      <li>Backend: LAMP stack - CentOS/Ubuntu, Apache, MySQL, PHP</li>
      <li>Version control: Git, GitLab, GitHub</li>
      <li>Backend services: Netlify, Graph.cool</li>
      <li>Other: Babel, Webpack, Rollup, Jest, Jasmine, Bash</li>
      <li>Editors: VSCode, SublimeText</li>
    </ul>
  </div>
);

export default Skills;
