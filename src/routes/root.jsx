import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <>
      <Navbar aboutActive={false}></Navbar>
      <main className="items-center flex flex-col justify-center font-poppins text-lg">
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Root;
