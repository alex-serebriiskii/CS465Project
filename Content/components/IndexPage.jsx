import { useEffect, useState } from "react";
import injectSheet from "react-jss";

import { __bp_small__ } from "../constants.js";

import { IndexPageStyles } from "../jss/IndexPage.js";

import Logo from "../svg/logo.svg";

const RegisterPage = Object.freeze({
  Login: 1,
  Signup: 2,
})

const Login = ({ setPage }) => {
  return (
    <>
      <h1>Login</h1>
      <button onClick={() => setPage(RegisterPage.Signup)}>
        Signup
      </button>
    </>
  )
};

const Signup = ({ setPage }) => {
  return (
    <>
      <h1>Signup</h1>
      <button onClick={() => setPage(RegisterPage.Login)}>
        Login
      </button>
    </>
  )
};

const Register = ({ pageHook }) => {
  const [page, setPage] = pageHook;

  if (page === RegisterPage.Login) {
    return (
      <Login setPage={setPage} />
    )
  }

  return (
    <Signup setPage={setPage} />
  )
};

export const IndexPage = injectSheet(IndexPageStyles)(({ classes }) => {
  const [page, setPage] = useState(RegisterPage.Signup);
  const [showRegister, setShowRegister] = useState(true);

  useEffect(() => {
    const handler = () => {
      const width = window.innerWidth;
      //const height = window.innerHeight;

      if (width < __bp_small__) {
        setShowRegister(false);
        return;
      }
      setShowRegister(true);
    };

    window.addEventListener("resize", handler);
    handler();
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.brand}>
        <Logo />
        <h1>Discordium</h1>
        <p>Secure <b>your</b> chats</p>
      </div>
      {showRegister
        ? <Register className={classes.register} pageHook={[page,setPage]} />
        : <></>}
    </div>
  );
});


