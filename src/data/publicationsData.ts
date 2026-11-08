import { PublicationArticle, BookChapter, Patent } from '../types';

export const publicationStats = {
  totalArticles: 60,
  cumulativeImpactFactor: "> 170",
  citations: "> 1,200",
  hIndex: 18,
  i10Index: 30,
  totalBookChapters: 7,
  patentsUnderProcess: 3
};

export const featuredPublications: PublicationArticle[] = [
  {
    id: 1,
    year: 2021,
    authors: "Mishra A, Kumar N, Bhatia S, Raut AA, Sood R, Gupta V, et al.",
    title: "SARS-CoV-2 Delta Variant among Asiatic Lions, India",
    journal: "Emerging Infectious Diseases",
    volumePages: "27(10):2723–2725",
    doi: "https://doi.org/10.3201/eid2710.211322",
    impactFactor: "16.126",
    featured: true
  },
  {
    id: 2,
    year: 2020,
    authors: "Mishra R, Kumar A, Ingle H, Kumar H, Raut AA",
    title: "Particulate matter (PM10) enhances RNA virus infection through modulation of innate immune responses",
    journal: "Environmental Pollution",
    volumePages: "266:115148",
    doi: "https://doi.org/10.1016/j.envpol.2020.115148",
    impactFactor: "9.988",
    featured: true
  },
  {
    id: 3,
    year: 2022,
    authors: "Kumar A, Mishra R, Ingle H, Banoth B, Li GH, Raut AA, Kumar H",
    title: "Essential role of Rnd1 in innate immunity during viral and bacterial infections",
    journal: "Cell Death & Disease",
    volumePages: "13(6):520",
    doi: "https://doi.org/10.1038/s41419-022-04981-2",
    impactFactor: "9.685",
    featured: true
  },
  {
    id: 4,
    year: 2015,
    authors: "Ingle H, Kumar S, Raut AA, Harmache A, Bialas KM, Sesti-Costa R, et al.",
    title: "The microRNA miR-485 targets host and influenza virus transcripts to regulate antiviral immunity and restrict viral replication",
    journal: "Science Signaling",
    volumePages: "8(406):ra126",
    doi: "https://doi.org/10.1126/scisignal.aab3183",
    impactFactor: "9.517",
    featured: true
  },
  {
    id: 5,
    year: 2022,
    authors: "Mishra A, Ranaware PB, Gandhale PN, Kumar H, Kulkarni DD, Raut AA",
    title: "Differential miRNA expression profiling of highly pathogenic avian influenza virus H5N1 infected chicken lungs",
    journal: "Virologica Sinica",
    volumePages: "37(2):255–264",
    doi: "https://doi.org/10.1016/j.virs.2022.01.025",
    impactFactor: "6.947",
    featured: true
  },
  {
    id: 6,
    year: 2018,
    authors: "Kumar A, Ingle H, Mishra R, Ranaware PB, Gandhale PN, Raut AA, Kumar H",
    title: "MicroRNA hsa-miR-324-5p suppresses H5N1 virus replication by targeting the viral PB1 and host CUEDC2",
    journal: "Journal of Virology",
    volumePages: "92:e01057-18",
    doi: "https://doi.org/10.1128/JVI.01057-18",
    impactFactor: "6.549",
    featured: true
  },
  {
    id: 7,
    year: 2026,
    authors: "Vijaykumar P, Burt DW, Mishra A, Ranaware PB, Gandhale PN, Kulkarni DD, Raut AA",
    title: "Systems-level analysis of HPAI H5N1 infection in ducks: integrating transcriptomic, proteomic and phosphoproteomic data",
    journal: "International Journal of Molecular Sciences",
    volumePages: "27, 2884",
    doi: "https://doi.org/10.3390/ijms27062884",
    impactFactor: "5.7 (5-yr)",
    featured: true
  },
  {
    id: 8,
    year: 2024,
    authors: "Chingtham S, Raut AA, Mishra A, Gandhale PN, Tosh C, Bhatia S, Sanyal A",
    title: "Novel triplex nucleic acid lateral flow immunoassay for rapid detection of Nipah virus, MERS coronavirus and Reston ebolavirus",
    journal: "Animal Diseases",
    volumePages: "4, 21",
    doi: "https://doi.org/10.1186/s44149-024-00127-w",
    impactFactor: "0.742",
    featured: true
  }
];

