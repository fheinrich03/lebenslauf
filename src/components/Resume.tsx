import React from 'react';
import { Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { ResumeData, TimelineEntry } from '../types/index';
import Header from './Header';
import Sidebar from './Sidebar';
import Timeline from './Timeline';

const OuterWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px', // Increased from 210mm (~794px) to 1200px
  aspectRatio: '210/297', // A4 aspect ratio
  background: '#f7f9fa',
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  fontSize: '0.9rem', // Reduce base font size
}));

const ResumeGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 2.2fr',
  gap: theme.spacing(2),
  width: '100%',
  background: 'transparent',
}));

const SidebarPaper = styled(Paper)(({ theme }) => ({
  background: '#e3e8ee',
  padding: theme.spacing(5),
  borderRadius: theme.spacing(1.5),
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const MainPaper = styled(Paper)(({ theme }) => ({
  background: '#fff',
  padding: theme.spacing(5),
  borderRadius: theme.spacing(1.5),
  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
}));

interface ResumeProps {
  data: ResumeData;
}

const Resume: React.FC<ResumeProps> = ({ data }) => {
  const educationEntries = data.timeline.filter((entry: TimelineEntry) => entry.type === 'education');
  const experienceEntries = data.timeline.filter((entry: TimelineEntry) => entry.type === 'experience');

  return (
    <OuterWrapper>
      <ResumeGrid>
        <SidebarPaper>
          <Sidebar data={data} />
        </SidebarPaper>
        <MainPaper>
          <Header name={data.name} title={data.title} summary={data.summary} />
          <Timeline entries={experienceEntries} />
          <Box sx={{ mt: 6 }}>
            <Timeline entries={educationEntries} />
          </Box>
        </MainPaper>
      </ResumeGrid>
    </OuterWrapper>
  );
};

export default Resume; 