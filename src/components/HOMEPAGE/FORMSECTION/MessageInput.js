import React from "react";
import { InputCard } from "../../UI/Input.styled";
// import "./message.css";

const MessageInput = () => {
  return (
    <InputCard
      fw={"700"}
      fs={"0.6rem"}
      font={"Maven Pro, sans-serif"}
      placeholder={"Message"}
      phps={"relative"}
      pd={"0 0 6rem 0.6rem"}
      //   phtp={"-3rem"}
      //   phlt={"0.8rem"}
      width={"100%"}
      height={"8rem"}
      mg={"1rem 0rem"}
    />
  );
};

export default MessageInput;
