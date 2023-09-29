import React from 'react';
import "./book.css";

const Book = () => {
  return (
    <div className='book'>
        <div className="book-container">
            <img src="./assist/darkly.png" alt="" className="book-image" />
        </div>


        <div className="book-form">
            <div className="form-container">
                <h1 className="bh1">Book a class</h1>
                <p className="bp">Track your workouts, get better results, and be the best version
                    of you. Less thinking, more lifting. 
                </p>

                 <div className="books">
                    <a href=""><img src="./assist/user.png" alt="" className="book-icon1" /></a>

                    <div className="book-text">
                        <h2 className="bh2">For the beginners</h2>
                        <p className="bp">You never workout before, it's now a good start</p>
                    </div>
                 </div>

                 <div className="book1">
                    <a href=""><img src="./assist/medal.png" alt="" className="book-icon2" /></a>

                    <div className="book-text">
                        <h2 className="bh2">Advanced classes</h2>
                        <p className="bp">You never workout before, it's now a good start</p>
                    </div>
                 </div>

                 <div className="books">
                    <a href=""><img src="./assist/light.png" alt="" className="book-icon3" /></a>

                    <div className="book-text">
                        <h2 className="bh2">Premium (limited)</h2>
                        <p className="bp">You never workout before, it's now a good start</p>
                    </div>
                 </div>

                 <p className="pb2"><span className="discount">10% Discount</span> if you're already using the <span className="pro">Fitness Pro</span> on App Stor</p>

                 <button className="book-button">
                     <span>Book a class</span>
                </button>
            </div>

        </div>
    </div>
  )
}

export default Book