import React from "react";
import error from "../../Assets/images/error.svg";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <>
      <div className="container marginTop"></div>
      <Helmet>
        <title>404 page</title>
        <meta name="description" content="404 Page" />
      </Helmet>
      <div className="mt-5 mb-3  d-flex justify-content-center align-items-center">
        <img src={error} alt="404" />
      </div>
    </>
  );
}
