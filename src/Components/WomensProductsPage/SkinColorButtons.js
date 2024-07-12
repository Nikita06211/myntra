import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ColorButton = styled(Button)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor,
  width: '50px',
  height: '60px',
  borderRadius: '50%',
  '&:hover': {
    opacity: 0.8,
    backgroundColor: bgcolor,
  },
}));

const SkinColorButtons = () => {
  return (
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <ColorButton bgcolor="#f8cba6" />
      <ColorButton bgcolor="#d1a386" />
      <ColorButton bgcolor="#a57d5e" />
      <ColorButton bgcolor="#70422a" />
    </Box>
  );
};

export default SkinColorButtons;