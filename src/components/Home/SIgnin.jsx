import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {ToastContainer} from "react-toastify";
import {useAuth} from "../context/AuthContextProvider";

const SIgnin = () => {
  const {loginFunction, user, loggedInuser} = useAuth();
  const initialValues = {
    email: "",
    Password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email Address")
      .required("Email is required"),
    password: Yup.string().required("password is required"),
  });
  const handleSubmit = async (values) => {
    try {
      await loginFunction(values);
      console.log(values);
    } catch (err) {
      console.log("error during login", err);
    }
  };
  console.log("user", user);
  console.log("loggedin user", loggedInuser);
  return (
    <div className="max-w-md mx-auto my-16 bf-white p-8 rounded-lg shadow-lg">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <Field
              type="email"
              name="email"
              autoComplete="on"
              className="w-full px-2 py-2 border rounded-md "
            />

            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">
              password
            </label>
            <Field
              type="password"
              name="password"
              autoComplete="on"
              className="w-full px-2 py-2 border rounded-md "
            />

            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-300 text-white rounded-md p-2 hover:bg-green-400"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SIgnin;
