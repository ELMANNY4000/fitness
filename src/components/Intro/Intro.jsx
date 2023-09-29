import React from 'react';
import "./intro.css";

const Intro = () => {
  return (
    <div className="intro">
        <div className="intro-container">
            <div className="intro-text">
                <h1 className="th1">
                Train smarter, get stronger.
                </h1>
                <p className="tp">
                Fitness Pro helps track your workouts, get better results, and be the best version of you.
                 Less thinking, more lifting 🔥🏀
                </p>
            </div>

            <button className="intro-button">
                <span>Start free trial</span>
            </button>
        </div>

        <div className="intro-image">
            <img src="./assist/img.png" alt="img" className="intro-img" />
        </div>
    
    </div>
  )
}

export default Intro