export const allArticlesList: PublicationArticle[] = [
  ...featuredPublications,
  {
    id: 9,
    year: 2024,
    authors: "Sharma S, Agrawal VR, Trivedi V, Raut AA",
    title: "Identification of Potential Biomarkers of Highly Pathogenic Avian Influenza (H5N1) Infection Through Metabolomic Profiling in Chickens",
    journal: "Indian Poultry Science Association Journal",
    volumePages: "Vol 59: 104–112",
    doi: "https://doi.org/10.5958/0974-8180.2024.00018.X",
    impactFactor: "1.25"
  },
  {
    id: 10,
    year: 2023,
    authors: "Dutta R, Gandhale PN, Mishra A, Raut AA",
    title: "Metavirome characterization reveals viral spillover dynamics across wild migratory birds and domestic waterfowl interfaces in Assam, India",
    journal: "Frontiers in Microbiology",
    volumePages: "14:1102948",
    doi: "https://doi.org/10.3389/fmicb.2023.1102948",
    impactFactor: "5.2"
  },
  {
    id: 11,
    year: 2020,
    authors: "Raut AA, Kumar N, Gandhale PN, Pateriya A, Mishra A, Kulkarni DD",
    title: "Surveillance and genomic characterization of Crimean-Congo Hemorrhagic Fever virus among Hyalomma ticks and domestic ruminants in western India",
    journal: "Acta Tropica",
    volumePages: "209:105561",
    doi: "https://doi.org/10.1016/j.actatropica.2020.105561",
    impactFactor: "3.2"
  },
  {
    id: 12,
    year: 2019,
    authors: "Chandan K, Raut AA, Gandhale PN, Mishra A, Kulkarni DD",
    title: "Development of Multiplex Nucleic Acid Lateral Flow Assay for Hemagglutinin (HA) Subtyping of Avian Influenza Viruses",
    journal: "Journal of Virological Methods",
    volumePages: "268:24–31",
    doi: "https://doi.org/10.1016/j.jviromet.2019.03.007",
    impactFactor: "2.6"
  },
  {
    id: 13,
    year: 2017,
    authors: "Vijaykumar P, Mishra A, Ranaware PB, Gandhale PN, Kulkarni DD, Burt DW, Raut AA",
    title: "Design and validation of a 60K duck-specific microarray chip for whole genome expression profiling during viral infections",
    journal: "Acta Virologica",
    volumePages: "61(3):318–326",
    doi: "https://doi.org/10.4149/av_2017_01_66",
    impactFactor: "1.8"
  },
  {
    id: 14,
    year: 2016,
    authors: "Ranaware PB, Mishra A, Vijaykumar P, Gandhale PN, Kumar H, Kulkarni DD, Raut AA",
    title: "Upgradation of commercially available 44K to 60K chicken microarray chip for comprehensive whole genome expression profiling",
    journal: "PLoS ONE",
    volumePages: "11(4):e0153671",
    doi: "https://doi.org/10.1371/journal.pone.0153671",
    impactFactor: "3.75"
  },
  {
    id: 15,
    year: 2015,
    authors: "Mohammed F, Dutta R, Gandhale PN, Mishra A, Raut AA",
    title: "Metagenomic profiling of gut virome of domestic ducks reveals diverse and novel RNA and DNA viral families",
    journal: "Genomics Data",
    volumePages: "6:241–244",
    doi: "https://doi.org/10.1016/j.gdata.2015.10.007",
    impactFactor: "1.4"
  },
  {
    id: 16,
    year: 2014,
    authors: "Kamboj A, Raut AA, Gandhale PN, Mishra A, Kulkarni DD",
    title: "Novel molecular-beacon probe-based rapid diagnostic test for Crimean-Congo Hemorrhagic Fever virus detection",
    journal: "Biomedical Research International",
    volumePages: "2014:496219",
    doi: "https://doi.org/10.1155/2014/496219",
    impactFactor: "3.41"
  },
  {
    id: 17,
    year: 2010,
    authors: "Ravi P, Raut AA, Mishra A, Sajjanar B, Kulkarni DD",
    title: "Construction and validation of an artificial miRNA polycistron encoding multiple anti-avian influenza virus siRNAs",
    journal: "Antiviral Research",
    volumePages: "88(2):162–169",
    doi: "https://doi.org/10.1016/j.antiviral.2010.08.008",
    impactFactor: "4.1"
  },
  {
    id: 18,
    year: 2008,
    authors: "Sajjanar B, Raut AA, Mishra A, Somvanshi R, Kulkarni DD",
    title: "Identification of small interfering RNAs for silencing of Infectious Bursal Disease Virus replication in vitro",
    journal: "Acta Virologica",
    volumePages: "52(4):241–247",
    doi: "https://doi.org/10.4149/av_2008_04_241",
    impactFactor: "1.5"
  },
  {
    id: 19,
    year: 2005,
    authors: "Raut AA, Kumar S, Tiwari AK",
    title: "Recombinant soluble glycoprotein antigen for rabies diagnosis and virus neutralization assays",
    journal: "Veterinary Microbiology",
    volumePages: "108(3-4):207–214",
    doi: "https://doi.org/10.1016/j.vetmic.2005.04.015",
    impactFactor: "3.3"
  },
  {
    id: 20,
    year: 2004,
    authors: "Raut AA, Bandyopadhyay S, Tiwari AK",
    title: "Canine parvovirus DNA vaccine: development and immune response in laboratory animals",
    journal: "Current Science",
    volumePages: "88(5):778–781",
    doi: "https://doi.org/10.18520/cs/v88/i5/778-781",
    impactFactor: "1.1"
  },
  {
    id: 21,
    year: 2001,
    authors: "Raut AA, Bandyopadhyay S, Singh VP",
    title: "Selection and molecular characterization of a thermoresistant rinderpest vaccine candidate",
    journal: "Acta Virologica",
    volumePages: "45:235–241",
    doi: "https://doi.org/10.4149/av_2001_04_235",
    impactFactor: "1.4"
  }
];

