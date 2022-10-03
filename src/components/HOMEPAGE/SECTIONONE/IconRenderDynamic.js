import React from "react";
import "./IconTransition.css";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Card } from "../../UI/Card.styled";
import { CardSpan } from "../../UI/CardSpan.styled";
import { ImageCard } from "../../UI/ImageCard.styled";
import { useState } from "react";

const IconRenderDynamic = ({ fontSizes, UI, colors }) => {
  const [renderState, setRenderState] = useState(false);
  setTimeout(() => {
    renderState ? setRenderState(false) : setRenderState(true);
    // console.log(state);
  }, 1000);
  return (
    <SwitchTransition>
      <CSSTransition
        key={renderState}
        addEndListener={(node, done) => {
          node.addEventListener("transitionend", done, false);
        }}
        classNames="fade"
      >
        <CardSpan cl={colors.mainYellow}>
          {renderState ? (
            <ImageCard
              src={UI.download}
              width={"0.6rem"}
              height={"0.6rem"}
              mg={"0 0.2rem -0.1rem 0"}
            />
          ) : (
            <ImageCard
              src={UI.download2}
              width={"0.6rem"}
              height={"0.6rem"}
              mg={"0 0.2rem -0.1rem 0"}
            />
          )}
        </CardSpan>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default IconRenderDynamic;
