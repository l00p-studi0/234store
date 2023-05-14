import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

export default function App() {
  const config = {
    public_key: "FLWPUBK_TEST-8b31322d3f6c32ef56b77d50f9acac3c-X",
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd,bank",
    customer: {
      email: "user@gmail.com",
      phone_number: "070********",
      name: "john doe",
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Continue to shipping!",
    callback: (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  return (
    <>
      {/* <h1>Hello Test user</h1> */}
      <FlutterWaveButton
        className="bg-red h-[50px] w-full text-white font-n font-medium text-md max-lg:text-sm mt-10"
        {...fwConfig}
      />
    </>
  );
}