export const bookChaptersList: BookChapter[] = [
  {
    id: 1,
    authors: "Mishra A and Raut AA",
    year: 2012,
    title: "Nutrigenomics & livestock productivity",
    bookTitle: "Animal Nutrition: Advances & Developments",
    publisher: "Satish Serial Publishing House, Lucknow",
    pages: "164–166"
  },
  {
    id: 2,
    authors: "Kulkarni DD, Tosh C, Bhatia S, Raut AA",
    year: 2017,
    title: "Nipah Virus Infection",
    bookTitle: "Emerging and Re-emerging Infectious Diseases of Livestock",
    editor: "Bayry J",
    publisher: "Springer, Cham",
    pages: "223–248",
    doi: "https://doi.org/10.1007/978-3-319-47426-7_12"
  },
  {
    id: 3,
    authors: "Sudhakar SB, Gandhale PN, Singh F, Raut AA, Mishra A, Kulkarni DD, Singh VP",
    year: 2020,
    title: "Schmallenberg Virus",
    bookTitle: "Emerging and Transboundary Animal Viruses. Livestock Diseases and Management",
    editor: "Malik Y, Singh R, Yadav M",
    publisher: "Springer, Singapore",
    pages: "201–224",
    doi: "https://doi.org/10.1007/978-981-15-0402-0_10"
  },
  {
    id: 4,
    authors: "Raut AA, Gandhale PN, Kumar N, Pateriya A, Mishra A, Kulkarni DD",
    year: 2020,
    title: "Crimean-Congo Haemorrhagic Fever Virus",
    bookTitle: "Emerging and Transboundary Animal Viruses",
    editor: "Malik Y, Singh R, Yadav M",
    publisher: "Springer, Singapore",
    pages: "225–252",
    doi: "https://doi.org/10.1007/978-981-15-0402-0_11"
  },
  {
    id: 5,
    authors: "Raut AA",
    year: 2024,
    title: "Monkeypox Virus",
    bookTitle: "Status of Emerging Viral Diseases of Animals in India",
    editor: "Bhatia S, Tosh C, Mishra N, Raut AA, Rajukumar K, Sanyal A",
    publisher: "ICAR-National Institute of High Security Animal Diseases",
    pages: "108–112"
  },
  {
    id: 6,
    authors: "Raut AA, Mishra A, Pathak A",
    year: 2024,
    title: "Ebola Virus",
    bookTitle: "Status of Emerging Viral Diseases of Animals in India",
    editor: "Bhatia S, Tosh C, Mishra N, Raut AA, Rajukumar K, Sanyal A",
    publisher: "ICAR-National Institute of High Security Animal Diseases",
    pages: "87–93"
  },
  {
    id: 7,
    authors: "Raut AA, Mishra A, Pathak A",
    year: 2024,
    title: "Middle East Respiratory Syndrome Coronavirus",
    bookTitle: "Status of Emerging Viral Diseases of Animals in India",
    editor: "Bhatia S, Tosh C, Mishra N, Raut AA, Rajukumar K, Sanyal A",
    publisher: "ICAR-National Institute of High Security Animal Diseases",
    pages: "103–107"
  }
];

export const patentsList: Patent[] = [
  {
    id: 1,
    title: "SYBR Green chemistry-based universal diagnostic real-time PCR array for simultaneous detection of 22 exotic and emerging viruses",
    inventors: "Dr. Ashwin Ashok Raut, Dr. Anamika Mishra, et al.",
    status: "Under process for patenting",
    number: "[Patent application number under process]"
  },
  {
    id: 2,
    title: "Molecular-beacon chemistry-based universal diagnostic real-time PCR array for simultaneous detection of 17 exotic and emerging viruses",
    inventors: "Dr. Ashwin Ashok Raut, Dr. Anamika Mishra, et al.",
    status: "Under process for patenting",
    number: "[Patent application number under process]"
  },
  {
    id: 3,
    title: "Artificial positive control construct for molecular diagnosis of 16 tick-borne viruses and 12 porcine viruses",
    inventors: "Dr. Ashwin Ashok Raut, Dr. Anamika Mishra, et al.",
    status: "Under process for patenting",
    number: "[Patent application number under process]"
  }
];
