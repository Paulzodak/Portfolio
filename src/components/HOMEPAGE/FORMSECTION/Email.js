import React from "react";
import { Card } from "../../UI/Card.styled";
import { InputCard } from "../../UI/Input.styled";

const Email = ({ placeholder }) => {
  return (
    <>
      <InputCard
        fw={"700"}
        fs={"0.6rem"}
        font={"Maven Pro, sans-serif"}
        placeholder={"Email"}
        pd={"0.5rem"}
      />
    </>
  );
};

export default Email;
