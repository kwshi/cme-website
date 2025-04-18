import { Box, Image } from '@chakra-ui/react';
import { useState } from 'react';

const VidBox = ({ instrument, videoUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const getAutoplayUrl = (url) => {
    return url.includes('?') ? `${url}&autoplay=1` : `${url}?autoplay=1`;
  };

  const getThumbnailUrl = (url) => {
    const videoId = url.split('/embed/')[1]?.split('?')[0];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`; // Use high-resolution thumbnail
  };

  return (
    <Box
      position="relative"
      width="700px"
      height="450px"
      borderRadius="15px"
      overflow="hidden"
    >
      {!isPlaying && (
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bgImage={`url(${getThumbnailUrl(videoUrl)})`}
          opacity="0.8"
          display="flex"
          justifyContent="center"
          alignItems="center"
          zIndex="1"
          cursor="pointer"
          onClick={handlePlay}
        >
          <Image
            src={
              'https://res.cloudinary.com/dp0f6uqzo/image/upload/v1733091410/carbon_play-outline_wqpzdo.png'
            }
            alt="Play Button"
            boxSize="80px"
          />
        </Box>
      )}
      {isPlaying && (
        <Box
          as="iframe"
          src={getAutoplayUrl(videoUrl)}
          width="700px"
          height="450px"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={instrument.name}
        />
      )}
    </Box>
  );
};

export default VidBox;
