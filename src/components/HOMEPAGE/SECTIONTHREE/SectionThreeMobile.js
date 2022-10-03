import React from "react";
import { useState, useEffect } from "react";
import { Card } from "../../UI/Card.styled";
import { ImageCard } from "../../UI/ImageCard.styled";
import { CardSpan } from "../../UI/CardSpan.styled";
import { Button } from "../../UI/Button.styled";
import Experiences from "./List";
import Education from "./Education";
import List from "./List";
const SectionThreeMobile = ({ fontSizes, UI, colors }) => {
  const items = [
    {
      Header: "Experiences",
      lists: [
        {
          sn: 0,
          Year: 2019,
          name: "Dental App",
          text: "Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.",
        },
        {
          Year: 2019,
          name: "NFT App",
          text: "Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.",
        },
      ],
    },
    {
      sn: 1,
      Header: "Education",
      lists: [
        {
          Year: 2021,
          name: "Udemy course",
          text: "Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.",
        },
        {
          Year: 2019,
          name: "Pirple",
          text: "Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.",
        },
      ],
    },
  ];

  const rendered = items.map((items) => {
    return (
      <List
        key={items.sn}
        fontSizes={fontSizes}
        UI={UI}
        colors={colors}
        items={items}
      />
    );
  });
  return (
    <>
      <Card
        mg={"2rem 3rem"}
        // dp={"grid"}
        // gridC={"50% 50%"}
        // height={"20rem"}
        // bd={"1px solid red"}
      >
        {rendered}
      </Card>
    </>
  );
};

export default SectionThreeMobile;
