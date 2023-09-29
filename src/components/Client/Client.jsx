import React from 'react'
import "./client.css"

const Client = () => {
  return (
    <div className="client">
        <div className="client-text">
            <p className="ctext">We work with people from over the world</p>
        </div>

        <div className="type">
            <ul className='ctype'>
                <li>
                    <a href="" ><img src="./assist/logo 01.png" alt="" className="cname"/></a>
                    <a href="" ><img src="./assist/logo 02.png" alt="" className="cname"/></a>
                    <a href="" ><img src="./assist/logo 04.png" alt="" className="cname"/></a>
                    <a href="" ><img src="./assist/logo 01.png" alt="" className="cname"/></a>
                    <a href="" ><img src="./assist/logo 05.png" alt="" className="cname"/></a>
                    <a href="" ><img src="./assist/logo 06.png" alt="" className="cname"/></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Client