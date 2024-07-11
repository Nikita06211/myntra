import React, { useState, useEffect } from "react";
import "./LadiesClothes.scss";
import SingleCard from "./SingleCard";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const LadiesCloths = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:3000/images");
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching the cards:", error);
      }
    };

    fetchCards();
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="cards">
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item xs={3} key={card._id}>
            <Item>
              <SingleCard multi={card} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default LadiesCloths;