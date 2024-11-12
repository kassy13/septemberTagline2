import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import logo from "../assets/logo2.png";
import {RiMenuLine} from "react-icons/ri";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky shadow z-50 top-0">
      <nav className="hidden justify-between items-center w-full h-16 bg-black text-white relative p-2 mr-auto lg:flex">
        <div className="img w-12 h-8 flex items-center justify-center">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className="flex justify-between gap-4 mr-8">
          <li>
            <NavLink
              to={"/"}
              className={({isActive}) =>
                isActive ? "bg-green-400 p-1 rounded" : " text-gray-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({isActive}) =>
                isActive ? "bg-green-400 p-1 rounded" : " text-gray-500"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact-us"}
              className={({isActive}) =>
                isActive ? "bg-green-400 p-1 rounded" : " text-gray-500"
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/sign-up"}
              className={({isActive}) =>
                isActive ? "bg-green-400 p-1 rounded" : " text-gray-500"
              }
            >
              Sign up
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/login"}
              className={({isActive}) =>
                isActive ? "bg-green-400 p-1 rounded" : " text-gray-500"
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* Mobile nav */}
      <nav className="flex justify-between items-center w-full h-16 bg-black text-white relative p-2 mr-auto lg:hidden">
        <div className="w-14 h-10 flex items-center justify-center">
          <Link to={"/"} className="absolute z-50">
            <img src={logo} alt="" />
          </Link>
        </div>

        <ul
          className={`bg-green-300 h-screen fixed top-0 mt-16 w-screen pt-8 pl-6 left-full transition-all 5s ${
            open ? "!left-0" : " "
          }  `}
        >
          <li>
            <NavLink
              to={"/"}
              className={({isActive}) =>
                isActive ? "bg-green-400 p-1 rounded" : " text-gray-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({isActive}) =>
                isActive ? "bg-green-400 p-1 rounded" : " text-gray-500"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact-us"}
              className={({isActive}) =>
                isActive ? "bg-green-400 p-1 rounded" : " text-gray-500"
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/sign-up"}
              className={({isActive}) =>
                isActive ? "bg-green-400 p-1 rounded" : " text-gray-500"
              }
            >
              Sign up
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/login"}
              className={({isActive}) =>
                isActive ? "bg-green-400 p-1 rounded" : " text-gray-500"
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
        <RiMenuLine onClick={() => setOpen(!open)} color="white" />
      </nav>
    </header>
  );
};

export default Header;
