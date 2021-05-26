import { JssProvider, SheetsRegistry } from "react-jss";

import Helmet from "react-helmet";
import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import RootComponent from "./home.jsx";
import { ServerStyleSheet } from "styled-components";
import { renderStylesToString } from "emotion-server";

global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;

global.Styled = { ServerStyleSheet };
global.ReactJss = { JssProvider, SheetsRegistry };
global.EmotionServer = { renderStylesToString };
global.Helmet = Helmet;

global.Components = { RootComponent };
