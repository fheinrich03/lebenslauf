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

export interface Contact {
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  contact: Contact;
  timeline: TimelineEntry[];
  skills: Skill[];
} 