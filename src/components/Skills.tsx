import React from 'react';
import { Box, Typography, Stack, Chip } from '@mui/material';
import { Skill, SkillItem } from '../types/index';

const skillLevelMap: Record<string, { label: string; color: string; icon: string; order: number }> = {
  "1": { label: "Professionell", color: "#1976d2", icon: "⬤", order: 1 }, // blue
  "2": { label: "Praktische Erfahrung", color: "#90caf9", icon: "⬤", order: 2 }, // light blue
  "3": { label: "Grundkenntnisse", color: "#b0b8c1", icon: "⬤", order: 3 }, // grey
};

const getSkillLevel = (skill: SkillItem) => {
  return skillLevelMap[skill.level];
};

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
        Skills
      </Typography>
      <Stack spacing={2}>
        {skills.map((skillGroup: Skill, index: number) => (
          <Box key={index}>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
              {skillGroup.category}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {skillGroup.items.map((skill: SkillItem, idx: number) => {
                const level = getSkillLevel(skill);
                return (
                  <Chip
                    key={idx}
                    label={
                      <span>
                        <span style={{ color: level.color, fontSize: '1em', marginRight: 2 }}>
                          {level.icon}
                        </span>{' '}
                        {skill.name}
                      </span>
                    }
                    size="small"
                    sx={{
                      mb: 0.5,
                      background: '#f4f6fa',
                      color: '#222',
                      border: 'none',
                      fontWeight: 500,
                      letterSpacing: 0.1,
                    }}
                  />
                );
              })}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Skills; 