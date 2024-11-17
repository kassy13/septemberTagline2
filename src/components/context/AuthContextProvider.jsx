import React, {useContext, useEffect, useState} from "react";
import AuthContext from "./UserContex";
import {toast} from "react-toastify";
import {account} from "../../appwrite/config";
import {ID} from "appwrite";
import {useNavigate} from "react-router-dom";

const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //  getting the current user

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      } catch (err) {
        setUser(null);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  const signUpFunction = async (userData) => {
    try {
      const response = await account.create(
        ID.unique(),
        userData.email,
        userData.password,
        userData.username
      );
      console.log(response);
      toast.success("signup successfull");
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    } catch (err) {
      toast.error(err.message || "signup failed");
    }
  };

  const loginFunction = async (userData) => {
    try {
      await account.createEmailPasswordSession(
        userData.email,
        userData.password
      );
      const loggedInuser = account.get();
      setUser(loggedInuser);
      toast.success("login successful");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2500);
    } catch (err) {
      toast.error(err.message || "login failed");
      console.log(err);
    }
  };
  const logoutFunction = async () => {
    await account.deleteSession("current");
    setUser(null);
    toast.success("logged out successfully");
    navigate("/login");
  };
  const contextData = {
    user,
    signUpFunction,
    loading,
    loginFunction,
    logoutFunction,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
// Creating a custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
