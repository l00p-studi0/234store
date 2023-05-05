import React, { useEffect } from "react";
import { Drawer, IconButton, Slide } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ClearIcon from "@mui/icons-material/Clear";

const Cart = (props) => {
  useEffect(() => {
    console.log(props.openCart);
  }, []);

  return (
    <>
      <Drawer
        anchor="right"
        open={props.openCart}
        onClose={props.closeCart}
        sx={{
          "& .MuiDrawer-paper": {
            width: { lg: "40%", sm: "60%", md: "50%", xs: "100%" },
          },

          background: "rgba(229,229,229,0.4)",
        }}
      >
        <div className="p-3 mb-4">
          <IconButton onClick={() => props.closeCart()}>
            <KeyboardBackspaceIcon fontSize="large" />
          </IconButton>
        </div>
        <div className="p-6 overflow-y-scroll overflow-x-hidden h-[60%] ">
          <div className="flex justify-between mb-4">
            <div className="flex">
              <div className="w-[100px] h-[100px] bg-ashh mr-2"></div>
              <div className="flex flex-col justify-between">
                <p className="font-y font-semibold text-xl ">Outfit name</p>
                <p className="font-y font-medium text-lg ">Size: XXL </p>
                <p className="font-y font-medium text-lg ">Quantity: 2 </p>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <IconButton>
                <ClearIcon />
              </IconButton>
              <p className="font-y font-semibold text-2xl ">$120</p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex">
              <div className="w-[100px] h-[100px] bg-ashh mr-2"></div>
              <div className="flex flex-col justify-between">
                <p className="font-y font-semibold text-xl ">Outfit name</p>
                <p className="font-y font-medium text-lg ">Size: XXL </p>
                <p className="font-y font-medium text-lg ">Quantity: 2 </p>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <IconButton>
                <ClearIcon />
              </IconButton>
              <p className="font-y font-semibold text-2xl ">$120</p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex">
              <div className="w-[100px] h-[100px] bg-ashh mr-2"></div>
              <div className="flex flex-col justify-between">
                <p className="font-y font-semibold text-xl ">Outfit name</p>
                <p className="font-y font-medium text-lg ">Size: XXL </p>
                <p className="font-y font-medium text-lg ">Quantity: 2 </p>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <IconButton>
                <ClearIcon />
              </IconButton>
              <p className="font-y font-semibold text-2xl ">$120</p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex">
              <div className="w-[100px] h-[100px] bg-ashh mr-2"></div>
              <div className="flex flex-col justify-between">
                <p className="font-y font-semibold text-xl ">Outfit name</p>
                <p className="font-y font-medium text-lg ">Size: XXL </p>
                <p className="font-y font-medium text-lg ">Quantity: 2 </p>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <IconButton>
                <ClearIcon />
              </IconButton>
              <p className="font-y font-semibold text-2xl ">$120</p>
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="flex">
              <div className="w-[100px] h-[100px] bg-ashh mr-2"></div>
              <div className="flex flex-col justify-between">
                <p className="font-y font-semibold text-xl ">Outfit name</p>
                <p className="font-y font-medium text-lg ">Size: XXL </p>
                <p className="font-y font-medium text-lg ">Quantity: 2 </p>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <IconButton>
                <ClearIcon />
              </IconButton>
              <p className="font-y font-semibold text-2xl ">$120</p>
            </div>
          </div>
          
        </div>

        <div className="border-t-[1px] border-ashh absolute w-full bottom-0 p-6">
          <div className="flex justify-between">
            <p className="font-y font-semibold text-lg ">Subtotal: </p>
            <p className="font-y font-semibold text-2xl ">$120 </p>
          </div>
          <button className="bg-red h-[50px] w-full text-white font-y font-medium text-lg max-lg:text-sm mt-5 hover:scale-90 duration-300">
            CHECKOUT
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default Cart;
