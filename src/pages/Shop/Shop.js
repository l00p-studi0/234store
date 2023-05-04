import { Badge,  IconButton } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/img/234logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Grid from "@mui/material/Unstable_Grid2";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [open, setOpenCart] = useState(false);

  const closeCart = () => {
    setOpenCart(!open);
  };

  return (
    <>
      <div className="w-full">
        <div className="w-full px-20 max-md:px-5 py-2  flex justify-between items-center bg-white sticky top-0 z-10">
          <Link
            to="/"
            className="bg-red -skew-y-3 hover:scale-90  text-white duration-300 font-y text-lg py-1 px-7"
          >
            Back
          </Link>
          <img src={logo} alt="logo" className="w-[100px] max-md:w-[50px]"  />
          <IconButton onClick={closeCart}>
            <Badge
              invisible={false}
              badgeContent={3}
              sx={{
                "& .css-fvc8ir-MuiBadge-badge": {
                  backgroundColor: "#dc2626",
                  color: "white",
                },
              }}
            >
              <ShoppingCartIcon fontSize="large" />
            </Badge>
          </IconButton>
        </div>

        <div className="w-full flex px-20 mt-20  max-md:px-5">
          {/* <Box
          className="mr-20 sticky top-40  h-[50vh] flex-col flex"
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          <p className="font-black text-black font-y text-xl">CATGORIES</p>
          <p className="font-y py-1 font-semibold text-ash hover:text-red cursor-pointer duration-400">
            SHIRT
          </p>
          <p className="font-y py-1 font-semibold text-ash hover:text-red cursor-pointer duration-400">
            JACKET
          </p>
          <p className="font-y py-1 font-semibold text-ash hover:text-red cursor-pointer duration-400">
            HOODIES
          </p>
          <p className="font-y py-1 font-semibold text-ash hover:text-red cursor-pointer duration-400">
            HAT
          </p>
          <p className="font-y py-1 font-semibold text-ash hover:text-red cursor-pointer duration-400">
            UNDERWEAR
          </p>
          <p className="font-y py-1 font-semibold text-ash hover:text-red cursor-pointer duration-400">
            TOPS
          </p>
          <p className="font-y py-1 font-semibold text-ash hover:text-red cursor-pointer duration-400">
            SHORTS
          </p>
          <p className="font-y py-1 font-semibold text-ash hover:text-red cursor-pointer duration-400">
            T-SHIRT
          </p>
          <p className="font-y py-1 font-semibold text-ash hover:text-red cursor-pointer duration-400">
            TRACKSUIT
          </p>
        </Box> */}

          <Grid container className="w-full" spacing={2}>
            <Grid lg={3} md={4} sm={6} xs={6} className="cursor-pointer">
              <Link to="/shop/Item1">
                <div className="w-full h-[300px] max-sm:h-[200px] bg-ashh"></div>
                <div className="flex justify-between py-3">
                  <p className="text-black font-y font-medium text-xl">
                    Outfit Name
                  </p>
                  <p className="text-black font-y font-bold text-xl">$60</p>
                </div>
              </Link>
            </Grid>

            <Grid lg={3} md={4} sm={6} xs={6} className="cursor-pointer">
              <div className="w-full h-[300px] max-sm:h-[200px] bg-ashh"></div>
              <div className="flex justify-between py-3">
                <p className="text-black font-y font-medium text-xl">
                  Outfit Name
                </p>
                <p className="text-black font-y font-bold text-xl">$60</p>
              </div>
            </Grid>
            <Grid lg={3} md={4} sm={6} xs={6} className="cursor-pointer">
              <div className="w-full h-[300px] max-sm:h-[200px] bg-ashh"></div>
              <div className="flex justify-between py-3">
                <p className="text-black font-y font-medium text-xl">
                  Outfit Name
                </p>
                <p className="text-black font-y font-bold text-xl">$60</p>
              </div>
            </Grid>
            <Grid lg={3} md={4} sm={6} xs={6} className="cursor-pointer">
              <div className="w-full h-[300px] max-sm:h-[200px] bg-ashh"></div>
              <div className="flex justify-between py-3">
                <p className="text-black font-y font-medium text-xl">
                  Outfit Name
                </p>
                <p className="text-black font-y font-bold text-xl">$60</p>
              </div>
            </Grid>
            <Grid lg={3} md={4} sm={6} xs={6} className="cursor-pointer">
              <div className="w-full h-[300px] max-sm:h-[200px] bg-ashh"></div>
              <div className="flex justify-between py-3">
                <p className="text-black font-y font-medium text-xl">
                  Outfit Name
                </p>
                <p className="text-black font-y font-bold text-xl">$60</p>
              </div>
            </Grid>
            <Grid lg={3} md={4} sm={6} xs={6} className="cursor-pointer">
              <div className="w-full h-[300px] max-sm:h-[200px] bg-ashh"></div>
              <div className="flex justify-between py-3">
                <p className="text-black font-y font-medium text-xl">
                  Outfit Name
                </p>
                <p className="text-black font-y font-bold text-xl">$60</p>
              </div>
            </Grid>
            <Grid lg={3} md={4} sm={6} xs={6} className="cursor-pointer">
              <div className="w-full h-[300px] max-sm:h-[200px] bg-ashh"></div>
              <div className="flex justify-between py-3">
                <p className="text-black font-y font-medium text-xl">
                  Outfit Name
                </p>
                <p className="text-black font-y font-bold text-xl">$60</p>
              </div>
            </Grid>
            <Grid lg={3} md={4} sm={6} xs={6} className="cursor-pointer">
              <div className="w-full h-[300px] max-sm:h-[200px] bg-ashh"></div>
              <div className="flex justify-between py-3">
                <p className="text-black font-y font-medium text-xl">
                  Outfit Name
                </p>
                <p className="text-black font-y font-bold text-xl">$60</p>
              </div>
            </Grid>
            <Grid lg={3} md={4} sm={6} xs={6} className="cursor-pointer">
              <div className="w-full h-[300px] max-sm:h-[200px] bg-ashh"></div>
              <div className="flex justify-between py-3">
                <p className="text-black font-y font-medium text-xl">
                  Outfit Name
                </p>
                <p className="text-black font-y font-bold text-xl">$60</p>
              </div>
            </Grid>
            <Grid lg={3} md={4} sm={6} xs={6} className="cursor-pointer">
              <div className="w-full h-[300px] max-sm:h-[200px] bg-ashh"></div>
              <div className="flex justify-between py-3">
                <p className="text-black font-y font-medium text-xl">
                  Outfit Name
                </p>
                <p className="text-black font-y font-bold text-xl">$60</p>
              </div>
            </Grid>
            <Grid lg={3} md={4} sm={6} xs={6} className="cursor-pointer">
              <div className="w-full h-[300px] max-sm:h-[200px] bg-ashh"></div>
              <div className="flex justify-between py-3">
                <p className="text-black font-y font-medium text-xl">
                  Outfit Name
                </p>
                <p className="text-black font-y font-bold text-xl">$60</p>
              </div>
            </Grid>
            <Grid lg={3} md={4} sm={6} xs={6} className="cursor-pointer">
              <div className="w-full h-[300px] max-sm:h-[200px] bg-ashh"></div>
              <div className="flex justify-between py-3">
                <p className="text-black font-y font-medium text-xl">
                  Outfit Name
                </p>
                <p className="text-black font-y font-bold text-xl">$60</p>
              </div>
            </Grid>
            <Grid lg={3} md={4} sm={6} xs={6} className="cursor-pointer">
              <div className="w-full h-[300px] max-sm:h-[200px] bg-ashh"></div>
              <div className="flex justify-between py-3">
                <p className="text-black font-y font-medium text-xl">
                  Outfit Name
                </p>
                <p className="text-black font-y font-bold text-xl">$60</p>
              </div>
            </Grid>
            <Grid lg={3} md={4} sm={6} xs={6} className="cursor-pointer">
              <div className="w-full h-[300px] max-sm:h-[200px] bg-ashh"></div>
              <div className="flex justify-between py-3">
                <p className="text-black font-y font-medium text-xl">
                  Outfit Name
                </p>
                <p className="text-black font-y font-bold text-xl">$60</p>
              </div>
            </Grid>
            <Grid lg={3} md={4} sm={6} xs={6} className="cursor-pointer">
              <div className="w-full h-[300px] max-sm:h-[200px] bg-ashh"></div>
              <div className="flex justify-between py-3">
                <p className="text-black font-y font-medium text-xl">
                  Outfit Name
                </p>
                <p className="text-black font-y font-bold text-xl">$60</p>
              </div>
            </Grid>
            <Grid lg={3} md={4} sm={6} xs={6} className="cursor-pointer">
              <div className="w-full h-[300px] max-sm:h-[200px] bg-ashh"></div>
              <div className="flex justify-between py-3">
                <p className="text-black font-y font-medium text-xl">
                  Outfit Name
                </p>
                <p className="text-black font-y font-bold text-xl">$60</p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <Cart openCart={open} closeCart={closeCart} />
    </>
  );
};

export default Shop;
