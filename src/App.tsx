import React, { useRef } from 'react';
import { Button, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { usePDF } from 'react-to-pdf';
import Resume from './components/Resume';
import { ResumeData } from './types';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const sampleResumeData: ResumeData = {
  name: "Max Mustermann",
  title: "Senior Softwareentwickler",
  summary: "Erfahrener Softwareentwickler mit Fokus auf moderne Web-Technologien und Cloud-Architekturen. Spezialisiert auf React, TypeScript und Node.js mit über 5 Jahren Berufserfahrung in der Entwicklung skalierbarer Anwendungen.",
  contact: {
    email: "max.mustermann@example.com",
    phone: "+49 123 456789",
    location: "Berlin, Deutschland",
    linkedin: "https://linkedin.com/in/maxmustermann",
    github: "https://github.com/maxmustermann"
  },
  experience: [
    {
      position: "Senior Softwareentwickler",
      company: "Tech Solutions GmbH",
      period: "2020 - Heute",
      description: [
        "Entwicklung und Wartung einer React-basierten Webanwendung mit über 100.000 aktiven Nutzern",
        "Implementierung von Microservices-Architektur mit Node.js und Docker",
        "Leitung eines 5-köpfigen Entwicklerteams und Mentoring von Junior-Entwicklern",
        "Optimierung der CI/CD-Pipeline, was zu einer 40% schnelleren Deployment-Zeit führte"
      ]
    },
    {
      position: "Softwareentwickler",
      company: "Digital Innovations AG",
      period: "2018 - 2020",
      description: [
        "Entwicklung von REST-APIs mit Node.js und Express",
        "Implementierung von Frontend-Komponenten mit React und Redux",
        "Integration von Payment-Systemen und Drittanbieter-APIs",
        "Durchführung von Code-Reviews und Implementierung von Best Practices"
      ]
    }
  ],
  education: [
    {
      degree: "Master of Science in Informatik",
      institution: "Technische Universität Berlin",
      period: "2016 - 2018",
      description: "Schwerpunkt: Software Engineering und verteilte Systeme"
    },
    {
      degree: "Bachelor of Science in Informatik",
      institution: "Technische Universität Berlin",
      period: "2012 - 2016"
    }
  ],
  skills: [
    {
      category: "Programmiersprachen",
      items: ["TypeScript", "JavaScript", "Python", "Java"]
    },
    {
      category: "Frontend",
      items: ["React", "Redux", "HTML5", "CSS3", "Material-UI"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "Docker", "MongoDB", "PostgreSQL"]
    },
    {
      category: "Tools & Methoden",
      items: ["Git", "CI/CD", "Agile", "TDD", "REST APIs"]
    }
  ]
};

function App() {
  const { toPDF, targetRef } = usePDF({
    filename: 'lebenslauf.pdf',
    page: { format: 'a4', orientation: 'portrait' }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ py: 4 }}>
        <Button
          variant="contained"
          onClick={() => toPDF()}
          sx={{ mb: 2 }}
        >
          Als PDF herunterladen
        </Button>
        <div ref={targetRef}>
          <Resume data={sampleResumeData} />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
