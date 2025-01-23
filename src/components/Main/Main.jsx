import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user} alt="" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello & Welcome!</span>
              </p>
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
                <p>
                  Come up with team building activities for our work retreat
                </p>
                <img src={assets.comment} alt="" />
              </div>

              <div className="card">
                <p>Debug the following code</p>
                <img src={assets.code} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user} alt="" />
              <p>{recentPrompt}</p>
            </div>

            <div className="result-data">
              <img src={assets.gemini} alt="" />

              {loading
              ? <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>

                :<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                }
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Ask Gemini"
            />
            
            <img src={assets.gallery} alt="" />
            <img src={assets.mic} alt="" />
            <img onClick={() => onSent()} src={assets.send} alt="" />
          </div>

          <p className="bottom-info">
            Gemini may display inaccurate info, so double check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
