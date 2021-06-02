import React, { useState, useRef, useEffect } from "react";
import injectSheet from "react-jss";
import { Form, Field, ErrorMessage, Formik } from "formik";
import { IconButton } from "./IconButton.jsx";
import * as Yup from "yup";
import { Helmet } from "react-helmet";
import { HubConnectionBuilder } from '@microsoft/signalr';
import { parseISO, format } from "date-fns";

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

const displayDate = (d) => {
  return format(parseISO(d), 'MMMM d, yyyy hh:mm a');
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

const Message = ({ message }) => {
  const { user, text, time } = message;
  return (
    <div className="message">
      <p className="user">{user}</p>
      <p className="time">{displayDate(time)}</p>
      <p className="text">{text}</p>
    </div>
  )
};

const Messages = ({ messages, newMessage }) => {
  if (messages.length === 0) {
    return (
      <div className="messages empty">
        <span>No messages yet...</span>
      </div>
    )
  }

  return (
    <div className={`messages ${newMessage ? 'new' : ''}`}>
      {messages.map((message, i) => <Message key={i} message={message}/>)}
    </div>
  )
};

const MessageSchema = Yup.object().shape({
  message: Yup.string().min(1).max(512).required('Cannot send empty message'),
});

const ChatInput = ({ sendMessage }) => {
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
        onSubmit={(values, { resetForm }) => {
          sendMessage(values.message);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <p>
              <ErrorMessage name="message" />
            </p>
            <Field type="text" as="textarea" placeholder="Send a message..." name="message" />
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

  const [ connection, setConnection ] = useState(null);
  const [ messages, setMessages ] = useState([]);
  const [ newMessage, setNewMessage ] = useState(false);
  const latestChat = useRef(null);

  latestChat.current = messages;

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl('/messages')
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (newMessage) {
      const timeout = setTimeout(() => setNewMessage(false), 500);
      return () => clearTimeout(timeout);
    }
    return;
  }, [newMessage]);

  useEffect(() => {
    if (connection) {
      // TODO: Properly handle error
      connection.start()
        .then(() => {
          connection.on('ReceiveMessage', message => {
            // TODO: add a little blip to notify user of new message
            const updatedChat = [...latestChat.current];
            updatedChat.push(message);

            setNewMessage(true);
            setMessages(updatedChat);
          });
        })
        .catch(e => console.log('Connection failed: ', e));
    }
  }, [connection]);

  const sendMessage = (text) => {
    const message = {
      user: 'username',
      text: text,
      time: (new Date()).toISOString(),
    };

    if (connection.connectionStarted) {
      // TODO: Properly handle error
      connection.send('SendMessage', message).catch(e => console.log(e));
    } else {
      // TODO: Properly handle error (spinner?)
      alert('No connection to server yet.');
    }
  }

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
        <Messages messages={messages} newMessage={newMessage} />
        <ChatInput sendMessage={sendMessage} />
      </div>
    </>
  );
});
