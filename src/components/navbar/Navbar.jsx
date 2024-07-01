import React, { useState } from "react";
import style from "./Navbar.module.css";
import { ReactComponent as NewChatIcon } from "../../assets/newChatIcon.svg";
import { ReactComponent as Logo } from "../../assets/navLogo.svg";
import Button from "../button/Button";

const Navbar = ({ handleNewChat, handlePastConversations }) => {
  return (
    <div className={style.navbar}>
      <div className={style.topContainer}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.text} style={{ marginBottom: "0.5rem" }}>
          <p>
            <button onClick={() => handleNewChat()}>New Chat</button>
          </p>
        </div>
        <div className={style.icon}>
          <button
            style={{
              border: "0",
              fill: "none",
              background: "transparent",
              cursor: "pointer  ",
            }}
          >
            <NewChatIcon />
          </button>
        </div>
      </div>
      <div className={style.bottomContainer}>
        <Button
          type="button"
          onClick={handlePastConversations}
          children="Past Conversations"
          styles="primary"
        />
      </div>
    </div>
  );
};

export default Navbar;
