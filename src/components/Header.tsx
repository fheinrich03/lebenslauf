import React from 'react';
import { Box, Typography } from '@mui/material';
import { ResumeData } from '../types';

interface HeaderProps {
  data: ResumeData;
}

const codeColor = '#1976d2';

const Header: React.FC<HeaderProps> = ({ data }) => {
  const { name, title } = data;

  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: 'bold', fontFamily: 'monospace', letterSpacing: 1 }}
        >
          {name}
        </Typography>
      </Box>
      <Typography variant="h5" color="primary" gutterBottom sx={{ fontFamily: 'monospace', letterSpacing: 1 }}>
        {title}
      </Typography>
    </Box>
  );
};

export default Header; 