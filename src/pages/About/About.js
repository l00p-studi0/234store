import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/img/234logo.png";
import one from "./../../assets/img/one.jpg";
import facebook from "./../../assets/img/facebook.png";
import instagram from "./../../assets/img/instagram.png";
import tiktok from "./../../assets/img/tiktok.png";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const About = () => {
//   const [datestate, setdate] = useState("");
//   const [time, settime] = useState("");
//   const func = () => {
//     var d = new Date();
//     var da = d.toLocaleTimeString();
//     settime(da);
//     var date = new Date();
//     var data = date.toLocaleDateString("en-us", { dateStyle: "full" });
//     setdate(data);
//   };
//   setInterval(func, 1000);
  return (
    <>
      <div className="flex flex-col items-center  min-h-screen w-full">
        <div className="w-full px-20 max-md:px-10 py-2  flex justify-between items-center bg-white sticky top-0 z-10">
          <Link
            to="/"
            className="bg-red -skew-y-3 hover:scale-90  text-white duration-300 font-y text-lg py-1 px-7"
          >
            Back
          </Link>
          <img src={logo} alt="logo" className="w-[100px] max-md:w-[50px]" />
          <IconButton>
            <Badge
              invisible={false}
              badgeContent={3}
              sx={{
                "& .css-1o4n2ye": {
                  backgroundColor: "#dc2626",
                  color: "white",
                },
              }}
            >
              <ShoppingCartIcon fontSize="large" />
            </Badge>
          </IconButton>
        </div>

        <div className="overflow-hidden w-[70%] h-[450px] mt-5 max-sm:h-[300px]">
          <img src={one} alt="234" className="scale-150" />
        </div>
        <p className="w-[70%] mt-7 font-y text-xl">
          +234 is a premier luxury clothing brand that celebrates the richness
          of Nigerian culture. Founded in 2022 by Funto Adeyemo, +234 blends the
          beauty and heritage of Nigeria to create refined garments with a
          simplistic style that exudes sophistication and class. At +234, our
          ultimate goal is to shift the world's perception of Nigeria by
          providing quality clothing made from the finest materials that can be
          worn anywhere. We believe in empowering our customers to be
          themselves, embrace their roots, and take pride in their unique
          identities. Our clothing lets you express your individuality,
          confidence, and style like never before. From the moment you slip into
          a +234 garment, you'll feel the difference in quality and
          craftsmanship.
        </p>
        <p className="w-[70%] mt-7 font-y text-xl">
          We use only the best materials and pay close attention to every detail
          to ensure each piece is perfect. Our team of designers and tailors
          works tirelessly to create exclusive designs that are both timeless
          and on-trend, ensuring that you always look your best. At +234, we're
          not just a clothing brand but a movement. We're dedicated to inspiring
          individuals to learn about their culture and roots, embrace their
          heritage, and confidently express their identity. Join us on this
          journey, and experience the epitome of luxury fashion with +234. Shop
          our latest collection today and discover what sets us apart from the
          rest.
        </p>

        <Link to="/" className="text-white bg-black my-10 p-2 font-y text-lg">
          Back home
        </Link>
      </div>
      <div className="fixed bottom-1 left-1">
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
    </>
  );
};

export default About;
