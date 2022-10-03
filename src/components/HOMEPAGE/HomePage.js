import React from "react";
import NavBar from "./NAVBAR/NavBar";
import SectionOne from "./SECTIONONE/SectionOne";
import SectionOneMobile from "./SECTIONONE/SectionOneMobile";
import { Card } from "../UI/Card.styled";
import SectionThree from "./SECTIONTHREE/SectionThree";
import SectionThreeMobile from "./SECTIONTHREE/SectionThreeMobile";
import Form from "./FORMSECTION/Form";
import SectionFour from "./SECTIONFOUR/SectionFour";
import NavBarMobile from "./NAVBAR/NavBarMobile";
import SectionFourMobile from "./SECTIONFOUR/SecionFourMobile";

const HomePage = ({ setMode, mode, fontSizes, UI, colors }) => {
  return (
    <>
      <Card tr={"0.5s"} mg={"0rem 0rem 0rem 0rem"} bg={colors.bgColor}>
        {UI.mobile ? (
          <NavBarMobile
            setMode={setMode}
            mode={mode}
            fontSizes={fontSizes}
            UI={UI}
            colors={colors}
          />
        ) : (
          <NavBar
            setMode={setMode}
            mode={mode}
            fontSizes={fontSizes}
            UI={UI}
            colors={colors}
          />
        )}
        {UI.mobile ? (
          <SectionOneMobile fontSizes={fontSizes} UI={UI} colors={colors} />
        ) : (
          <SectionOne fontSizes={fontSizes} UI={UI} colors={colors} />
        )}
        {UI.mobile ? (
          <SectionThreeMobile fontSizes={fontSizes} UI={UI} colors={colors} />
        ) : (
          <SectionThree fontSizes={fontSizes} UI={UI} colors={colors} />
        )}

        {UI.mobile ? (
          <SectionFourMobile fontSizes={fontSizes} UI={UI} colors={colors} />
        ) : (
          <SectionFour fontSizes={fontSizes} UI={UI} colors={colors} />
        )}

        <Form fontSizes={fontSizes} UI={UI} colors={colors} />
        <Card fs={"0.7rem"} ta={"center"} mg={"8rem 0 0rem 0"}>
          Copyright © 2019 Company Name . All rights reserved
        </Card>
        <Card fs={"0.5rem"} ta={"center"} mg={"1rem 0"}>
          Developed by Zodak
        </Card>
      </Card>
    </>
  );
};

export default HomePage;
