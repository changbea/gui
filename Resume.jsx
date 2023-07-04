import React from "react";
import "./Resume.css";
import Navigate from '../../Navigate';

function Resume() {
  return (
    <div>
      <Navigate />
      <div className="resumeContainer">
        <span>"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."</span>
        <span>George Owell, 1984</span>
      </div>
    </div>
  );
}

export default Resume;
