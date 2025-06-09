import { ResumeData } from "./types/index";

export const resumeData: ResumeData = {
  name: "Felix Heinrich",
  title: "Student - Softwareentwickler",
  summary: "",
  contact: {
    email: "heinrichfelix03@gmail.com",
    phone: "+49 1729723090",
    location: "Bernau bei Berlin, Deutschland",
    linkedin: "felix-heinrich-b2b66b26b",
    github: "fheinrich03",
  },
  timeline: [
    {
      type: "experience",
      title: "Duales Studium bei Deutsche Telekom AG",
      institution: "Deutsche Telekom AG",
      period: "Oktober 2021 – September 2023",
      details: [
        {
          label: "Einsatzort",
          content: ["IT und T-Labs"],
        },
        {
          label: "Projekte",
          content: [
            "Kahoot Klon, Quantum Secure Communication (Open VPN)",
            "Kubernetes, Docker, CI/CD",
          ],
        },
        {
          label: "Tätigkeiten",
          content: ["Frontend- und Backend-Entwicklung, Python Scripts"],
        },
        {
          label: "Arbeitsweise",
          content: ["Projektplanung und agiles Arbeiten im Team"],
        },
      ],
    },
    {
      type: "experience",
      title: "Werkstudent Softwareentwickler (Webentwicklung, Full Stack)",
      institution: "ImmoScout24",
      period: "November 2023 – heute",
      details: [
        {
          label: "Tätigkeiten",
          content: [
            "Frontend- und Backend-Entwicklung in mehreren Projekten",
            "Arbeit im Scrum-Team mit regelmäßigen Sprints",
            "Eigenständige Entwicklung von Features von der Implementierung bis zum Release",
          ],
        },
        {
          label: "Arbeitsweise",
          content: [
            "Implementierung neuer Features",
            "Testen und Qualitätssicherung",
            "UAT (User Acceptance Testing)",
            "Release-Management",
          ],
        },
      ],
    },
    {
      type: "education",
      title: "Abitur, allgemeine Hochschulreife",
      institution: "Gymnasium",
      period: "2019 – 2021",
      details: [
        {
          label: "Notendurchschnitt",
          content: ["1,7"],
        },
        {
          label: "Leistungskurse",
          content: ["Mathematik und Informatik"],
        },
      ],
    },
    {
      type: "education",
      title:
        "B.Sc. Informations- und Kommunikationstechnik (Wechsel nach 4. Semester)",
      institution: "HTWK Leipzig",
      period: "Oktober 2021 – September 2023",
      details: [
        {
          label: "Leistungskurse",
          content: ["Mathematik und Informatik"],
        },
        {
          label: "Relevante Module",
          content: [
            "Projekt 1",
            "Programmierung 1 & 2",
            "Technische Informatik",
            "Informations- und Codierungstheorie",
          ],
        },
      ],
    },
    {
      type: "education",
      title:
        "B.Sc. Angewandte Informatik (voraussichtlicher Abschluss: Sommersemester 2025)",
      institution: "HTW Berlin",
      period: "Oktober 2023 – Heute",
      details: [
        {
          label: "Relevante Module",
          content: [
            "Software Engineering",
            "Programmierung",
            "Datenbanken",
            "Web Application Development",
            "Algorithmen und Datenstrukturen",
          ],
        },
      ],
    },
  ],
  skills: [
    {
      category: "Programmiersprachen",
      items: [
        { name: "Python", level: "2" },
        { name: "Kotlin", level: "3" },
        { name: "TypeScript", level: "1" },
        { name: "Java", level: "1" },
        { name: "HTML", level: "1" },
        { name: "CSS", level: "1" },
        { name: "Scala", level: "3" },
        { name: "Go", level: "3" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React", level: "1" },
        { name: "Tailwind CSS", level: "2" },
        { name: "Next.js", level: "2" },
        { name: "Spring Framework", level: "2" },
      ],
    },
    {
      category: "DevOps & Infrastruktur",
      items: [
        { name: "Docker", level: "2" },
        { name: "CI/CD", level: "2" },
      ],
    },
    {
      category: "Tools & Versionskontrolle",
      items: [
        { name: "Git", level: "1" },
        { name: "GitHub", level: "1" },
        { name: "AI Tools", level: "1" },
      ],
    },
    {
      category: "Testing",
      items: [
        { name: "Jest", level: "1" },
        { name: "Cypress", level: "2" },
        { name: "JUnit, Mocktito", level: "1" },
        { name: "Playwright", level: "2" },
      ],
    },
  ],
};
