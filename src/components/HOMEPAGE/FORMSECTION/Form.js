import React from "react";
import { Card } from "../../UI/Card.styled";
import Email from "./Email";
import NameInput from "./NameInput";
import MessageInput from "./MessageInput";
import { Button } from "../../UI/Button.styled";
import { InputCard } from "../../UI/Input.styled";
const Form = ({ fontSizes, UI, colors }) => {
  return (
    <Card mg={UI.mobile ? "1rem 2rem" : "1rem 7rem"} bd={"0px solid red"}>
      <Card cl={colors.darkGrey} fs={fontSizes.textHeader} fw={"700"}>
        Interested to work together? Let's talk
      </Card>
      <Card
        mg={"1rem 0rem"}
        height={"1.5rem"}
        width={"100%"}
        dp={"grid"}
        gridC={"47% 47%"}
        gridjc={"space-between"}
        bd={"0px solid red"}
      >
        <NameInput />
        <Email />
      </Card>
      <MessageInput />
      <Button
        font={"Maven Pro, sans-serif"}
        width={"7rem"}
        fw={"700"}
        cl={"white"}
        fs={"0.6rem"}
        bg={colors.mainYellow}
        bd={"none"}
        br={"1rem"}
        height={"1.8rem"}
        float={"right"}
      >
        Send message
      </Button>
    </Card>
  );
};

export default Form;
