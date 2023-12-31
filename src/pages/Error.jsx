import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/not-found.svg";
const Error = () => {
  // const error = useRouteError();
  // console.log(error);
  return (
    <Wrapper>
      <div>
        <img src={img} alt="404 error page" />
        <h3>Ohh! </h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
