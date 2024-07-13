import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
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
    const product = {
        brand: "Anara",
        productName: "Lehenga Choli",
        description: "Anara Women's Net Semi-Stitched Lehenga Choli. Embroidered || Duptta Work : Embroidered & Sequence Work|| Stitched Type : Lehenga Full Stitched and Zip Attach.",
        rating: 4.2,
        numRatings: "1.2k"
    };

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
            </Box>
        </Box>
    );
};

// export default SinglePage;
