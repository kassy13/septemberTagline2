import React from "react";
import error from "../assets/404.svg";
import {Link} from "react-router-dom";
const Error = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
      <img src={error} alt="" className="w-full h-full" />
      <Link to={"/"}>Back</Link>
    </div>
  );
};

export default Error;
