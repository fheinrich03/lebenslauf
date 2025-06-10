import { ResumeData } from "./types/index";

export const resumeData: ResumeData = {
  name: "Felix Heinrich",
  title: "Student & Fullstack Softwareentwickler",
  summary: "Werkstudent im Bereich Softwareentwicklung mit praktischer Erfahrung in modernen Webtechnologien und Cloud-Lösungen. Schwerpunkt auf der Full-Stack-Entwicklung, ergänzt durch Kenntnisse in Mobile Development, AWS-Services und agilen Methoden. Zielstrebiger Informatikstudent mit Expertise in der Umsetzung moderner Softwarelösungen.",
  contact: {
    email: {
      label: "heinrichfelix03@gmail.com",
      link: "mailto:heinrichfelix03@gmail.com"
    },
    phone: {
      label: "+49 1729723090",
      link: "tel:+491729723090"
    },
    location: {
      label: "Bernau bei Berlin, Deutschland",
      link: "https://www.google.com/maps/place/Bernau+bei+Berlin"
    },
    linkedin: {
      label: "felix-heinrich-b2b66b26b",
      link: "https://www.linkedin.com/in/felix-heinrich-b2b66b26b/"
    },
    github: {
      label: "fheinrich03",
      link: "https://github.com/fheinrich03"
    }
  },
  languages: [
    {
      name: "Deutsch",
      level: "Muttersprache"
    },
    {
      name: "Englisch",
      level: "C1 – fließend"
    }
  ],
  skillLevels: [
    {
      level: "1",
      label: "Professionell",
      description: "Eigenständige Feature-Entwicklung"
    },
    {
      level: "2",
      label: "Praktische Erfahrung",
      description: "Tiefgreifende Kenntnisse"
    },
    {
      level: "3",
      label: "Grundkenntnisse",
      description: "Unregelmäßige Anwendung",
    }
  ],
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
        {
          label: "Erfahrungen",
          content: [
            "Angular, Spring Boot, Python, Kotlin, Android Studio",
          ],
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
            "Eigenständige Verwirklichung von Features",
            "Selbstständig von Implementierung bis Release",
          ],
        },
        {
          label: "Arbeitsweise",
          content: [
            "Implementierung",
            "Testen und Qualitätssicherung",
            "UAT (User Acceptance Testing)",
            "Release-Management",
          ],
        },
        {
          label: "Erfahrungen",
          content: [
            "React, Java, Amazon EC2, S3, IAM, PostgresQL, MySQL",
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
          label: "Relevante Module",
          content: [
            "Projekt 1",
            "Programmierung 1 & 2 (Java, C)",
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
            "Software Engineering (Python)",
            "Programmierung (Java)",
            "Datenbanken",
            "Web Application Development (HTML, CSS, JavaScript)",
            "Algorithmen und Datenstrukturen (Go)",
          ],
        },
      ],
    },
  ],
  hardSkills: [
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
        { name: "AWS Amplify", level: "3" },
        { name: "Angular", level: "3" },
      ],
    },
    {
      category: "DevOps & Infrastruktur",
      items: [
        { name: "Docker", level: "2" },
        { name: "CI/CD", level: "2" },
        { name: "Amazon EC2", level: "3" },
        { name: "Amazon S3", level: "3" },
        { name: "Amazon IAM", level: "3" },
        { name: "Amazon Systems Manager", level: "3" },
      ],
    },
    {
      category: "Datenbanken",
      items: [
        { name: "PostgresQL", level: "2" },
        { name: "MySQL", level: "3" },
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
