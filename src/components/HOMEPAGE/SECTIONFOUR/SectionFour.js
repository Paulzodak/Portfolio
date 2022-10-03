import React from "react";
import { useState, useEffect } from "react";
import { Card } from "../../UI/Card.styled";
import { ImageCard } from "../../UI/ImageCard.styled";
import { CardSpan } from "../../UI/CardSpan.styled";
import { Button } from "../../UI/Button.styled";
import Experiences from "./List";
import List from "./List";
const SectionFour = ({ fontSizes, UI, colors }) => {
  const items = [
    {
      Header: "Projects",
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
          link: "https://nft-zodaknewborn.netlify.app",
          text: "Proin ornare non purus ut rutrum. Nulla facilisi. Aliquam laoreet libero ac pharetra feugiat. Cras ac fermentum nunc, a faucibus nunc.",
        },
        {
          Year: 2022,
          name: "Todo App",
          link: "https://zodaknewborn-todoapp.netlify.app",
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
        mg={"0rem 3rem"}
        // dp={"grid"}
        // gridC={"50% 50%"}
        // height={"20rem"}
        bd={"0px solid red"}
      >
        {rendered}
      </Card>
    </>
  );
};

export default SectionFour;
