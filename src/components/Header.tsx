import React from 'react';
import { Box, Typography } from '@mui/material';

interface HeaderProps {
  name: string;
  title: string;
  summary: string;
}

const Header: React.FC<HeaderProps> = ({ name, title, summary }) => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 800,
          color: 'rgba(0, 0, 0, 0.87)',
          mb: 1,
          fontSize: '2.25rem',
          letterSpacing: 0.5,
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="h5"
        sx={{
          color: '#2196f3',
          mb: 2,
          fontSize: '1.25rem',
          fontWeight: 500,
          letterSpacing: 0.5,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          color: 'rgba(0, 0, 0, 0.6)',
          fontSize: '1rem',
          lineHeight: 1.6,
          mb: 2,
        }}
      >
        {summary}
      </Typography>
    </Box>
  );
};

export default Header; 