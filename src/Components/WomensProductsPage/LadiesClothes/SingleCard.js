import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const SingleCard = ({ multi }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${multi._id}`);
  };

  return (
    <div className="singleCard" onClick={handleClick}>
      <CardMedia
        component="img"
        height="420"
        width="50"
        image={`http://localhost:3000/img/${multi._id}`}
        alt={multi.filename}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {multi.filename}
        </Typography>
        <Typography>Size: {multi.size}</Typography>
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
    </div>
  );
};

export default SingleCard;
