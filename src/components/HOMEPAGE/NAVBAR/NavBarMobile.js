import React from "react";
import { Card } from "../../UI/Card.styled";
import { ImageCard } from "../../UI/ImageCard.styled";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import DropDown from "./DropDown";
import resume from "../../../resources/resume.pdf";
import { useState } from "react";
import "./Transition.css";
const NavBarMobile = ({ setMode, mode, fontSizes, UI, colors }) => {
  const [dropDown, setDropDown] = useState(false);
  const dropDownHandler = () => {
    setDropDown((dropDown) => !dropDown);
  };
  const navList = [
    { header: "About" },
    { header: "Projects" },
    { header: "Resume", resource: resume },
    { header: "Contact" },
  ];
  return (
    <>
      <Card
        mg={"0rem 7.5%"}
        height={"2rem"}
        width={"85%"}
        bd={"0px solid red"}
        gridC={"50% 50%"}
        dp={"grid"}

        //   ovfx={"hidden"}
      >
        <SwitchTransition>
          <CSSTransition
            key={dropDown}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            {dropDown ? <DropDown setMode={setMode} mode={mode} /> : <></>}
          </CSSTransition>
        </SwitchTransition>
        <ImageCard src={UI.menuIcon} height={"inherit"} />
        <Card height={"2rem"} width={"100%"} bd={"0px solid red"}>
          <Card bd={"0px solid blue"} float={"right"} height={"100%"}>
            <ImageCard
              dp={"inline"}
              //   height={"1.3rem"}
              height={"inherit"}
              //   width={"1.3rem"}
              width={"inherit"}
              src={UI.moonIcon}
              bg={colors.textWhite}
              br={"10rem"}
              mg={"0rem 0rem 0rem 0rem"}
              // bg={"red"}
            />

            <ImageCard
              height={"inherit"}
              width={"inherit"}
              //   height={"2rem"}
              //   width={"2rem"}
              dp={"inline"}
              cl={"white"}
              mg={"0rem 0rem 0rem 0rem"}
              src={UI.downCaret}
              onClick={dropDownHandler}
              bg={colors.textWhite}
              br={"10rem"}

              // bg={"blue"}
            />
          </Card>
        </Card>
      </Card>
    </>
  );
};

export default NavBarMobile;
