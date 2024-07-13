import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const SingleCard = ({ multi }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/collection");
  };

  return (
    <Card sx={{ maxWidth: 345, m: 2 }} onClick={handleCardClick}>
      <CardMedia
        component="img"
        height="420"
        image={multi.imageURL}
        alt={multi.typography}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {multi.typography}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {multi.Price} <strike>{multi.realPrice}</strike>
        </Typography>
        <div className="rating" style={{ display: 'flex', alignItems: 'center', marginTop: 8 }}>
          <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
          <span style={{ marginLeft: 8 }}>{multi.rating}</span>
        </div>
        <Typography
          sx={{
            backgroundColor: "green",
            color: "white",
            fontSize: 18,
            m: 1,
            p: 1,
          }}
        >
          <center>Buy Now</center>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The best piece of wearing printed Kurti is that you don't require
          additional extras with them. It will go well with printed Kurtis.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="info">
          Offer
        </Button>
        <Button size="small" color="info">
          Know More
        </Button>
      </CardActions>
    </Card>
  );
};

export default SingleCard;
