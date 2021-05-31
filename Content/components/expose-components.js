import { JssProvider, SheetsRegistry } from "react-jss";

import Helmet from "react-helmet";
import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import RootComponent from "./RootComponent.jsx";

global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;

global.ReactJss = { JssProvider, SheetsRegistry };

global.Helmet = Helmet;

global.Components = { RootComponent };
