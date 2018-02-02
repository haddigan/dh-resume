import React from "react";
import Small from '../elements/Small'

const smallText = `I am passionate about web development, but I am passionate about other things as well!`
const Favorite = () => (
  <div>
    <h2>Interests</h2>
    <Small text={smallText} />
    <ul style={{listStyle: "none"}}>
      <li>Watching baseball and football (Phillies and Eagles!)</li>
      <li>Reading - lately it's been mostly Science Fiction and Cyberpunk</li>
      <li>I truly will listen to just about any music (as long as it's good). Punk, classical, rap, you name it</li>
      <li>I've been in a weekly bowling league for the past 5 or so years, and I also play some golf</li>
    </ul>
  </div>
);

export default Favorite;
