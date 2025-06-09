import React from 'react';
import { Box } from '@mui/material';
import { ResumeData } from '../types';
import Header from './Header';
import Timeline from './Timeline';

interface MainContentProps {
  data: ResumeData;
}

const MainContent: React.FC<MainContentProps> = ({ data }) => {
  const educationEntries = data.timeline.filter(entry => entry.type === 'education');
  const experienceEntries = data.timeline.filter(entry => entry.type === 'experience');

  return (
    <Box sx={{ flex: 1 }}>
      <Header name={data.name} title={data.title} summary={data.summary} />
      <Timeline entries={experienceEntries} />
      <Box sx={{ mt: 6 }}>
        <Timeline entries={educationEntries} />
      </Box>
    </Box>
  );
};

export default MainContent; 