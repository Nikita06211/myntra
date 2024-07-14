import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Lsize from '../Images/Lsize.jpg';
import { useState } from 'react';

const SizeButton = styled(Button)(({ theme, size }) => ({
  backgroundColor: '#fffff',
  width: size === 'S' ? '50px' : size === 'M' ? '70px' : size === 'L' ? '90px' : '110px',
  height: size === 'S' ? '50px' : size === 'M' ? '70px' : size === 'L' ? '90px' : '110px',
  borderRadius: '50%',
  border: '2px, solid, black',
  fontSize: size === 'S' ? '12px' : size === 'M' ? '14px' : size === 'L' ? '16px' : '18px',
  '&:hover': {
    opacity: 0.8,
    backgroundColor: '#fffff',
  },
}));

const SizeChartButtons = () => {
  
  const [showImage, setShowImage] = useState(false);

  const handleSize = () => {
    setTimeout(() => {
      setShowImage(!showImage);
    }, 2000);
  }
  return (
    <>
    {showImage && (
      <img
        src={Lsize}
        alt="Dark Mode Image"
        style={{  position: 'absolute', top: '85px', left: '400px', maxWidth: '50%', maxHeight:'78%'}}
      />
    )}
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <SizeButton size="S">S</SizeButton>
      <SizeButton size="S">M</SizeButton>
      <SizeButton size="S" onClick={handleSize}>L</SizeButton>
      <SizeButton size="S">XL</SizeButton>
    </Box>
    </>
  );
};

export default SizeChartButtons;