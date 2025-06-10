import React from 'react';
import { Box, Typography } from '@mui/material';
import { Language } from '../types';

interface LanguagesProps {
  languages: Language[];
}

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ color: '#2196f3', fontWeight: 'bold', mb: 1.5, fontFamily: 'monospace', letterSpacing: 1, fontSize: '1.1rem' }}>
        Sprachen
      </Typography>
      {languages.map((language, index) => (
        <Box key={index} sx={{ display: 'flex', mb: 0.5 }}>
          <Box sx={{ width: '150px', fontWeight: 'bold', fontSize: '0.9rem', color: 'rgba(0, 0, 0, 0.6)', mb: 1 }}>
            {language.name}:
          </Box>
          <Box sx={{ flex: 1, fontSize: '0.9rem', color: 'rgba(0, 0, 0, 0.87)', lineHeight: 1.5 }}>
            {language.level}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Languages; 