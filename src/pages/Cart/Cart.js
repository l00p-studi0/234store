import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import { Slide } from "@mui/material";

const Cart = (props) => {
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
  });

  useEffect(() => {
    console.log(props.openCart);
  }, [])
  

  return (
    <>
      <Dialog
        fullScreen
        open={props.openCart}
        onClose={props.closeCart}
        TransitionComponent={Transition}
        sx={{
          "& .MuiDialog-container": {
            display: "flex",
            justifyContent: "flex-end",
            "& .MuiPaper-root": {
              width: "50%",
            },
            "& .css-m9glnp-MuiPaper-root-MuiDialog-paper": {
              backgroundColor: "#ffffff",
            },
          },

          background: "rgba(229,229,229,0.4)",
        }}
      ></Dialog>
    </>
  );
};

export default Cart;
