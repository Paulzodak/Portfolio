import React from "react";
import { Card } from "../../UI/Card.styled";
import { ImageCard } from "../../UI/ImageCard.styled";
import { useContext, useState } from "react";
import { UiContext } from "../../../App";
import DropDown from "./DropDown";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./Transition.css";
import resume from "../../../resources/resume.pdf";
import { CardLink } from "../../UI/Link.styled";

const NavBar = ({ setMode, mode, fontSizes, UI, colors }) => {
  const navList = [
    { header: "About" },
    { header: "Projects" },
    { header: "Resume", resource: resume },
    { header: "Contact" },
  ];
  const renderedNavList = navList.map((item) => {
    return (
      <CardLink
        href={item.resource ? resume : null}
        download
        td={"none"}
        fw={"700"}
        cl={colors.lighterGrey}
        // fs={fontSizes.NavBar}
        fs={"70%"}
      >
        {item.header}
      </CardLink>
    );
  });

  const [dropDown, setDropDown] = useState(false);
  const Ui = useContext(UiContext);
  const dropDownHandler = () => {
    setDropDown((dropDown) => !dropDown);
  };

  return (
    <Card
      mg={"0rem 7.5%"}
      height={"2rem"}
      width={"85%"}
      bd={"0px solid red"}
      gridC={"25% 45% 35%"}
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
      <Card bd={"0px solid red"}>
        <ImageCard
          src={UI.userIcon}
          heigth={"1.3rem"}
          width={"1.3rem"}
          mg={"0rem 0rem -0.8rem 0rem"}
        />
        <Card
          fs={fontSizes.NavBar}
          fw={"700"}
          ps={"relative"}
          pstp={"0.7rem"}
          mg={"0rem 0.5rem"}
          dp={"inline"}
        >
          Paul
        </Card>
      </Card>
      <Card>
        <Card
          mg={"1rem 0 0 0"}
          dp={"grid"}
          gridC={"auto auto auto auto"}
          bd={"0px solid red"}
        >
          {renderedNavList}
        </Card>
      </Card>
      <Card height={"2rem"} width={"100%"} bd={"0px solid red"}>
        <Card bd={"0px solid blue"} float={"right"} height={"100%"}>
          <ImageCard
            dp={"inline"}
            height={"1.3rem"}
            width={"1.3rem"}
            src={UI.moonIcon}
            bg={colors.textWhite}
            br={"10rem"}
            mg={"0rem 0rem -1rem 0rem"}
            // bg={"red"}
          />

          <ImageCard
            height={"0.7rem"}
            width={"0.7rem"}
            dp={"inline"}
            cl={"white"}
            mg={"0rem 0rem -0.8rem 0rem"}
            src={Ui.downCaret}
            onClick={dropDownHandler}
            bg={colors.textWhite}
            br={"10rem"}

            // bg={"blue"}
          />
          {/* <Card
            ps={"relative"}
            pstp={"0.7rem"}
            mg={"0rem 0.2rem"}
            fs={fontSizes.NavBar}
            dp={"inline"}
          >
            Color mode
          </Card> */}
        </Card>
      </Card>
    </Card>
  );
};

export default NavBar;
