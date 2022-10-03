import React from "react";
import { Card } from "../../UI/Card.styled";
import { InputCard } from "../../UI/Input.styled";

const NameInput = () => {
  return (
    <>
      <InputCard
        fw={"700"}
        fs={"0.6rem"}
        font={"Maven Pro, sans-serif"}
        placeholder={"Your Name"}
        pd={"0.5rem"}
      />
    </>
  );
};

export default NameInput;
