import React from "react";
import { Box, Typography, Divider, Stack, Chip } from "@mui/material";
import { ResumeData, Skill, SkillItem } from "../types/index";
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";

const skillLevelMap: Record<
  string,
  { label: string; color: string; icon: string; order: number }
> = {
  "1": { label: "Professionell", color: "#1976d2", icon: "⬤", order: 1 }, // blue
  "2": { label: "Praktische Erfahrung", color: "#90caf9", icon: "⬤", order: 2 }, // light blue
  "3": { label: "Grundkenntnisse", color: "#ccdaeb", icon: "⬤", order: 3 }, // grey
};

const getSkillLevel = (skill: SkillItem) => {
  return skillLevelMap[skill.level];
};

const Sidebar: React.FC<{ data: ResumeData }> = ({ data }) => {
  const { hardSkills, contact } = data;
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <img
          src={process.env.PUBLIC_URL + "/profile_pic.jpeg"}
          alt="Profilbild"
          style={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            border: "3px solid #87b5db",
          }}
        />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1.5 }}>
        Kontakt
      </Typography>
      <Stack spacing={1} mb={3}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Email fontSize="small" />
          <Typography variant="body2">
            {contact.email.label}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Phone fontSize="small" />
          <Typography variant="body2">
            {contact.phone.label}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LocationOn fontSize="small" />
          <Typography variant="body2">
            {contact.location.label}
          </Typography>
        </Box>
        {contact.linkedin && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LinkedIn fontSize="small" />
            <Typography variant="body2">
              {contact.linkedin.label}
            </Typography>
          </Box>
        )}
        {contact.github && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <GitHub fontSize="small" />
            <Typography variant="body2">
              {contact.github.label}
            </Typography>
          </Box>
        )}
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1.5 }}>
        Hard Skills
      </Typography>
      <Stack spacing={1} mb={3}>
        {hardSkills.map((group: Skill, i: number) => {
          // Sort skills by level ascending (1 = highest)
          const sortedItems = [...group.items].sort((a, b) => {
            return skillLevelMap[a.level].order - skillLevelMap[b.level].order;
          });
          return (
            <Box key={i}>
              <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                {group.category}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {sortedItems.map((skill: SkillItem, idx) => {
                  const level = getSkillLevel(skill);
                  return (
                    <Chip
                      key={idx}
                      label={
                        <span>
                          <span
                            style={{
                              color: level.color,
                              fontSize: "1em",
                              marginRight: 2,
                              verticalAlign: "middle",
                            }}
                          >
                            {level.icon}
                          </span>{" "}
                          {skill.name}
                        </span>
                      }
                      size="small"
                      sx={{
                        mb: 0.5,
                        background: "#f4f6fa",
                        color: "#222",
                        border: "none",
                        fontWeight: 500,
                        letterSpacing: 0.1,
                      }}
                    />
                  );
                })}
              </Stack>
            </Box>
          );
        })}
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1.5 }}>
        Sprachen
      </Typography>
      <Box sx={{ mb: 3 }}>
        {data.languages.map((language, idx) => (
          <Box key={idx} sx={{ display: "grid", gridTemplateColumns: "80px 1fr", mb: 1 }}>
            <Box sx={{ fontWeight: "bold" }}>{language.name}</Box>
            <Box>{language.level}</Box>
          </Box>
        ))}
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ fontSize: "1em", color: "#444", textAlign: "left" }}>
        {data.skillLevels.map((level, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1,
              mb: index === data.skillLevels.length - 1 ? 0 : 2,
            }}
          >
            <span
              style={{
                color: skillLevelMap[level.level].color,
                fontSize: "1em",
                marginTop: 4,
              }}
            >
              {skillLevelMap[level.level].icon}
            </span>
            <Box>
              <b>{level.label}</b>
              <Box sx={{ mt: 0.5, pl: 0, fontSize: "0.9rem" }}>
                {level.description}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
