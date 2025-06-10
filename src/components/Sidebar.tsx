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
  "3": { label: "Grundkenntnisse", color: "#b0b8c1", icon: "⬤", order: 3 }, // grey
};

const getSkillLevel = (skill: SkillItem) => {
  return skillLevelMap[skill.level];
};

const Sidebar: React.FC<{ data: ResumeData }> = ({ data }) => {
  const { devSkills, contact } = data;
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
        <img
          src={process.env.PUBLIC_URL + "/profile_pic.jpeg"}
          alt="Profilbild"
          style={{
            width: 200,
            height: 200,
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
          <Typography variant="body2">{contact.email}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Phone fontSize="small" />
          <Typography variant="body2">{contact.phone}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <LocationOn fontSize="small" />
          <Typography variant="body2">{contact.location}</Typography>
        </Box>
        {contact.linkedin && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LinkedIn fontSize="small" />
            <Typography variant="body2">{contact.linkedin}</Typography>
          </Box>
        )}
        {contact.github && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <GitHub fontSize="small" />
            <Typography variant="body2">{contact.github}</Typography>
          </Box>
        )}
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1.5 }}>
        Dev Skills
      </Typography>
      <Stack spacing={1} mb={3}>
        {devSkills.map((group: Skill, i: number) => {
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
      <Box sx={{ fontSize: "1em", color: "#444", textAlign: "left" }}>
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 2 }}>
          <span
            style={{
              color: skillLevelMap["1"].color,
              fontSize: "1em",
              marginTop: 4,
            }}
          >
            {skillLevelMap["1"].icon}
          </span>
          <Box>
            <b>Professionell</b>
            <Box sx={{ mt: 1, pl: 0 }}>
              Erfahrung aus mehreren realen Softwareprojekten
              <br />
              Selbstständige Entwicklung mit funktionierenden Ergebnissen
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 2 }}>
          <span
            style={{
              color: skillLevelMap["2"].color,
              fontSize: "1em",
              marginTop: 4,
            }}
          >
            {skillLevelMap["2"].icon}
          </span>
          <Box>
            <b>Praktische Erfahrung</b>
            <Box sx={{ mt: 1, pl: 0 }}>
              Eigenständige Bearbeitung kleinerer Aufgaben oder Projekte
              <br />
              Sicherer Umgang und regelmäßige Anwendung
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1, mb: 0 }}>
          <span
            style={{
              color: skillLevelMap["3"].color,
              fontSize: "1em",
              marginTop: 4,
            }}
          >
            {skillLevelMap["3"].icon}
          </span>
          <Box>
            <b>Grundkenntnisse</b>
            <Box sx={{ mt: 1, pl: 0 }}>
              Grundlegende Kenntnisse durch Kurse oder kleinere Projekte
              <br />
              Unregelmäßige Anwendung
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
