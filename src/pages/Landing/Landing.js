import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/img/234logo.png";
import facebook from "./../../assets/img/facebook.png";
import instagram from "./../../assets/img/instagram.png";
import tiktok from "./../../assets/img/tiktok.png";

const Landing = () => {
  const [datestate, setdate] = useState("");
  const [time, settime] = useState("");
  const func = () => {
    var d = new Date();
    var da = d.toLocaleTimeString();
    settime(da);
    var date = new Date();
    var data = date.toLocaleDateString("en-us", { dateStyle: "full" });
    setdate(data);
  };
  setInterval(func, 1000);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="h-full flex flex-col items-center">
        <div className="overflow-hidden">
          <img src={logo} alt="logo" className="block w-[200px] " />
        </div>
        <div className="flex">
          <p id="pop" className="mr-4 font-y text-lg">
            {datestate}
          </p>
          <p id="po" className="font-y text-lg">
            {time}
          </p>
        </div>

        <div className="flex flex-col items-center mt-10">
          <Link
            to="/about"
            className="my-3 p-1 hover:text-red  duration-300 font-y text-lg"
          >
            about
          </Link>
          <Link
            to="/shop"
            className="my-3  py-1 px-7 bg-red skew-y-3 hover:scale-90  text-white duration-300 font-y text-lg"
          >
            shop
          </Link>
          <Link className="my-3 p-1 hover:text-red  duration-300 font-y text-lg">
            FAQ
          </Link>

          <Link className="my-3 p-1 hover:text-red  duration-300 font-y text-lg">
            contact
          </Link>
        </div>
      </div>

      <div className="fixed bottom-1 left-5">
        <a href="" target="_blank">
          <img src={facebook} alt="facebook" className="w-[30px] my-3" />
        </a>
        <a href="" target="_blank">
          <img src={instagram} alt="instagram" className="w-[30px] my-3" />
        </a>
        <a href="" target="_blank">
          <img src={tiktok} alt="tiktok" className="w-[30px] my-3" />
        </a>
      </div>
    </div>
  );
};

export default Landing;
