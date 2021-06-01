import { Link } from "react-router-dom";
import React from "react";

export const NotFoundPage = ({ staticContext }) => {
  if (staticContext) staticContext.status = 404;

  return (
    <>
      <h1>Page not found</h1>
      <Link to="/">Go back home</Link>
    </>
  );
};
