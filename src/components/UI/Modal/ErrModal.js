import React from "react";
import { Card } from "../Card.styled";

const ErrModal = ({ children }) => {
  return (
    <>
      <Card
        zindex={"10000"}
        bdft={"blur(5px)"}
        ps={"absolute"}
        width={"100vw"}
        // bg={"white"}
        height={"140rem"}
      >
        <Card
          ps={"sticky"}
          mg={"0% 25%"}
          bg={"white"}
          width={"50%"}
          height={"4rem"}
        >
          efnjfnje
        </Card>
      </Card>
    </>
  );
};

export default ErrModal;
