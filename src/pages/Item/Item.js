import { Badge, Box, Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import logo from "./../../assets/img/234logo.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Carousel from "nuka-carousel";

const Item = () => {
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [open, setOpenCart] = useState(false);
  const { itemId } = useSelector((state) => state.outfit);
  const [itemDetail, setItemDetail] = useState([]);
  const [slideIndex, setslideIndex] = useState(0);


  const closeCart = (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenCart(!open);
  };

  const handleChange = (event) => {
    setSize(event.target.value);
  };
  useEffect(() => {
    (async function () {
      try {
        const response = await axios({
          method: "get",
          url: `https://234-backend-api-production.up.railway.app/products/${itemId}`,
        });
        setItemDetail(response.data.data.product);
        // console.log(response.data.data.product);
      } catch (error) {
        // console.log(error);
      }
    })();
    // console.log(outfits);
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="w-full px-10 max-md:px-5 py-2  flex justify-between items-center bg-white sticky top-0 z-10">
          <Link
            to="/shop"
            className="bg-red -skew-y-3 hover:scale-90  text-white duration-300 font-y text-lg py-1 px-7"
          >
            Back
          </Link>
          <img src={logo} alt="logo" className="w-[100px] max-md:w-[50px]" />
          <IconButton onClick={closeCart}>
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

        <Box className="w-full flex px-10 sm:px-40 md:px-10  mt-20 max-md:flex-col">
          <div className="w-2/4 max-md:w-full mr-20 flex lg:flex-row-reverse md:flex-col flex-col">
            <Carousel
              className="w-full !h-[400px]  lg:h-[400px] md:h-[350px]  max-lg:mb-5 overflow-hidden"
              slideIndex={slideIndex}
            >
              {itemDetail.featuredImages?.map((item, index) => {
                return <img src={item} alt="outfit" />;
              })}
            </Carousel>
            <div className="flex lg:flex-col md:flex-row ">
              {itemDetail.featuredImages?.map((item, index) => {
                return (
                  <div key={index} className="w-[100px] h-[100px] block  mr-2 lg:mb-2 overflow-hidden cursor-pointer" onClick={()=>setslideIndex(index)}>
                    <img  src={item} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-2/4 max-md:w-full flex flex-col justify-between">
            <p className="text-[30px] p-0 m-0 font-y font-medium">
              {itemDetail.Name}
            </p>
            <p className="text-[40px] p-0 m-0 font-y font-semibold mt-5">
              ${itemDetail.Price * quantity}
            </p>

            <Box className="mt-20">
              <FormControl
                className="w-[200px]"
                sx={{
                  "& .css-fvipm8.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "#dc2626",
                    },
                  "& .css-1ald77x.Mui-focused": {
                    color: "#dc2626",
                  },
                }}
              >
                <InputLabel id="demo-simple-select-label" className="font-y">
                  Select size
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={size}
                  label="Select Size"
                  onChange={handleChange}
                >
                  {itemDetail.Size?.map((item, index) => {
                    return (
                      <MenuItem value={item} className="font-y" key={index}>
                        {item}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>
            <div className="flex items-end justify-between">
              <div className="w-[200px] h-[50px] mt-20 border-[1px] border-ashh flex justify-between items-center mr-1">
                <Button
                  className=" h-full w-1/3 font-y"
                  sx={{ color: "black", fontSize: "20px" }}
                  onClick={() =>
                    quantity > 1 ? setQuantity(quantity - 1) : null
                  }
                >
                  -
                </Button>
                <p className="font-y text-2xl">{quantity}</p>
                <Button
                  className=" h-full w-1/3 font-y"
                  sx={{ color: "black", fontSize: "20px" }}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>

              <button className="bg-red h-[50px] w-1/2 text-white font-y font-medium text-lg max-lg:text-sm hover:-skew-y-3 hover:scale-90 duration-300 ">
                Add to cart
              </button>
            </div>
          </div>
        </Box>
      </div>
      <Cart openCart={open} closeCart={closeCart} />
    </>
  );
};

export default Item;
