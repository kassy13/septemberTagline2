import React from "react";
import {useAuth} from "../context/AuthContextProvider";
import {Navigate, Outlet} from "react-router-dom";

const Protected = () => {
  const {user, loading} = useAuth();
  console.log("user", user);
  console.log("loading:", loading);
  //   If its still loading return a loader
  if (loading) {
    return <div>Loading.....</div>;
  }
  //   If no user is logged in , it should navigate back to the login page
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
