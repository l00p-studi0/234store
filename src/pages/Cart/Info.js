import { Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { Badge, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "./../../assets/img/234logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import Cart from "./Cart";

const Info = () => {
  const [open, setOpenCart] = useState(false);
  const { cartItems } = useSelector((state) => state.cartItem);

  const closeCart = () => {
    setOpenCart(!open);
  };

  return (
    <>
      <div className="p-3 flex flex-col items-center">
        <div className="w-full px-20 max-md:px-5 py-2  flex justify-between items-center bg-white sticky top-0 z-10">
          <Link
            to="/shop/item"
            className="bg-red -skew-y-3 hover:scale-90  text-white duration-300 font-y text-lg py-1 px-7"
          >
            Back
          </Link>
          <img src={logo} alt="logo" className="w-[100px] max-md:w-[50px]" />
          <IconButton onClick={closeCart}>
            <Badge
              invisible={false}
              badgeContent={cartItems.length}
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
        <div className="p-8 w-2/4">
          <p className="font-n text-lg font-semibold mb-10">
            Shipping Information
          </p>
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
                  <label
                    htmlFor="firstname"
                    className="font-n font-bold text-sm mb-1 mt-4"
                  >
                    First name
                  </label>
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
                  <label
                    htmlFor="lastname"
                    className="font-n font-bold text-sm mb-1 mt-4"
                  >
                    Last name
                  </label>
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
                  <label
                    htmlFor="email"
                    className="font-n font-bold text-sm mb-1 mt-4"
                  >
                    Email
                  </label>
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
                  <label
                    htmlFor="phone"
                    className="font-n font-bold text-sm mb-1 mt-4"
                  >
                    Phone
                  </label>
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
                  <label
                    htmlFor="address"
                    className="font-n font-bold text-sm mb-1 mt-4"
                  >
                    Street Address
                  </label>
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
                  <label
                    htmlFor="state"
                    className="font-n font-bold text-sm mb-1 mt-4"
                  >
                    State
                  </label>
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
                <button
                  type="submit"
                  className="bg-red h-[50px] w-full text-white font-n font-medium text-md max-lg:text-sm mt-10 hover:scale-90 duration-300"
                >
                  Continue to shipping
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <Cart openCart={open} closeCart={closeCart} />
    </>
  );
};

export default Info;
