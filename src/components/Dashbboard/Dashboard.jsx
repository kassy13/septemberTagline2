import React, {useEffect, useState} from "react";
import {useAuth} from "../context/AuthContextProvider";
import {account} from "../../appwrite/config";
import {setLocale} from "yup";

const Dashboard = () => {
  const {logoutFunction, user, fetchUser, loading} = useAuth();

  useEffect(() => {
    fetchUser;
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  //   console.log(loggedInuser, "user from dashboared loggedin user");
  console.log("user from auth dashboard", user);
  return (
    <div>
      <h1>DASHBOARD</h1>
      <h1>{user.name}</h1>
      <button onClick={logoutFunction} className="bg-green-300">
        logout
      </button>
    </div>
  );
};

export default Dashboard;
