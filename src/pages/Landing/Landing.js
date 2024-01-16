import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setOutfit } from "../../redux/outfits";
import logo from "./../../assets/img/234logo.png";
import facebook from "./../../assets/img/facebook.png";
import instagram from "./../../assets/img/instagram.png";
import tiktok from "./../../assets/img/tiktok.png";

const Landing = () => {
  const [datestate, setdate] = useState("");
  const [time, settime] = useState("");
  const dispatch = useDispatch()
  const func = () => {
    var d = new Date();
    var da = d.toLocaleTimeString();
    settime(da);
    var date = new Date();
    var data = date.toLocaleDateString("en-us", { dateStyle: "full" });
    setdate(data);
  };
  setInterval(func, 1000);
  

  useEffect(() => {
    (async function () {
      try {
        const response = await axios({
          method: "get",
          url: "https://two34store-api.onrender.com/products/all-products/?limit=0&skip=0",
        });
        dispatch(setOutfit(response.data.data.Products.reverse()));
      } catch (error) {
        // console.log(error);
      }
    })();
    // console.log(outfits);
  }, []);

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
            className="my-3 p-1 px-7 hover:bg-red hover:skew-y-3 hover:scale-90  hover:text-white duration-300 font-y text-lg"
          >
            About
          </Link>
          <Link
            to="/shop"
            className="my-3  py-1 px-7 hover:bg-red hover:skew-y-3 hover:scale-90  hover:text-white duration-300 font-y text-lg"
          >
            Shop
          </Link>
          <Link className="my-3 p-1 px-7 hover:bg-red hover:skew-y-3 hover:scale-90  hover:text-white  duration-300 font-y text-lg">
            Lookbook
          </Link>

          <Link className="my-3 p-1 px-7 hover:bg-red hover:skew-y-3 hover:scale-90  hover:text-white  duration-300 font-y text-lg">
            Contact
          </Link>
        </div>
      </div>

      <div className="fixed bottom-1 left-5">
        <a href="mailto:Help@official234.com" target="_blank">
          <img src={facebook} alt="facebook" className="w-[30px] my-3" />
        </a>
        <a href="https://instagram.com/official234store?igshid=NTc4MTIwNjQ2YQ==" target="_blank">
          <img src={instagram} alt="instagram" className="w-[30px] my-3" />
        </a>
        <a href="https://www.tiktok.com/@official234store?_t=8c916YQ1AF8&_r=1" target="_blank">
          <img src={tiktok} alt="tiktok" className="w-[30px] my-3" />
        </a>
      </div>
    </div>
  );
};

export default Landing;
