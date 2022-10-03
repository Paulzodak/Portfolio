import React from "react";
import "./IconTransition.css";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Card } from "../../UI/Card.styled";
import { CardSpan } from "../../UI/CardSpan.styled";
import { ImageCard } from "../../UI/ImageCard.styled";
import { useState } from "react";

const IconRender = ({ fontSizes, UI, colors }) => {
  return (
    <ImageCard
      src={UI.linkIcon}
      width={"0.6rem"}
      height={"0.6rem"}
      mg={"0 0.2rem -0.1rem 0"}
    />
  );
};

export default IconRender;
