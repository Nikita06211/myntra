import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ChatIcon from '@mui/icons-material/Chat';
import {SizeChartButtons} from './SizeChartButtons';
import {ProductDescription} from './ProductDescription';
import {ProductPricing} from './ProductPricing';
import ProductHighlights from './ProductHighlights';
import c1 from './CollectionImages/c1.png';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const SinglePage = () => {
  const [showChat, setShowChat] = useState(false);

  const product = {
    brand: "Anara",
    productName: "Lehenga Choli",
    description: "Anara Women's Net Semi-Stitched Lehenga Choli. Embroidered || Duptta Work : Embroidered & Sequence Work|| Stitched Type : Lehenga Full Stitched and Zip Attach.",
    rating: 4.2,
    numRatings: "1.2k"
  };

  const handleChatToggle = () => {
    setShowChat(!showChat);
  };

  return (
    <Box display="flex" alignItems="flex-start" justifyContent="space-between" position="relative">
      {/* Left section for image */}
      <Box>
        <ImageList
          sx={{ width: 770, p: 2, pr: 4 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          <ImageListItem cols={2} rows={5}>
            <img
              {...srcset(c1, 121, 5, 2)}
              alt="Product"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
      </Box>

      {/* Right section for product details */}
      <Box ml={4} display="flex" flexDirection="column" alignItems="flex-start">
        <ProductDescription
          brand={product.brand}
          productName={product.productName}
          description={product.description}
          rating={product.rating}
          numRatings={product.numRatings}
        />
        <Box mt={2}>
          <SizeChartButtons />
        </Box>
        {/* <Box mt={2}>
          <SkinColorButtons />
        </Box> */}
        <Box mt={2}>
          <ProductPricing />
        </Box>
        <Box mt={2}>
          <ProductHighlights />
        </Box>
        {/* <Box mt={2}>
          <Button variant="contained" onClick={handleChatToggle}>
            Chat with Us
          </Button>
          {showchat && (
            <Box mt={8} sx={{ border: '1px solid #ccc', borderRadius: '4px', padding: '10px', width: '300px', overflow:'visible' }}>
              <TextField
                label="Your Message"
                multiline
                rows={10}
                variant="outlined"
                fullWidth
              />
              <Box mt={1} display="flex" justifyContent="flex-end">
                <Button variant="contained" color="primary">
                  Send
                </Button>
              </Box>
            </Box>
          )}
        </Box> */}
      </Box>

      {/* Chat icon at the bottom right corner */}
      <Box
        position="fixed"
        bottom={16}
        right={16}
        zIndex={1000}
      >
        <IconButton color="primary" onClick={handleChatToggle}>
          <ChatIcon fontSize="large"/>
        </IconButton>
        {showChat && (
          <Box mt={2} sx={{ border: '1px solid #ccc', borderRadius: '4px', padding: '10px', width: '400px', backgroundColor: 'white' }}>
            <TextField
              label="Customize your dress"
              multiline
              rows={10}
              variant="outlined"
              fullWidth
            />
            <Box mt={1} display="flex" justifyContent="flex-end">
              <Button variant="contained" color="primary">
                Customize
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SinglePage;
