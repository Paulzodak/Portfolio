import React from "react";
import { Card } from "../../UI/Card.styled";
import { ImageCard } from "../../UI/ImageCard.styled";
import { UiContext } from "../../../App";
import { useContext } from "react";
import { useState } from "react";
import { useReducer } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setActive } from "../../redux/mode";
// const modePropsReducer = (state, action) => {
//   if (action.index === 1) {
//     state[1].active = true;
//   }
// };
const DropDown = ({ setMode, mode }) => {
  const dispatch = useDispatch();
  const Ui = useContext(UiContext);
  const modes = useSelector((states) => states.mode);
  console.log(modes);

  const clickHandler = (id) => {
    dispatch(setActive({ id: id }));
    console.log(modes);
    //   setMode((prev) => {
    //     const b = [...prev];
    //     for (let i = 0; i < b.length; i++) {
    //       b[i].active = false;
    //     }
    //     console.log(b);
    //     const a = prev[index];
    //     if (a.active === true) {
    //       a.active = false;
    //     } else if (a.active === false) {
    //       a.active = true;
    //     }
    //     b.splice(index, 1, a);
    //     return [...b];
    //   });
  };
  const bdRender = modes.map((item) => {
    if (item.active) {
      return item.Iconbd;
    }
  });

  const rendered = modes.map((item, index) => {
    // console.log(item.active);
    // });
    return (
      <ImageCard
        key={item.id}
        // bd={item.active ? "0.1rem solid black" : null}
        bd={item.Iconbd}
        br={"0.3rem"}
        height={"2rem"}
        src={item.src}
        // hvbd={"1px solid white"}
        bcl={"yellow"}
        onClick={() => clickHandler(item.id)}
      />
    );
  });

  // --------SETTING COLORS DYNAMICALLY FOR THE MODES
  const modeRender = modes.map((item) => {
    if (item.active) {
      return item.color;
    }
  });
  const shadowRender = modes.map((item) => {
    if (item.active) {
      return item.bs;
    }
  });
  const borderRender = modes.map((item) => {
    if (item.active) {
      return item.bd;
    }
  });
  const bgRender = modes.map((item) => {
    if (item.active) {
      return item.bg;
    }
  });
  return (
    <>
      <Card
        ps={"absolute"}
        // pslf={"60%"}
        psrt={"4%"}
        pstp={"2.5rem"}
        dp={"grid"}
        gridC={"auto auto"}
        gridjc={"space-around"}
        pd={"0.5rem"}
        zindex={"200"}
        height={"3rem"}
        width={"8rem"}
        bg={bgRender}
        // bd={borderRender}
        br={"0.5rem"}
        // hvbg={"red"}
        // bs={"0.1px 0.1px 15px rgb(210, 210, 210)"}
        bs={shadowRender}
      >
        {rendered}
      </Card>
    </>
  );
};

export default DropDown;
