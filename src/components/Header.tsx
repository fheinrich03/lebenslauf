import React from 'react';
import { Box, Typography } from '@mui/material';

interface HeaderProps {
  name: string;
  title: string;
  summary: string;
}

const codeColor = '#1976d2';

const Header: React.FC<HeaderProps> = ({ name, title, summary }) => {
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
      <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 2, fontSize: '1.1rem', fontWeight: 500 }}>
        Fokus: Fullstack, AWS Cloud, Mobile Development, Testing
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: '0.95rem' }}>
        {summary}
      </Typography>
    </Box>
  );
};

export default Header; 