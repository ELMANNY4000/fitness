import React from 'react'
import "./vaule.css"

const Vaule = () => {
  return (
    <div className='value'>
        <div className="vaule-container">
            <div className="text-vaule">
                <h2 className="vh2">
                How it work
                </h2>
                <p className="vp">
                Stacks is a production-ready library of stackable content blocks built in React Native.
                </p>
            </div>

            <div className="vauleicon-container">
                <div className="value-icon">
                    <a href=""><img src="./assist/download.png" alt="" className='vaule-image1'/></a>
                    <a href=""><img src="./assist/connect line.png" alt="" className='vaule-line'/></a>
                    <a href=""><img src="./assist/whisite.png" alt="" className='vaule-image2'/></a>
                    <a href=""><img src="./assist/connect line.png" alt="" className='vaule-line'/></a>
                    <a href=""><img src="./assist/medal.png" alt="" className='vaule-image3'/></a>
                    <a href=""><img src="./assist/connect line.png" alt="" className='vaule-line'/></a>
                    <a href=""><img src="./assist/stopwatch.png" alt="" className='vaule-image4'/></a>
                </div>

                <div className="value-step">
                    <div className="download-step">
                        <p className="step1">Step 1</p>
                        <h4 className="download1">Download</h4>
                        <p className="download-details">
                        Fitness Pro tracks your workouts, get better results, 
                        and be the best version of you.
                        </p>
                    </div>

                    <div className="download-step">
                        <p className="step1">Step 2</p>
                        <h4 className="download1">Choose your trainner</h4>
                        <p className="download-details">
                        Fitness Pro tracks your workouts, get better results, and be the best 
                        version of you.
                        </p>
                    </div>

                    <div className="download-step">
                        <p className="step1">Step 3</p>
                        <h4 className="download1">Set the goals</h4>
                        <p className="download-details">
                        Fitness Pro tracks your workouts, get better results, 
                        and be the best version of you.
                        </p>
                    </div>

                    <div className="download-step">
                        <p className="step1">Step 4</p>
                        <h4 className="download1">Workout time</h4>
                        <p className="download-details">
                        Fitness Pro tracks your workouts, get better results, 
                        and be the best version of you.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Vaule