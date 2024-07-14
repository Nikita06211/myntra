import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from 'react';
import dark from "../Images/dark.png";

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
  const [showImage, setShowImage] = useState(false);

  const handleDark = () => {
    setShowImage(!showImage);
  };
  return (
    <>
    {showImage && (
      <img
        src={dark}
        alt="Dark Mode Image"
        style={{  position: 'absolute', top: '85px', left: '400px', maxWidth: '50%', maxHeight:'78%'}}
      />
    )}
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <ColorButton bgcolor="#f8cba6" onClick={handleDark}/>
      <ColorButton bgcolor="#d1a386" />
      <ColorButton bgcolor="#a57d5e" onClick={handleDark}/>
      <ColorButton bgcolor="#70422a" />
    </Box>
    </>
  );
};

export default SkinColorButtons;