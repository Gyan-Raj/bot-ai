import React, { useEffect, useState } from "react";
import style from "./Chatbox.module.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import QUESTIONS from "../../sampledata/db.json";
import Card from "../card/Card";
import Input from "../input/Input";
import Button from "../button/Button";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

const Chatbox = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const [
    isChatStarted,
    handleNewChat,
    isPastConversations,
    handleSaveConversation,
  ] = useOutletContext();

  let handleChange = (e) => {
    let { value } = e.target;
    setQuery(value);
  };

  useEffect(() => {
    setData(
      QUESTIONS.filter((item) =>
        item.question.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 4)
    );
  }, [data]);

  return (
    <div className={style.chatbox}>
      {isChatStarted && !isPastConversations ? (
        <h1>New Chat</h1>
      ) : isPastConversations && !isChatStarted ? (
        <h1>PastConversations</h1>
      ) : (
        !isPastConversations &&
        !isChatStarted && (
          <>
            <div className={style.topContainer}>
              <div className={style.help}>
                <p>How Can I Help You Today?</p>
                <div>
                  <Logo />
                </div>
              </div>
            </div>
            <div className={style.middleContainer}>
              {data &&
                data.map((ques) => {
                  return (
                    <button
                      key={ques.id}
                      className={style.button}
                      onClick={() => handleNewChat()}
                    >
                      <Card
                        title={ques.question}
                        content={ques.response}
                        id={ques.id}
                      />
                    </button>
                  );
                })}
            </div>
          </>
        )
      )}
      <div className={style.bottomContainer}>
        <Input
          type="text"
          name="query"
          value={query}
          onChange={handleChange}
          styles="query"
        />
        <Button
          type="button"
          onClick={handleNewChat}
          children="Ask"
          styles="secondary"
        />
        <Button
          type="button"
          onClick={handleSaveConversation}
          children="Save"
          styles="secondary"
        />
      </div>
    </div>
  );
};

export default Chatbox;
