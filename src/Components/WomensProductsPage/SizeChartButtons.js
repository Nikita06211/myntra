import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

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
  return (
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <SizeButton size="S">S</SizeButton>
      <SizeButton size="S">M</SizeButton>
      <SizeButton size="S">L</SizeButton>
      <SizeButton size="S">XL</SizeButton>
    </Box>
  );
};

export default SizeChartButtons;