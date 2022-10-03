import React from "react";
import { Card } from "../../UI/Card.styled";

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
            </Card>
          </Card>
        </Card>
      </>
    );
  });
  return (
    <>
      <Card bd={"0px solid red"}>
        <Card
          fw={"700"}
          fs={fontSizes.textHeader}
          bd={"0px solid blue"}
          // height={"2rem"}
          cl={colors.darkGrey}
        >
          {items.Header}
        </Card>
        {rendered}
      </Card>
    </>
  );
};

export default List;
