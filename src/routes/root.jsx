import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaGithubAlt } from "react-icons/fa";

const Root = () => {
  const [clicked, setClicked] = useState(false);
  const hoverLink = "hover:text-mid hover:decoration-mid font-semibold p-2";

  return (
    <>
      <div className="w-screen font-poppins flex justify-center mt-8">
        <nav className="text-lg relative flex justify-between w-[568px] items-center py-3 px-4 border-2 rounded-3xl">
          <NavLink to="/" className="text-[2rem] font-bold no-underline">
            <span className="text-accent">K</span>azyel
          </NavLink>

          <div className="flex gap-6">
            <a
              href="https://github.com/Kazyel/mini-projects"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithubAlt className="w-10 h-10 text-white hover:text-accent transition-all duration-200" />
            </a>

            {/* Bars */}
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
          </div>

          {/* Dropdown Menu */}
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
                </NavLink>{" "}
              </ul>
            </div>
          ) : (
            ""
          )}
        </nav>
      </div>
      <main className="mt-[7rem] font-poppins text-lg">
        <Outlet />
      </main>
      <footer className="w-full h-20 font-poppins flex justify-center items-center absolute bottom-0">
        <div className="flex gap-1 text-[0.75rem] font-semibold opacity-50">
          <p className="text-mid">Website by:</p>
          <a>Kazyel</a>
        </div>
      </footer>
    </>
  );
};

export default Root;
