import Helmet from "react-helmet";
import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import RootComponent from "./RootComponent.jsx";

global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;

global.Helmet = Helmet;

global.Components = { RootComponent };
