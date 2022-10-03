import "./App.css";
import { useState } from "react";
import { Card } from "./components/UI/Card.styled";
import DropDown from "./components/HOMEPAGE/NAVBAR/DropDown";
import { createContext } from "react";
import React from "react";
import HomePage from "./components/HOMEPAGE/HomePage";

import userIcon from "./images/user-regular.svg";
import moonIcon from "./images/moon-regular.svg";
import download from "./images/download.svg";
import download2 from "./images/download2.svg";

import toggleOn from "./images/toggleOn.svg";
import toggleOff from "./images/toggleOff.svg";
import downCaret from "./images/downCaret.svg";
import linkIcon from "./images/link-solid.svg";
import menuIcon from "./images/menuIcon.svg";

import Engineer from "./images/engineer.svg";

import darkModeIcon from "./images/dark.png";
import lightModeIcon from "./images/light.png";
import { useMediaQuery } from "react-responsive";

import "./App.css";
import { useSelector } from "react-redux";
import { CSSTransition, SwitchTransition } from "react-transition-group";
export const UiContext = createContext();
const App = () => {
  const modes = useSelector((states) => states.mode);
  // const [state, setState] = useState(0);
  // setTimeout(() => {
  //   setState(state + 1);
  //   console.log(state);
  // }, 2000);
  const mobile = useMediaQuery({ query: "(max-width : 550px)" });

  const [mode, setMode] = useState([
    {
      id: 0,
      src: lightModeIcon,
      active: true,
      color: "white",
      bs: "0.1px 0.1px 15px rgb(210, 210, 210)",
      bd: "none",
      Iconbd: "1px solid black",
    },
    {
      id: 1,
      src: darkModeIcon,
      active: false,
      color: "black",
      bs: "none",
      bd: "2px solid gray",
      Iconbd: "1px solid white",
    },
  ]);

  const UI = {
    menuIcon: menuIcon,
    mobile: mobile,
    userIcon: userIcon,
    moonIcon: moonIcon,
    Engineer: Engineer,
    download: download,
    download2: download2,
    toggleOn: toggleOn,
    toggleOff: toggleOff,
    lightModeIcon: lightModeIcon,
    darkModeIcon: darkModeIcon,
    downCaret: downCaret,
    linkIcon: linkIcon,
  };

  const modeColorRender = modes.map((item) => {
    if (item.active) {
      console.log(item.color);
      return item.color;
    }
    // else if (!item.active) {
    //   console.log(item.color);
    //   return item.color;
    // }
  });
  const colors = {
    bgColor: modeColorRender,
    darkGrey: "#353535",
    lightGrey: " #5b5b5b",
    lighterGrey: "#484848",
    textWhite: "#ffffff",
    darkModeColor: "#0c0c0d",
    mainColor: "#ffc200",
    borderColor: "#f2f2f1",
    mainYellow: "#ffc200",
    buttonColor: "#474559",
  };
  const fontSizes = {
    NavBar: "0.7rem",
    textNormal: "0.7rem",
    textButton: "0.6rem",
    textHeader: "1.5rem",
  };

  const [UiState, setUiState] = useState(UI);
  // const [modeState, setModeState] = useState;

  return (
    <UiContext.Provider value={UiState}>
      {/* <SwitchTransition>
        <CSSTransition
          key={modeColorRender}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames="fade"
        >
          {modeColorRender ? ( */}
      <HomePage
        setMode={setMode}
        mode={mode}
        fontSizes={fontSizes}
        UI={UI}
        colors={colors}
      />
      {/* ) : (
            <HomePage
              setMode={setMode}
              mode={mode}
              fontSizes={fontSizes}
              UI={UI}
              colors={colors}
            />
          )}
        </CSSTransition>
      </SwitchTransition> */}
    </UiContext.Provider>
  );
};

export default App;
