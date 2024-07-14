import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios';
import SkinColorButtons from './SkinColorButtons';
import SizeChartButtons from './SizeChartButtons';
import Box from '@mui/material/Box';
import ProductDescription from './ProductDescription';
import ProductPricing from './ProductPricing';
import ProductHighlights from './ProductHighlights';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const SingleProductPageW = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const itemData = [
    {
      img: `http://localhost:3000/img/${product._id}`,
      rows: 5,
      cols: 2,
    },
    // You can add more items here if needed
  ];

  return (
    <Box display="flex" alignItems="flex-start" justifyContent="space-between">
      {/* Left section for image */}
      <Box>
        <ImageList
          sx={{ width: 770, p: 2, pr: 4 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      {/* Right section for product details */}
      <Box ml={4} display="flex" flexDirection="column" alignItems="flex-start">
        <ProductDescription
          brand="Anara"
          productName="Dress"
          description="Anara Women's Net Semi-Stitched Lehenga Choli. Embroidered || Duptta Work : Embroidered & Sequence Work|| Stitched Type : Lehenga Full Stitched and Zip Attach."
          rating={4.2}
          numRatings="1.2k"
        />
        <Box mt={2}>
          <SizeChartButtons />
        </Box>
        <Box mt={2}>
          <SkinColorButtons />
        </Box>
        <Box mt={2}>
          <ProductPricing />
        </Box>
        <Box mt={2}>
          <ProductHighlights />
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProductPageW;
