import { DatasetItem } from '../types';

export const datasetsIntroduction = "The laboratory has published more than 100 high-throughput datasets, together with whole and partial genome sequences of viruses circulating in India.";

export const proteomeDatasets: DatasetItem[] = [
  {
    id: "prot-1",
    type: "Proteome",
    accession: "PXD010358",
    description: "Lung proteome of highly pathogenic avian influenza virus (H5N1) infection progression in chicken",
    database: "PRIDE",
    status: "Public",
    url: "https://www.ebi.ac.uk/pride/archive/projects/PXD010358"
  }
];

export const transcriptomeDatasets: DatasetItem[] = [
  {
    id: "tx-1",
    type: "Transcriptome",
    accession: "SRS498120, SRS497174",
    description: "Lung transcriptome of non-infected and highly pathogenic avian influenza virus infected crow on 454 GS FLX Titanium",
    database: "NCBI SRA",
    status: "Public",
    url: "https://www.ncbi.nlm.nih.gov/sra/?term=SRS498120"
  },
  {
    id: "tx-2",
    type: "Transcriptome",
    accession: "GSE65230 (GSM159070–77)",
    description: "Duck gene expression profile by microarray on Agilent (8 samples)",
    database: "NCBI GEO",
    status: "Public",
    url: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE65230"
  },
  {
    id: "tx-3",
    type: "Transcriptome",
    accession: "GSE65231 (GSM159078–85)",
    description: "Chicken gene expression profile by microarray on Agilent (8 samples)",
    database: "NCBI GEO",
    status: "Public",
    url: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE65231"
  }
];

export const viralMetagenomeDatasets: DatasetItem[] = [
  {
    id: "vm-1",
    type: "Viral Metagenome",
    accession: "SRX1444196",
    description: "Profiling of gut virome of domestic ducks",
    database: "NCBI SRA",
    status: "Public",
    url: "https://www.ncbi.nlm.nih.gov/sra/?term=SRX1444196"
  },
  {
    id: "vm-2",
    type: "Viral Metagenome",
    accession: "SRR9112925–28",
    description: "Pre-migratory oral profile of native and migratory aquatic birds from fresh water lakes in Assam state",
    database: "NCBI SRA",
    status: "Submitted, public release pending",
    url: "https://www.ncbi.nlm.nih.gov/sra/?term=SRR9112925"
  },
  {
    id: "vm-3",
    type: "Viral Metagenome",
    accession: "SRR9112931–34",
    description: "Post-migratory oral profile of native and migratory aquatic birds from fresh water lakes in North Eastern India",
    database: "NCBI SRA",
    status: "Submitted, public release pending",
    url: "https://www.ncbi.nlm.nih.gov/sra/?term=SRR9112931"
  },
  {
    id: "vm-4",
    type: "Viral Metagenome",
    accession: "SRR9112944–47",
    description: "Pre-migratory cloacal profile of native and migratory aquatic birds from fresh water lakes in Assam state",
    database: "NCBI SRA",
    status: "Submitted, public release pending",
    url: "https://www.ncbi.nlm.nih.gov/sra/?term=SRR9112944"
  },
  {
    id: "vm-5",
    type: "Viral Metagenome",
    accession: "SRR9112992–93",
    description: "Post-migratory cloacal profile of native and migratory aquatic birds from fresh water lakes in Assam state",
    database: "NCBI SRA",
    status: "Submitted, public release pending",
    url: "https://www.ncbi.nlm.nih.gov/sra/?term=SRR9112992"
  },
  {
    id: "vm-6",
    type: "Viral Metagenome",
    accession: "SAMN1112706",
    description: "Adélie penguin oral viral metagenome from Svenner Islands, Antarctica, Jan–Feb 2018",
    database: "NCBI BioSample",
    status: "Submitted, public release pending",
    url: "https://www.ncbi.nlm.nih.gov/biosample/SAMN1112706"
  },
  {
    id: "vm-7",
    type: "Viral Metagenome",
    accession: "SAMN11119281",
    description: "South Polar Skua faecal viral metagenome from near Bharati Indian Research Station, Prydz Bay, Antarctica, Jan–Feb 2018",
    database: "NCBI BioSample",
    status: "Submitted, public release pending",
    url: "https://www.ncbi.nlm.nih.gov/biosample/SAMN11119281"
  },
  {
    id: "vm-8",
    type: "Viral Metagenome",
    accession: "SAMN11127047",
    description: "Weddell Seal faecal viral metagenome from near Bharati Indian Research Station, Prydz Bay, Antarctica, Jan–Feb 2018",
    database: "NCBI BioSample",
    status: "Submitted, public release pending",
    url: "https://www.ncbi.nlm.nih.gov/biosample/SAMN11127047"
  },
  {
    id: "vm-9",
    type: "Viral Metagenome",
    accession: "SAMN11126887",
    description: "Adélie penguin faecal viral metagenome from Svenner Islands, Antarctica, Jan–Feb 2018",
    database: "NCBI BioSample",
    status: "Submitted, public release pending",
    url: "https://www.ncbi.nlm.nih.gov/biosample/SAMN11126887"
  },
  {
    id: "vm-10",
    type: "Viral Metagenome",
    accession: "SAMN11127117",
    description: "Antarctic ornithogenic soil viral metagenome from Svenner Islands, Antarctica, Jan–Feb 2018",
    database: "NCBI BioSample",
    status: "Submitted, public release pending",
    url: "https://www.ncbi.nlm.nih.gov/biosample/SAMN11127117"
  },
  {
    id: "vm-11",
    type: "Viral Metagenome",
    accession: "SAMN11127116",
    description: "Antarctic freshwater lake viral metagenome from Fisher Island, Antarctica, Jan–Feb 2018",
    database: "NCBI BioSample",
    status: "Submitted, public release pending",
    url: "https://www.ncbi.nlm.nih.gov/biosample/SAMN11127116"
  }
];
