import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Oops!!</h2>
      <br />
      <p>The page you are looking is not available ....</p>
      <br />
      <Link to="/">Back to GodHead</Link>
    </div>
  );
};
