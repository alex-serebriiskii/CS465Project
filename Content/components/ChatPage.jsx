import React, { useState } from "react";
import injectSheet from "react-jss";
import { Form, Field, ErrorMessage, Formik } from "formik";
import { IconButton } from "./IconButton.jsx";
import * as Yup from "yup";
import { Helmet } from "react-helmet";

import { ChatPageStyles } from "../jss/ChatPage.js";

import Logo from "../svg/logo.svg";
import Logout from "../svg/logout.svg";
import PlusButton from "../svg/plus-button.svg";
import Microphone from "../svg/microphone.svg";
import MicrophoneMuted from "../svg/microphone-muted.svg";
import SendArrow from "../svg/send-arrow.svg";

const DoLogout = () => {
  alert('logout');
};

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <IconButton onClick={DoLogout}>
        <Logout />
      </IconButton>
    </div>
  )
};

const Message = () => {
  return (
    <div>message</div>
  )
};

const Messages = () => {
  return (
    <div className="messages">
      <Message />
    </div>
  )
};

const MessageSchema = Yup.object().shape({
  message: Yup.string().min(1).max(1024).required('Cannot send empty message'),
});

const ChatInput = () => {
  const [muted, setMuted] = useState(false);

  const handlePlusClick = () => {
    alert('plus clicked');
  };

  const handleMicrophoneClicked = () => {
    alert(muted);
    setMuted(!muted);
  };

  return (
    <div className="chat-input">
      <div className="aux">
        <IconButton type="submit" onClick={handlePlusClick}>
          <PlusButton />
        </IconButton>
        <IconButton type="submit" onClick={handleMicrophoneClicked}>
          {muted ? <MicrophoneMuted /> : <Microphone />}
        </IconButton>
      </div>
      <Formik
        initialValues={{ message: '' }}
        validationSchema={MessageSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <p>
              <ErrorMessage name="message" />
            </p>
            <Field type="text" as="textarea" name="message" />
            <IconButton type="submit" disabled={isSubmitting}>
              <SendArrow />
            </IconButton>
          </Form>
        )}
      </Formik>
    </div>
  )
};


export const ChatPage = injectSheet(ChatPageStyles)((props) => {
  const { classes } = props;
  return (
    <>
      <Helmet>
        <title>Chat</title>
        <meta name="description" content="Secure your chats - chat page" />
        <style>
          {`body {
            background: var(--black);
          }`}
        </style>
      </Helmet>
      <div className={classes.wrapper}>
        <Header />
        <Messages />
        <ChatInput />
      </div>
    </>
  );
});
