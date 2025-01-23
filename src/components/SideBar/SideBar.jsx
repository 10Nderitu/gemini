import React, { useContext, useState } from "react";
import "./SideBar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const SideBar = () => {
  const [extended, setExtended] = useState(false);
  const {onSent, prevPrompts, setRecentPrompt} = useContext(Context)

  return (
    <div className="sidebar">

      <div className="top">
        <img onClick={() => setExtended(prev=>!prev)} className="menu" src={assets.menu} alt="" />
        <div className="new-chat">
          <img src={assets.plus} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div className="recent-entry">
              <img src={assets.comment} alt="" />
              <p> {item} ...</p>
            </div>
              )
            })}
            
          </div>

        ) : null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question} alt="" />
          {extended? <p>Help</p>:null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history} alt="" />
          {extended? <p>Activity</p>:null}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting} alt="" />
          {extended? <p>Settings</p>:null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
