import React from "react";
import ChatBot from "react-simple-chatbot";
import { script } from "./Chatbot";
import { stepifyScript } from "./utils";
import "./Message.css";

function App() {
  return (
    <div className="chat-bot">
      <ChatBot
        bubbleOptionStyle={{ backgroundColor: "white", color: "black" }}
        width="100%"
        height="100vh"
        steps={stepifyScript(script)}
      />
    </div>
  );
}

export default App;
