import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";
import About from "./components/About";
import Error from "./components/Error";
import HomePopular from "./components/Home/HomePopular";
import Signup from "./components/Home/Signup";
import SIgnin from "./components/Home/SIgnin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />}></Route>
            {/* ROute for homepopular */}
            <Route path="popular/:id" element={<HomePopular />} />
            <Route path="about" element={<About />}></Route>
            <Route path="sign-up" element={<Signup />} />
            <Route path="signin" element={<SIgnin />} />
          </Route>
          {/* 404 error page should e the last route */}
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
