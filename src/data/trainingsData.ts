import { TrainingProgram } from '../types';

export const trainingPrograms: TrainingProgram[] = [
  {
    id: 1,
    title: "ASEAN-India Cooperation Fund Sponsored International Training cum Workshop on “Conventional and Molecular Techniques for diagnosis of Transboundary Animal Diseases”",
    duration: "7 days (18–25 Feb 2014)",
    beneficiaries: 7,
    role: "Course Coordinator",
    yearRange: "2014"
  },
  {
    id: 2,
    title: "ASEAN-India Cooperation Fund Sponsored International Training cum Workshop on “Conventional and Molecular Techniques for diagnosis of Transboundary Animal Diseases”",
    duration: "7 days (28 Feb–7 Mar 2014)",
    beneficiaries: 6,
    role: "Course Coordinator",
    yearRange: "2014"
  },
  {
    id: 3,
    title: "Laboratory Biosafety and Biosecurity for Handling Transboundary Animal Pathogens under DBT-NER-ADMaC Consortium",
    duration: "7 days (25 Feb–3 Mar 2015)",
    beneficiaries: 5,
    role: "Course Coordinator",
    yearRange: "2015"
  },
  {
    id: 4,
    title: "“Biosafety and Biosecurity for handling and identification of zoonotic pathogens” organized under DBT-NER-ADMaC Consortium",
    duration: "5 days (16–20 Feb 2016)",
    beneficiaries: 10,
    role: "Course Coordinator",
    yearRange: "2016"
  },
  {
    id: 5,
    title: "Biosafety & Biosecurity for handling & identification of Emerging Zoonotic Pathogens",
    duration: "5 days (18–22 Jul 2016)",
    beneficiaries: 8,
    role: "Course Coordinator",
    yearRange: "2016"
  },
  {
    id: 6,
    title: "Biosafety & Biosecurity for handling & identification of Emerging Zoonotic Pathogens",
    duration: "5 days (3–8 Aug 2016)",
    beneficiaries: 8,
    role: "Course Coordinator",
    yearRange: "2016"
  },
  {
    id: 7,
    title: "Biosafety & Biosecurity for handling & identification of Emerging Zoonotic Pathogens",
    duration: "5 days (3–7 Oct 2016)",
    beneficiaries: 5,
    role: "Course Coordinator",
    yearRange: "2016"
  },
  {
    id: 8,
    title: "Biosafety & Biosecurity for handling & identification of Emerging Zoonotic Pathogens",
    duration: "5 days (17–21 Jan 2017)",
    beneficiaries: 7,
    role: "Course Coordinator",
    yearRange: "2017"
  },
  {
    id: 9,
    title: "Diagnostic Techniques for Emerging Animal Diseases",
    duration: "5 days (3–8 Aug 2017)",
    beneficiaries: 10,
    role: "Course Coordinator",
    yearRange: "2017"
  },
  {
    id: 10,
    title: "Hands-on Training on Emerging Animal Disease Diagnosis, under ADMaC",
    duration: "8 days (1–8 Aug 2018)",
    beneficiaries: 8,
    role: "Course Coordinator",
    yearRange: "2018"
  },
  {
    id: 11,
    title: "Training on Biosafety and Diagnosis of Emerging Animal Disease, under ADMaC",
    duration: "8 days (5–11 Mar 2019)",
    beneficiaries: 6,
    role: "Course Coordinator",
    yearRange: "2019"
  },
  {
    id: 12,
    title: "Training on Laboratory Biorisk Management and Investigation of Emerging Animal & Zoonotic Diseases with One Health Approach",
    duration: "8 days (1–8 Aug 2019)",
    beneficiaries: 9,
    role: "Course Coordinator",
    yearRange: "2019"
  },
  {
    id: 13,
    title: "PCR in disease diagnosis, Gene detection and species differentiation, conducted under Niche Area of Excellence",
    duration: "7 days (2007)",
    beneficiaries: 22,
    role: "Core Faculty",
    yearRange: "2007"
  },
  {
    id: 14,
    title: "Gene expression techniques: Gene amplification, cloning, characterization of recombinant clones and in vitro expression analysis, DBT sponsored training program",
    duration: "21 days (2007)",
    beneficiaries: 20,
    role: "Core Faculty",
    yearRange: "2007"
  },
  {
    id: 15,
    title: "Bioinformatics as a tool for gene amplification, cloning and molecular modeling, conducted under Niche Area of Excellence",
    duration: "7 days (2008)",
    beneficiaries: 45,
    role: "Core Faculty",
    yearRange: "2008"
  },
  {
    id: 16,
    title: "Applications of molecular methods in livestock disease diagnosis and research, conducted under DBT Project at Dept of Veterinary Microbiology and Biotechnology, Nagpur Veterinary College, Nagpur",
    duration: "21 days (2008)",
    beneficiaries: 19,
    role: "Core Faculty",
    yearRange: "2008"
  },
  {
    id: 17,
    title: "Advanced Molecular Biology Tools used in Animal Disease Research and Diagnosis, DBT sponsored training program",
    duration: "21 days (2008)",
    beneficiaries: 18,
    role: "Core Faculty",
    yearRange: "2008"
  }
];

export const trainingSummary = {
  totalPrograms: 17,
  totalBeneficiaries: trainingPrograms.reduce((sum, item) => sum + item.beneficiaries, 0),
  coordinatorCount: trainingPrograms.filter(t => t.role === 'Course Coordinator').length,
  coreFacultyCount: trainingPrograms.filter(t => t.role === 'Core Faculty').length
};
