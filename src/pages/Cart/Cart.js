import React, { useEffect, useState } from "react";
import { Box, Drawer, IconButton, Slide } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ClearIcon from "@mui/icons-material/Clear";
import { Formik } from "formik";
import * as Yup from "yup";

const Cart = (props) => {
  useEffect(() => {
    // console.log(props.openCart);
  }, []);
  const [ship, setShip] = useState("cart");

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
        {ship === "cart" ? (
          <>
            <div className="p-3">
              <IconButton onClick={() => props.closeCart()}>
                <KeyboardBackspaceIcon fontSize="large" />
              </IconButton>
            </div>
            <div className="p-6 overflow-y-scroll overflow-x-hidden h-[60%] ">
              <div className="flex justify-between mb-8">
                <div className="flex">
                  <div className="w-[100px] h-[100px] bg-ashh mr-2"></div>
                  <div className="flex flex-col justify-between">
                    <p className="font-r font-semibold text-lg ">Outfit name</p>
                    <p className="font-r font-medium text-md ">Size: XXL </p>
                    <p className="font-r font-medium text-md ">Quantity: 2 </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <IconButton>
                    <ClearIcon />
                  </IconButton>
                  <p className="font-r font-semibold text-lg ">$120</p>
                </div>
              </div>
              <div className="flex justify-between mb-8">
                <div className="flex">
                  <div className="w-[100px] h-[100px] bg-ashh mr-2"></div>
                  <div className="flex flex-col justify-between">
                    <p className="font-r font-semibold text-lg ">Outfit name</p>
                    <p className="font-r font-medium text-md ">Size: XXL </p>
                    <p className="font-r font-medium text-md ">Quantity: 2 </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <IconButton>
                    <ClearIcon />
                  </IconButton>
                  <p className="font-r font-semibold text-lg ">$120</p>
                </div>
              </div>
              <div className="flex justify-between mb-8">
                <div className="flex">
                  <div className="w-[100px] h-[100px] bg-ashh mr-2"></div>
                  <div className="flex flex-col justify-between">
                    <p className="font-r font-semibold text-lg ">Outfit name</p>
                    <p className="font-r font-medium text-md ">Size: XXL </p>
                    <p className="font-r font-medium text-md ">Quantity: 2 </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <IconButton>
                    <ClearIcon />
                  </IconButton>
                  <p className="font-r font-semibold text-lg ">$120</p>
                </div>
              </div>
              <div className="flex justify-between mb-8">
                <div className="flex">
                  <div className="w-[100px] h-[100px] bg-ashh mr-2"></div>
                  <div className="flex flex-col justify-between">
                    <p className="font-r font-semibold text-lg ">Outfit name</p>
                    <p className="font-r font-medium text-md ">Size: XXL </p>
                    <p className="font-r font-medium text-md ">Quantity: 2 </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <IconButton>
                    <ClearIcon />
                  </IconButton>
                  <p className="font-r font-semibold text-lg ">$120</p>
                </div>
              </div>
              <div className="flex justify-between mb-8">
                <div className="flex">
                  <div className="w-[100px] h-[100px] bg-ashh mr-2"></div>
                  <div className="flex flex-col justify-between">
                    <p className="font-r font-semibold text-lg ">Outfit name</p>
                    <p className="font-r font-medium text-md ">Size: XXL </p>
                    <p className="font-r font-medium text-md ">Quantity: 2 </p>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <IconButton>
                    <ClearIcon />
                  </IconButton>
                  <p className="font-r font-semibold text-lg ">$120</p>
                </div>
              </div>
            </div>
            <div className="border-t-[1px] border-ashh absolute w-full bottom-0 p-6 bg-white">
              <div className="flex justify-between">
                <p className="font-r font-semibold text-lg ">Subtotal: </p>
                <p className="font-r font-semibold text-lg ">$120 </p>
              </div>
              <button
                className="bg-red h-[50px] w-full text-white font-r font-medium text-md max-lg:text-sm mt-5 hover:scale-90 duration-300"
                onClick={() => setShip("ship")}
              >
                CHECKOUT
              </button>
            </div>{" "}
          </>
        ) : ship === "ship" ? (
          <>
            <div className="p-3">
              <IconButton
                onClick={() => {
                  setShip("cart");
                }}
              >
                <KeyboardBackspaceIcon fontSize="large" />
              </IconButton>
            </div>

            <div className="p-8">
              <p className="font-n text-lg font-semibold mb-10">Shipping Information</p>
              <Formik
                initialValues={{
                  firstname: "",
                  lastname: "",
                  email: "",
                  phone: "",
                  address: "",
                  city: "",
                  country: "",
                  state: "",
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string()
                    .required("This field is required !")
                    .email("invalid email!"),
                  firstname: Yup.string().required("This field is required !"),
                  lastname: Yup.string().required("This field is required !"),
                  phone: Yup.string().required("This field is required !"),
                  address: Yup.string().required("This field is required !"),
                  city: Yup.string().required("This field is required !"),
                  country: Yup.string().required("This field is required !"),
                  state: Yup.string().required("This field is required !"),
                })}
                //   onSubmit={async (values) => {
                //     const body = {
                //       firstname: values.firstname,
                //     };
                //     handleFormSubmit(JSON.stringify(body));
                //   }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Box className="flex flex-col">
                      <label htmlFor="firstname" className="font-n font-bold text-sm mb-1 mt-4">First name</label>
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        onBlur={handleBlur}
                        value={values.firstname}
                        className="p-1 border-ashh border-[1px] rounded-[2px] "
                      ></input>
                      {errors.firstname && touched.firstname && (
                        <span className="font-n font-bold text-sm text-red">
                          {errors.firstname}
                        </span>
                      )}
                    </Box>
                    <Box className="flex flex-col">
                      <label htmlFor="lastname" className="font-n font-bold text-sm mb-1 mt-4">Last name</label>
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        onBlur={handleBlur}
                        value={values.lastname}
                        className="p-1 border-ashh border-[1px] rounded-[2px] "
                      ></input>
                      {errors.lastname && touched.lastname && (
                        <span className="font-n font-bold text-sm text-red">
                          {errors.lastname}
                        </span>
                      )}
                    </Box>
                    <Box className="flex flex-col">
                      <label htmlFor="email" className="font-n font-bold text-sm mb-1 mt-4">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        onBlur={handleBlur}
                        value={values.email}
                        className="p-1 border-ashh border-[1px] rounded-[2px] "
                      ></input>
                      {errors.email && touched.email && (
                        <span className="font-n font-bold text-sm text-red">
                          {errors.email}
                        </span>
                      )}
                    </Box>
                    <Box className="flex flex-col">
                      <label htmlFor="phone" className="font-n font-bold text-sm mb-1 mt-4">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        onBlur={handleBlur}
                        value={values.phone}
                        className="p-1 border-ashh border-[1px] rounded-[2px] "
                      ></input>
                      {errors.phone && touched.phone && (
                        <span className="font-n font-bold text-sm text-red">
                          {errors.phone}
                        </span>
                      )}
                    </Box>
                    <Box className="flex flex-col">
                      <label htmlFor="address" className="font-n font-bold text-sm mb-1 mt-4">Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        onBlur={handleBlur}
                        value={values.address}
                        className="p-1 border-ashh border-[1px] rounded-[2px] "
                      ></input>
                      {errors.address && touched.address && (
                        <span className="font-n font-bold text-sm text-red">
                          {errors.address}
                        </span>
                      )}
                    </Box>
                    <Box className="flex flex-col">
                      <label htmlFor="city" className="font-n font-bold text-sm mb-1 mt-4">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        onBlur={handleBlur}
                        value={values.city}
                        className="p-1 border-ashh border-[1px] rounded-[2px] "
                      ></input>
                      {errors.city && touched.city && (
                        <span className="font-n font-bold text-sm text-red">
                          {errors.city}
                        </span>
                      )}
                    </Box>
                    <Box className="flex flex-col">
                      <label htmlFor="country" className="font-n font-bold text-sm mb-1 mt-4">Country</label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        onBlur={handleBlur}
                        value={values.country}
                        className="p-1 border-ashh border-[1px] rounded-[2px] "
                      ></input>
                      {errors.country && touched.country && (
                        <span className="font-n font-bold text-sm text-red">
                          {errors.country}
                        </span>
                      )}
                    </Box>
                    <Box className="flex flex-col">
                      <label htmlFor="state" className="font-n font-bold text-sm mb-1 mt-4">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        onBlur={handleBlur}
                        value={values.state}
                        className="p-1 border-ashh border-[1px] rounded-[2px] "
                      ></input>
                      {errors.state && touched.state && (
                        <span className="font-n font-bold text-sm text-red">
                          {errors.state}
                        </span>
                      )}
                    </Box>
                    <button type="submit" className="bg-red h-[50px] w-full text-white font-n font-medium text-md max-lg:text-sm mt-10 hover:scale-90 duration-300">
                        Continue to shipping
                    </button>
                  </form>
                )}
              </Formik>
            </div>
          </>
        ) : null}
      </Drawer>
    </>
  );
};

export default Cart;
