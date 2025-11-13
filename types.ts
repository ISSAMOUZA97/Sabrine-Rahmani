import type { ReactElement } from 'react';

export interface ExperienceItem {
  role: string;
  company: string;
  company_link: string;
  company_logo: ReactElement;
  period: string;
  location: string;
  tasks: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  institution_link: string;
  period: string;
  location: string;
}

export interface Skill {
  name: string;
  // Fix: Use ReactElement instead of JSX.Element to avoid namespace error.
  icon: ReactElement;
}