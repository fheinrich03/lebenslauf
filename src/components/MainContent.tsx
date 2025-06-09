import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { ResumeData } from '../types';
import Experience from './Experience';
import Education from './Education';

const MainContent: React.FC<{ data: ResumeData }> = ({ data }) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ color: '#2196f3', fontWeight: 'bold', mb: 1 }}>
        Berufserfahrung
      </Typography>
      <Experience experiences={data.experience} />
      <Divider sx={{ my: 3 }} />
      <Typography variant="h6" sx={{ color: '#2196f3', fontWeight: 'bold', mb: 1 }}>
        Ausbildung
      </Typography>
      <Education education={data.education} />
    </Box>
  );
};

export default MainContent; 