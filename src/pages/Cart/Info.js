import React from "react";

const Info = () => {
  return (
    <>
      <div className="p-3">
        <IconButton onClick={() => props.closeCart()}>
          <KeyboardBackspaceIcon fontSize="large" />
        </IconButton>
      </div>
    </>
  );
};

export default Info;
