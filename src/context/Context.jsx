import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index,nextWord) => {

    }

    const onSent = async (prompt) => {
      setResultData("");
      setLoading(true);
      setShowResult(true);
      setRecentPrompt(input);
      const response = await run(input);

      console.log(typeof response);

      let responseArray = response().split("**");
      let newResponse = ""; 

      for (let i = 0; i < responseArray.length; i++) {
        // Check if the current word is surrounded by **
        if (i % 2 === 1) {
          newResponse += "<b>" + responseArray[i] + "</b>"; // Wrap in <b> tags
        } else {
          newResponse += responseArray[i]; // Just add the plain text
        }
      }
                                                               //split divides a string into an array of substrings
      let newResponse2 = newResponse.split("*").join("</br>") // join takes an array and a separator as arguments and returns a string
      setResultData(newResponse2);
      setLoading(false);
      setInput("");
    }


    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    }

    return(
        <Context.Provider value = {contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider
