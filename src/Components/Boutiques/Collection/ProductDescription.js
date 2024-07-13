import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

export const ProductDescription = ({ brand, productName, description, rating, numRatings }) => {
  return (
    <Box>
      <Button href="#Choli" color="primary">
        Brand: {brand}
      </Button>
      <h1>{productName}</h1>
      <p>{description}</p>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          '& > *': {
            p: 2,
          },
        }}
      >
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          <Button>
            {rating} <StarIcon />
          </Button>
          <Button>{numRatings} Ratings</Button>
        </ButtonGroup>
      </Box>
      <hr />
    </Box>
  );
};

// export default ProductDescription;
