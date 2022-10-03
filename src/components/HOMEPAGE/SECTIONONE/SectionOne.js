import React from "react";
import { useState, useEffect } from "react";
import "./Transition.css";
import { Card } from "../../UI/Card.styled";
import { ImageCard } from "../../UI/ImageCard.styled";
import { CardSpan } from "../../UI/CardSpan.styled";
import { CardLink } from "../../UI/Link.styled";
import { Button } from "./../../UI/Button.styled";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import IconRender from "./IconRender";
import IconRenderDynamic from "./IconRenderDynamic";
import resume from "../../../resources/resume.pdf";

const SectionOne = ({ fontSizes, UI, colors }) => {
  const [state, setState] = useState(false);
  const [iconState, setIconState] = useState(true);
  const [hover, setHover] = useState(false);

  setTimeout(() => {
    state ? setState(false) : setState(true);
    // console.log(state);
  }, 2000);

  const renderedName = () => {
    return (
      <SwitchTransition>
        <CSSTransition
          key={state}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames="fade"
        >
          <CardSpan cl={colors.mainYellow}>
            {state ? "Oje Paul" : "a React Web Developer"}
          </CardSpan>
        </CSSTransition>
      </SwitchTransition>
    );
  };
  const iconInHandler = () => {
    setIconState(false);
    console.log("iconIn");
  };
  const iconOutHandler = () => {
    setIconState(true);
    console.log("iconOut");
  };

  return (
    <>
      <Card
        mg={"4rem 3rem"}
        height={"12rem"}
        dp={"grid"}
        gridC={"65% 35%"}
        bd={"px solid red"}
      >
        <Card bd={"0px solid red"}>
          <Card
            height={"80%"}
            width={"90%"}
            mg={"5% 0 0 0"}
            // bd={"1px solid red"}
          >
            <Card cl={colors.lightGrey} fw={"700"} fs={"0.6rem"}>
              Welcome to my portfolio website!
            </Card>
            <Card mg={"1rem 0 0 0"} fw={"700"} fs={"1.2rem"}>
              Hey folks , i'm {renderedName()}
            </Card>

            <Card
              cl={colors.lightGrey}
              mg={"1rem 0 0 0"}
              fs={fontSizes.textNormal}
            >
              Building a successful product is a challenge. I am highly
              energetic in user experience design, interfaces and web
              development.
            </Card>
            <Button
              mg={"1rem 0 0 0"}
              bd={"none"}
              br={"2rem"}
              height={"1.5rem"}
              width={"9rem"}
              onMouseEnter={iconInHandler}
              onMouseLeave={iconOutHandler}
              hvcl={colors.mainYellow}
              cl={colors.lightGrey}
            >
              <CardLink
                // bd={"1px solid red"}
                href={resume}
                download
                cl={"inherit"}
                td={"none"}
                mg={"0 10%"}
                width={"80%"}
                height={"50%"}
              >
                {iconState ? (
                  <IconRender fontSizes={fontSizes} UI={UI} colors={colors} />
                ) : (
                  <IconRenderDynamic
                    iconState={iconState}
                    fontSizes={fontSizes}
                    UI={UI}
                    colors={colors}
                  />
                )}
                <Card
                  font={"Maven Pro, sans-serif"}
                  dp={"inline"}
                  fs={fontSizes.textButton}
                  fw={"700"}
                  cl={"inherit"}
                  tr={"0.3s"}
                >
                  Download Resume
                </Card>
              </CardLink>
            </Button>
          </Card>
        </Card>
        <Card bd={"0px solid red"}>
          <ImageCard height={"100%"} width={"100%"} src={UI.Engineer} />
        </Card>
      </Card>
    </>
  );
};

export default SectionOne;
