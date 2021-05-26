import { BrowserRouter, Route, StaticRouter, Switch } from "react-router-dom";

import { ChatPage } from "./ChatPage.jsx";
import { IndexPage } from "./IndexPage.jsx";
import { NotFoundPage } from "./NotFoundPage.jsx";
import React from "react";

export default class RootComponent extends React.Component {
  render() {
    const app = (
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/chat" component={ChatPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    );

    if (typeof window === "undefined") {
      return (
        <StaticRouter
          context={this.props.context}
          location={this.props.location}
        >
          {app}
        </StaticRouter>
      );
    }
    return <BrowserRouter>{app}</BrowserRouter>;
  }
}
