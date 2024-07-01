import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import style from "./Root.module.css";
import { Box, Modal, Typography } from "@mui/material";

const Root = () => {
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [isPastConversations, setIsPastConversations] = useState(false);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  let handleNewChat = () => {
    setIsChatStarted(true);
    setIsPastConversations(false);
  };
  let handlePastConversations = () => {
    setIsPastConversations(true);
    setIsChatStarted(false);
  };
  let handleSaveConversation = () => {
    setOpen(true);
  };

  return (
    <div className={style.root}>
      <div className={style.sidebar}>
        <Navbar
          handleNewChat={handleNewChat}
          handlePastConversations={handlePastConversations}
        />
      </div>
      <div className={style.content}>
        <Outlet
          context={[
            isChatStarted,
            handleNewChat,
            handlePastConversations,
            isPastConversations,
            handleSaveConversation,
          ]}
        />
      </div>
      <div></div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Root;
