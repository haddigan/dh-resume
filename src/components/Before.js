import React from "react";
import Small from '../elements/Small'

const smallText = `I spent years as an aspiring artist working odd jobs before settling in to what I thought
would be a career selling art. When it became clear that it wasn't for me, I started to become serious about 
being a full time developer. Now I get to do what I love, and I couldn't be happier!`

const Before = () => (
  <div>
    <h2>Work Experience</h2>
    <Small text={smallText} />
    <ul style={{listStyle: "none"}}>
      <li>2015 - Present: <strong>Full-Stack Web Developer</strong>, IntuitSolutions</li>
      <li>2013 - 2015: <strong>Online Auction Director</strong>, Great Dane Auctions</li>
      <li>2010 - 2013: <strong>Gallery Director</strong>, I. Brewster &amp; Sons Gallery</li>
      <li>2010: <strong>Marketing &amp; Programming Intern</strong>, Philagrafika</li>
    </ul>
  </div>
);

export default Before;
