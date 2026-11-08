# Zoonotic Diseases Group Website
**ICAR-National Institute of High Security Animal Diseases (NIHSAD), Bhopal, India**  
Principal Investigator: **Dr. Ashwin Ashok Raut**, Principal Scientist & Group Leader

---

## 1. Overview
This website is the official publication-grade research portal for the **Zoonotic Diseases Group** at ICAR-NIHSAD. It highlights high-containment biosafety research (BSL-3, ABSL-3, SPF unit, and large-animal suites), One Health surveillance, infection genomics, and next-generation diagnostics.

All laboratory datasets, project rosters, publication records, team members, and news items are stored in modular TypeScript/JSON data files so laboratory personnel can update records without editing HTML or frontend layout code.

---

## 2. How to Update Content (Data Files)

All editable records are located in the `src/data/` directory:

| Section | Data File | What to Edit |
| :--- | :--- | :--- |
| **Lab Projects** | `src/data/projectsData.ts` | Add or update any of the 32 projects. Rows automatically color green (ongoing) or pink-red (completed) based on the `endDate` field. Ongoing projects automatically display the "Positions open" badge. |
| **PI Profile & Achievements** | `src/data/piData.ts` | Update PI bio, key stats, 7 achievement themes, education, honors, awards, professional memberships, and international collaborations. |
| **Technologies Developed** | `src/data/technologiesData.ts` | Manage published tools (items 1–13) and "In development" ongoing projects (items 101–104). |
| **Lab Trainings** | `src/data/trainingsData.ts` | Add new training programmes to the 17 existing records with dates, beneficiaries, and role. |
| **Publications & Patents** | `src/data/publicationsData.ts` | Paste new journal articles with authors, title, journal, year, DOI, and impact factor. The PI's name (`Raut AA`) is highlighted in bold automatically. Update book chapters and patent filing status. |
| **Omics Datasets** | `src/data/datasetsData.ts` | Update Proteome, Transcriptome, and Viral Metagenome accession numbers and status (e.g. change "Submitted, public release pending" to "Public"). |
| **Lab Members & Alumni** | `src/data/membersData.ts` | Add new Research Team members (shown 4 per row), Technical Staff, or graduated Alumni scholars. Update the 3-line descriptions. |
| **News & Careers** | `src/data/newsData.ts` | Post new dated news announcements and configure Open Positions (linked project, qualifications, how to apply). |
| **Gallery** | `src/data/galleryData.ts` | Add or update photos and captions across the 4 categories (Facilities, Fieldwork and Antarctica, Team and Events, Trainings). |

---

## 3. How to Replace Placeholder Images

Real photographs can be uploaded directly to replace the placeholder images without changing any code or aspect ratios. Keep the exact file names and dimensions below:

| Image Slot | File Location | Ratio | Description |
| :--- | :--- | :--- | :--- |
| **Home Hero** | `public/images/home/hero.jpg` | 16:9 | High-containment laboratory exterior or BSL-3 corridor |
| **PI Portrait** | `public/images/pi/portrait.jpg` | 4:5 | Official formal portrait of Dr. Ashwin Ashok Raut |
| **BSL-3 Laboratory** | `public/images/facilities/bsl3-01.jpg` to `03.jpg` | 3:2 | Negative pressure laboratory suites and HEPA engineering |
| **Animal BSL-3** | `public/images/facilities/abs3-01.jpg` to `03.jpg` | 3:2 | ABSL-3 containment isolators and challenge suites |
| **SPF Unit** | `public/images/facilities/spf-01.jpg` to `03.jpg` | 3:2 | Specific Pathogen Free barrier breeding environment |
| **Large Animal Facility** | `public/images/facilities/large-animal-01.jpg` & `02.jpg` | 3:2 | Pig and cattle experimental containment suites |
| **Gallery Archive** | `public/images/gallery/{facilities,fieldwork,team,trainings}-01.jpg` to `03.jpg` | 4:3 | High-resolution fieldwork and laboratory events |
| **Team Member Default** | `public/images/members/default.jpg` | 1:1 | Square avatar for research fellows and staff |
| **News Default** | `public/images/news/default.jpg` | 16:9 | Default header image for new announcements |

---

## 4. Placeholders Still to be Filled by the Lab (Part C Checklist)

The following items from Part C are noted and ready for lab confirmation:
1. **Social Media URLs**: LinkedIn, Instagram, X (Twitter), and Facebook URLs are marked `[URL to be added]`.
2. **PI Portrait**: Real formal photograph to replace `public/images/pi/portrait.jpg`.
3. **Patent Numbers**: Three technologies are listed with status *"Under process for patenting"*; formal filing numbers will be added upon grant.
4. **Full Publications List**: 21 representative & featured papers are included; additional papers from the Word document can be pasted into `src/data/publicationsData.ts`.
5. **Technical Staff Details**: Names listed per Part B7. Designations can be refined in `src/data/membersData.ts`.
6. **Viral Metagenome Accessions**: Records 2–11 are designated as *"Submitted, public release pending"*; accession URLs will become live upon release.

---

## 5. Building and Publishing
To build the production assets:
```bash
npm run build
```
This produces an optimized static build in `/dist` ready for hosting on any static server or institutional web server.
