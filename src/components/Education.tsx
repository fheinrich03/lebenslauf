import React from 'react';
import { Box, Typography } from '@mui/material';
import { Education as EducationType } from '../types';

interface EducationProps {
  education: EducationType[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <Box>
      {education.map((edu, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Typography variant="h6" component="h3">
            {edu.degree}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {edu.institution} | {edu.period}
          </Typography>
          {edu.description && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              {edu.description}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Education; 