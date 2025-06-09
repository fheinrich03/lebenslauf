import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <Box>
      {experiences.map((exp, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography variant="h6" component="h3">
            {exp.position}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {exp.company} | {exp.period}
          </Typography>
          <List dense>
            {exp.description.map((item, idx) => (
              <ListItem key={idx} sx={{ py: 0 }}>
                <ListItemText
                  primary={item}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '0.9rem',
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default Experience; 