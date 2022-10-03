import React from "react";
import { Card } from "../../UI/Card.styled";
import { Button } from "../../UI/Button.styled";
import { useState } from "react";
import IconRender from "./IconRender";
import IconRenderDynamic from "./IconRenderDynamic";
import { CardLink } from "../../UI/Link.styled";
const List = ({ fontSizes, UI, colors, items }) => {
  const rendered = items.lists.map((item) => {
    return (
      <>
        <Card key={item.Year} mg={"2rem 1rem"} bd={"0px solid green"}>
          <Card dp={"grid"} gridC={"25% 75%"} bd={"0px solid yellow"}>
            <Card
              br={"50%"}
              bg={colors.darkGrey}
              height={"3rem"}
              width={"3rem"}
              fs={"0.6rem"}
              cl={"white"}
              pd={"1.2rem 0.8rem"}
              fw={"700"}
            >
              {item.Year}
            </Card>
            <Card>
              <Card fs={"1.2rem"} fw={"700"} cl={colors.darkGrey}>
                {item.name}
              </Card>
              <Card cl={colors.lighterGrey} mg={"0.5rem 0rem"} fs={"0.6rem"}>
                {item.text}
              </Card>
              <a href={item.link} target={"_blank"}>
                <Button
                  bd={"none"}
                  br={"0.7rem"}
                  height={"1.5rem"}
                  width={"6rem"}
                  hvcl={colors.mainYellow}
                  cl={colors.lightGrey}
                >
                  <CardLink
                    // bd={"1px solid red"}

                    cl={"inherit"}
                    td={"none"}
                    mg={"0 10%"}
                    width={"80%"}
                    height={"50%"}
                  >
                    <IconRender fontSizes={fontSizes} UI={UI} colors={colors} />

                    <Card
                      font={"Maven Pro, sans-serif"}
                      dp={"inline"}
                      fs={fontSizes.textButton}
                      fw={"700"}
                      cl={"inherit"}
                      tr={"0.3s"}
                    >
                      View Page
                    </Card>
                  </CardLink>
                </Button>
              </a>
            </Card>
          </Card>
        </Card>
      </>
    );
  });
  return (
    <>
      <Card
        fw={"700"}
        fs={fontSizes.textHeader}
        bd={"0px solid blue"}
        // height={"2rem"}
        cl={colors.darkGrey}
      >
        {items.Header}
      </Card>
      <Card
        dp={"grid"}
        gridC={UI.mobile ? "100%" : "50% 50%"}
        bd={"0px solid red"}
      >
        {rendered}
      </Card>
    </>
  );
};

export default List;
