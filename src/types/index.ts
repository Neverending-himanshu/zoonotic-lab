export interface Project {
  sn: number;
  title: string;
  duration: string;
  startDate: string; // ISO date format YYYY-MM-DD or YYYY-MM
  endDate: string;   // ISO date format YYYY-MM-DD or YYYY-MM or "continuous"
  position: 'PI' | 'Co-PI' | 'PC' | 'PC & PI' | 'PI & Incharge';
  fundingAgency: string;
  collabInst: number | string;
  fundsInLakh: string | number;
  statusRecorded?: 'Ongoing' | 'Completed'; // As of Oct 2026 for reference check
  hasOpenPositions?: boolean;
  domain?: 'Outbreak Investigation' | 'Disease Surveillance' | 'Infection Genomics' | 'Next Generation Diagnostics';
}

export interface Technology {
  id: number;
  name: string;
  referenceOrStatus: string;
  year?: string | number;
  status: 'Published' | 'Under process for patenting' | 'In development';
  projectLinked?: string;
}

export interface TrainingProgram {
  id: number;
  title: string;
  duration: string;
  beneficiaries: number;
  role: 'Course Coordinator' | 'Core Faculty';
  yearRange: string;
}

export interface PublicationArticle {
  id: number;
  year: number;
  authors: string;
  title: string;
  journal: string;
  volumePages?: string;
  doi?: string;
  impactFactor?: string;
  featured?: boolean;
}

export interface BookChapter {
  id: number;
  authors: string;
  year: number;
  title: string;
  bookTitle: string;
  editor?: string;
  publisher: string;
  pages: string;
  doi?: string;
}

export interface Patent {
  id: number;
  title: string;
  inventors: string;
  number?: string;
  status: 'Under process for patenting' | 'Filed' | 'Granted';
  year?: string;
}

export interface DatasetItem {
  id: string;
  type: 'Proteome' | 'Transcriptome' | 'Viral Metagenome';
  accession: string;
  description: string;
  database: 'PRIDE' | 'NCBI SRA' | 'NCBI GEO' | 'NCBI BioSample';
  status: 'Public' | 'Submitted, public release pending';
  url: string;
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  group: 'research' | 'technical';
  photo: string;
  description: string; // 3-line editable summary
  email?: string;
}

export interface ScholarAlumni {
  id: number;
  name: string;
  institution: string;
  title: string;
  degree: 'PhD' | 'MVSc' | 'MSc' | 'BS-MS';
  year: number;
  supervisionType: 'supervised' | 'co-supervised';
}

export interface InternationalCollaboration {
  id: number;
  partner: string;
  country: string;
  topicOrRole: string;
}

export interface CareerPosition {
  position: string;
  organization: string;
  from: string;
  to: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
  notes: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  summary: string;
  category: 'Achievement' | 'Grant' | 'Publication' | 'General';
  image?: string;
  linkText?: string;
  linkUrl?: string;
}

export interface OpenPosition {
  id: string;
  title: string;
  linkedProject: string;
  qualifications: string;
  howToApply: string;
  contactEmail: string;
  openingsCount: number;
  status: 'Open' | 'Closed';
}

export interface GalleryPhoto {
  id: string;
  category: 'Facilities' | 'Fieldwork and Antarctica' | 'Team and Events' | 'Trainings';
  title: string;
  caption: string;
  image: string;
  ratio: string;
}
