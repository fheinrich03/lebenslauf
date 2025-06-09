import React from 'react';
import { Box, Typography } from '@mui/material';
import { TimelineEntry, DetailItem } from '../types/index';
import telekomLogo from '../assets/telekom.svg';
// @ts-ignore
import immoscoutLogo from '../assets/immoscout24.svg';

interface TimelineProps {
  entries: TimelineEntry[];
}

const Timeline: React.FC<TimelineProps> = ({ entries }) => {
  const getCompanyLogo = (institution: string): string | undefined => {
    switch (institution.toLowerCase()) {
      case 'deutsche telekom ag':
        return telekomLogo;
      case 'immoscout24':
        return immoscoutLogo;
      default:
        return undefined;
    }
  };

  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ color: '#2196f3', fontWeight: 'bold', mb: 1.5, fontFamily: 'monospace', letterSpacing: 1, fontSize: '1.1rem' }}>
          {entries[0]?.type === 'education' ? 'Bildungsweg' : 'Berufserfahrung'}
        </Typography>
        {entries.map((entry, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                {getCompanyLogo(entry.institution) && (
                  <Box
                    component="img"
                    src={getCompanyLogo(entry.institution)}
                    alt={`${entry.institution} logo`}
                    sx={{
                      height: '24px',
                      width: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                )}
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: '1.05rem', color: 'rgba(0, 0, 0, 0.87)' }}>
                  {entry.institution}
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: '0.9rem' }}>
                {entry.period}
              </Typography>
            </Box>
            <Typography variant="subtitle2" sx={{ mb: 1, color: 'rgba(0, 0, 0, 0.6)', fontSize: '0.95rem' }}>
              {entry.title}
            </Typography>
            <Box>
              {entry.details.map((detail, idx) => (
                <Box key={idx} sx={{ display: 'flex', mb: 0.5 }}>
                  <Box sx={{ width: '150px', fontWeight: 'bold', fontSize: '0.9rem', color: 'rgba(0, 0, 0, 0.6)', mb: 1}}>
                    {detail.label}:
                  </Box>
                  <Box sx={{ flex: 1, fontSize: '0.9rem', color: 'rgba(0, 0, 0, 0.87)', lineHeight: 1.5 }}>
                    {detail.content.map((item, itemIdx) => (
                      <Box key={itemIdx} sx={{ mb: itemIdx === 0 ? 0 : 0.5 }}>
                        {item}
                      </Box>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Timeline; 