import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const hoverLink = "hover:text-mid hover:decoration-mid font-semibold";

const Root = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="w-screen flex justify-center">
        <nav className="text-lg relative flex justify-between w-[750px] items-center pt-4 px-6 pb-6 border-b-2 rounded-md">
          <NavLink to="/" className="text-4xl font-bold no-underline">
            <span className="text-accent">K</span>azyel
          </NavLink>
          {!clicked ? (
            <Bars3Icon
              className="cursor-pointer h-9 w-9 text-white"
              onClick={() => {
                setClicked(!clicked);
              }}
            ></Bars3Icon>
          ) : (
            <XMarkIcon
              className="cursor-pointer h-9 w-9 text-white"
              onClick={() => {
                setClicked(!clicked);
              }}
            ></XMarkIcon>
          )}
          {clicked ? (
            <div className="right-0 top-24 bg-dark p-4 rounded-md absolute">
              <ul className="gap-6 h-full items-center flex flex-col">
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
      <main className="mt-10  w-screen text-center">
        <Outlet />
      </main>
    </>
  );
};

export default Root;
