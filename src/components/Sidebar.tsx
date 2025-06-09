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
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
        <img
          src={process.env.PUBLIC_URL + '/placeholder.jpg'}
          alt="Profilbild"
          style={{ width: 128, height: 128, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', border: '3px solid #87b5db' }}
        />
      </Box>
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
      <Box sx={{ mb: 2 }}>
        <Box sx={{ mb: 1 }}>
          <b>Deutsch:</b> C2 – Muttersprache
        </Box>
        <Box>
          <b>Englisch:</b> C1 – 3 Jahre Arbeit in internationalen Teams
        </Box>
      </Box>
      {/* Legende */}
      <Box sx={{ mt: 3, fontSize: '1em', color: '#444', textAlign: 'left' }}>
        <Divider sx={{ my: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 2 }}>
          <span style={{color:skillLevelMap.expert.color, fontSize:'1em', marginTop: 4}}>{skillLevelMap.expert.icon}</span>
          <Box>
            <b>Professionelle Anwendung</b>
            <ul style={{ margin: 0, marginTop: 2, paddingLeft: 18 }}>
              <li>Mitarbeit an mehreren realen Softwareprojekten (z. B. 3 oder mehr)</li>
              <li>Anwendung in professionellem Umfeld (z. B. Unternehmen, Agentur, Startup)</li>
            </ul>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 2 }}>
          <span style={{color:skillLevelMap.advanced.color, fontSize:'1em', marginTop: 4}}>{skillLevelMap.advanced.icon}</span>
          <Box>
            <b>Praktische Erfahrung</b>
            <ul style={{ margin: 0, marginTop: 2, paddingLeft: 18 }}>
              <li>1–2 kleinere Projekte (z. B. Uni, Nebenprojekte, Hackathons)</li>
              <li>Selbstständige Anwendung mit funktionierenden Ergebnissen</li>
            </ul>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 0 }}>
          <span style={{color:skillLevelMap.basic.color, fontSize:'1em', marginTop: 4}}>{skillLevelMap.basic.icon}</span>
          <Box>
            <b>Grundkenntnisse</b>
            <ul style={{ margin: 0, marginTop: 2, paddingLeft: 18 }}>
              <li>Erste Schritte durch Kurse, Tutorials oder Experimente</li>
              <li>Keine oder nur sehr kleine Projekte umgesetzt</li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar; 