import React, { useEffect, useState } from "react";
import { Box, Drawer, IconButton, Slide } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ClearIcon from "@mui/icons-material/Clear";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem } from "../../redux/cart";

const Cart = (props) => {
  const { cartItems } = useSelector((state) => state.cartItem);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(cartItems);
  }, []);

  const totalPrice = cartItems.reduce((currentItem, currentIteration) => {
    return currentItem + currentIteration.price;
  }, 0);

  // console.log(totalPrice);

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
        <>
          <div className="p-3">
            <IconButton onClick={() => props.closeCart()}>
              <KeyboardBackspaceIcon fontSize="large" />
            </IconButton>
          </div>
          <div className="p-6 overflow-y-scroll overflow-x-hidden h-[60%]">
            {cartItems.map((item, index) => {
              return (
                <div className="flex justify-between mb-8" key={index}>
                  <div className="flex">
                    <div className="w-[100px] h-[100px]  mr-2 overflow-hidden">
                      <img src={item.image} alt="outfit" />
                    </div>
                    <div className="flex flex-col justify-between">
                      <p className="font-r font-semibold text-lg ">
                        {item.name}
                      </p>
                      <p className="font-r font-medium text-md ">
                        Size: {item.size}{" "}
                      </p>
                      <p className="font-r font-medium text-md ">
                        Quantity: {item.amount}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <IconButton onClick={dispatch(deleteItem(item.id))}>
                      <ClearIcon />
                    </IconButton>
                    <p className="font-r font-semibold text-lg ">
                      ${item.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="border-t-[1px] border-ashh absolute w-full bottom-0 p-6 bg-white">
            <div className="flex justify-between">
              <p className="font-r font-semibold text-lg ">Subtotal: </p>
              <p className="font-r font-semibold text-lg ">${totalPrice} </p>
            </div>
            <Link to="/shipping">
              <button className="bg-red h-[50px] w-full text-white font-r font-medium text-md max-lg:text-sm mt-5 hover:scale-90 duration-300">
                CHECKOUT
              </button>
            </Link>
          </div>{" "}
        </>
      </Drawer>
    </>
  );
};

export default Cart;
