import React from 'react';
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">

          <div className="text">

            <div className="htext">
                <h3 className='hh3'>TRAIN SMARTER. GET STRONGER</h3>
                <h1 className='hh1'>Simple fitness experience for everyone.</h1>
                <p className='hp'>Track your workouts, get better results, and be the best version
                    of you. Less thinking, more lifting.
                </p>
            </div>

            <div className="buttons">
                <button className="hbutton1">
                    <span>Download App</span>
                </button>

                <button className="hbutton2">
                    <span>Book a Class</span>
                </button>
            </div>
            
        </div>

        <div className="himage">
            <img src="./assist/dark.png" alt="dark" className="dark" />
        </div>

        {/* <div className="arrow-button">
            <button className="arrow">
                <img src="./assist/arrow-down.png" alt="" className="down-arrow" />
            </button>
        </div> */}
    </section>
  )
}

export default Hero