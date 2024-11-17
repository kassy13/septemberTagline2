import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import About from "./components/About";
import Error from "./components/Error";
import HomePopular from "./components/Home/HomePopular";
import Signup from "./components/Home/Signup";
import SIgnin from "./components/Home/SIgnin";
import "react-toastify/ReactToastify.css";
import AuthContextProvider from "./components/context/AuthContextProvider";
import Dashboard from "./components/Dashbboard/Dashboard";
import Protected from "./components/Protected/Protected";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Home />}></Route>
              {/* ROute for homepopular */}
              <Route path="popular/:id" element={<HomePopular />} />
              <Route path="about" element={<About />}></Route>
              <Route path="sign-up" element={<Signup />} />
              <Route path="login" element={<SIgnin />} />
            </Route>
            {/* Protected routes */}
            <Route element={<Protected />}>
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
            {/* 404 error page should e the last route */}
            <Route path="*" element={<Error />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
