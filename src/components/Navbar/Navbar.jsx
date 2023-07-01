import { NavLink } from "react-router-dom";
import { FaGithubAlt, FaArrowLeft } from "react-icons/fa";
// import { useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = ({ aboutActive }) => {
  // const [clicked, setClicked] = useState(false);
  const hoverLink =
    "hover:text-mid font-semibold transition-all ease duration-200ms text-xl";

  return (
    <div className="font-poppins flex justify-center mt-7">
      <nav className="text-lg relative flex justify-between min-w-[504px] items-center py-2 px-6 border-2 rounded-3xl">
        <NavLink to="/" className="text-[1.85rem] font-bold no-underline">
          <span className="text-accent">K</span>azyel
        </NavLink>

        <div className="flex items-center gap-4">
          {aboutActive === false ? (
            <NavLink to="/about" className={hoverLink}>
              About
            </NavLink>
          ) : (
            <NavLink to="/" className={hoverLink}>
              <FaArrowLeft className="w-7 h-7" />
            </NavLink>
          )}
          <a
            href="https://github.com/Kazyel/mini-projects"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubAlt className="w-10 h-10 text-white hover:text-accent transition-all duration-200" />
          </a>
        </div>

        {/* Bars
      {!clicked ? (
        <Bars3Icon
          className="cursor-pointer stroke-2 h-10 w-10 text-accent"
          onClick={() => {
            setClicked(!clicked);
          }}
        ></Bars3Icon>
      ) : (
        <XMarkIcon
          className="cursor-pointer stroke-2 h-10 w-10 text-accent"
          onClick={() => {
            setClicked(!clicked);
          }}
        ></XMarkIcon>
      )}
    </div> */}

        {/* Dropdown Menu
    {clicked ? (
      <div className="right-2 top-[80px] border-2 bg-darkest rounded-lg py-2 px-3 absolute">
        <ul className="gap-2 h-full items-center flex flex-col">
          <NavLink to="/example/1" className={hoverLink}>
            Example 1
          </NavLink>
          <NavLink to="/example/2" className={hoverLink}>
            Example 2
          </NavLink>
          <NavLink to="/example/3" className={hoverLink}>
            Example 3
          </NavLink>
          
        </ul>
      </div>
    ) : (
      ""
    )} */}
      </nav>
    </div>
  );
};

export default Navbar;
