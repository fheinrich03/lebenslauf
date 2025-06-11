export interface DetailItem {
  label: string;
  content: string[];
}

export interface TimelineEntry {
  type: 'education' | 'experience';
  title: string;
  institution: string;
  period: string;
  details: DetailItem[];
}

export interface SkillItem {
  name: string;
  level: '1' | '2' | '3';
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface ContactItem {
  label: string;
}

export interface Contact {
  email: ContactItem;
  phone: ContactItem;
  location: ContactItem;
  linkedin?: ContactItem;
  github?: ContactItem;
}

export interface Language {
  name: string;
  level: string;
}

export interface SkillLevel {
  level: '1' | '2' | '3';
  label: string;
  description: string;
}

export interface SoftSkill {
  name: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: Contact;
  languages: Language[];
  skillLevels: SkillLevel[];
  timeline: TimelineEntry[];
  hardSkills: Skill[];
} 