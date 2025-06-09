import React from 'react';
import { Box, Typography, Divider, Stack, Chip } from '@mui/material';
import { ResumeData, Skill } from '../types';
import { Email, Phone, LocationOn, LinkedIn, GitHub } from '@mui/icons-material';

const skillLevelMap: Record<string, { label: string; color: string; icon: string; order: number }> = {
  expert: { label: 'Experte', color: '#1976d2', icon: '⬤', order: 3 }, // blue
  advanced: { label: 'Fortgeschritten', color: '#90caf9', icon: '⬤', order: 2 }, // light blue
  basic: { label: 'Grundkenntnisse', color: '#b0b8c1', icon: '⬤', order: 1 }, // grey
};

const getSkillLevelKey = (skill: string): keyof typeof skillLevelMap => {
  if (/typescript|react|node|javascript/i.test(skill)) return 'expert';
  if (/python|docker|sql|css|html/i.test(skill)) return 'advanced';
  return 'basic';
};

const getSkillLevel = (skill: string) => skillLevelMap[getSkillLevelKey(skill)];

function extractUsername(url?: string) {
  if (!url) return '';
  const match = url.match(/\/([^\/]+)$/);
  return match ? match[1] : url;
}

const Sidebar: React.FC<{ data: ResumeData }> = ({ data }) => {
  const { contact, skills } = data;
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Kontakt
      </Typography>
      <Stack spacing={1} mb={2}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Email fontSize="small" />
          <Typography variant="body2">{contact.email}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Phone fontSize="small" />
          <Typography variant="body2">{contact.phone}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LocationOn fontSize="small" />
          <Typography variant="body2">{contact.location}</Typography>
        </Box>
        {contact.linkedin && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LinkedIn fontSize="small" />
            <Typography variant="body2">{extractUsername(contact.linkedin)}</Typography>
          </Box>
        )}
        {contact.github && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <GitHub fontSize="small" />
            <Typography variant="body2">{extractUsername(contact.github)}</Typography>
          </Box>
        )}
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Skills
      </Typography>
      <Stack spacing={1} mb={2}>
        {skills.map((group, i) => {
          // Sort skills by level descending
          const sortedItems = [...group.items].sort((a, b) => {
            const aLevel = skillLevelMap[getSkillLevelKey(a)].order;
            const bLevel = skillLevelMap[getSkillLevelKey(b)].order;
            return bLevel - aLevel;
          });
          return (
            <Box key={i}>
              <Typography variant="subtitle2" sx={{ mb: 0.5 }}>{group.category}</Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {sortedItems.map((skill, idx) => {
                  const level = getSkillLevel(skill);
                  return (
                    <Chip
                      key={idx}
                      label={<span><span style={{color:level.color, fontSize:'1em', marginRight:2}}>{level.icon}</span> {skill}</span>}
                      size="small"
                      sx={{ mb: 0.5, background: '#f4f6fa', color: '#222', border: 'none', fontWeight: 500, letterSpacing: 0.1 }}
                    />
                  );
                })}
              </Stack>
            </Box>
          );
        })}
      </Stack>
      {/* Sprachen als Beispiel, kann erweitert werden */}
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
        Sprachen
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        <Chip label={<span><span style={{color:skillLevelMap.expert.color, fontSize:'1em', marginRight:2}}>{skillLevelMap.expert.icon}</span> Deutsch</span>} size="small" sx={{ background: '#f4f6fa', color: '#222', border: 'none', fontWeight: 500 }} />
        <Chip label={<span><span style={{color:skillLevelMap.advanced.color, fontSize:'1em', marginRight:2}}>{skillLevelMap.advanced.icon}</span> Englisch</span>} size="small" sx={{ background: '#f4f6fa', color: '#222', border: 'none', fontWeight: 500 }} />
      </Stack>
      {/* Legende */}
      <Box sx={{ mt: 3, fontSize: '0.75em', color: '#888', textAlign: 'left' }}>
        <Divider sx={{ my: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
          <span style={{color:skillLevelMap.expert.color, fontSize:'1em'}}>{skillLevelMap.expert.icon}</span> <span>Experte</span>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
          <span style={{color:skillLevelMap.advanced.color, fontSize:'1em'}}>{skillLevelMap.advanced.icon}</span> <span>Fortgeschritten</span>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <span style={{color:skillLevelMap.basic.color, fontSize:'1em'}}>{skillLevelMap.basic.icon}</span> <span>Grundkenntnisse</span>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar; 