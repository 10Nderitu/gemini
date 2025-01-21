import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user} alt=""/>
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello & Welcome!</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest a good travel location for a family trip</p>
            <img src={assets.compass} alt="" />
          </div>
          <div className="card">
            <p>Summarize the theory or relativity</p>
            <img src={assets.lightbulb} alt="" />
          </div>
          <div className="card">
            <p>Come up with team building activities for our work retreat</p>
            <img src={assets.comment} alt="" />
          </div>
          <div className="card">
            <p>Debug the following code</p>
            <img src={assets.code} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
