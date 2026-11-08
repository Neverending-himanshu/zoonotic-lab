import React from 'react';
import { ArrowRight, ShieldCheck, Dna, Activity, Award, BookOpen, Users, Building, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PlaceholderFrame } from '../components/PlaceholderFrame';
import { OneHealthDiagram, MetaviromicsPipelineDiagram } from '../components/ScientificDiagrams';
import { piProfile } from '../data/piData';
import { recentAchievements } from '../data/newsData';

interface HomePageProps {
  onNavigate: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO SECTION (Full panel with Influenza virus image background) */}
      <section className="relative bg-slate-950 text-white overflow-hidden border-b border-slate-800 min-h-[560px] lg:min-h-[640px] flex items-center">
        {/* Full Panel Background Image (Influenza virus with Nataraja artwork) */}
        <div className="absolute inset-0">
          <img
            src="/images/home/nataraja-influenza-hero.jpg?v=2"
            alt="Avian Influenza Virus and Cosmic Dance of Creation and Destruction"
            className="w-full h-full object-cover object-[78%_center] opacity-100 contrast-105 brightness-105"
          />
          {/* Text protector gradient: On mobile provides comfortable contrast for reading; on md/lg desktop gracefully transitions to transparent so the right-side virus is 100% clear and vivid */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 via-50% md:via-slate-950/70 md:via-40% to-slate-950/50 md:to-transparent pointer-events-none"></div>
          {/* Clean bottom blend */}
          <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="max-w-3xl space-y-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            {/* Main Lab Title (BIG: PathoGenomics Lab, with Zoonotic Diseases Group small underneath) */}
            <div className="space-y-1">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-sm">
                PathoGenomics Lab
              </h1>
              <div className="text-base sm:text-lg font-semibold tracking-wider text-emerald-400 uppercase font-sans">
                Zoonotic Diseases Group
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-sans">
                Group Leader: Dr. Ashwin Ashok Raut · Principal Scientist
              </div>
            </div>

            {/* Tagline / Mandate */}
            <p className="text-base sm:text-lg text-slate-200 font-sans leading-relaxed border-l-3 border-emerald-500 pl-4 py-1">
              Pathogen discovery, infection genomics, and high-containment virology to safeguard animal and human health through One Health disease surveillance and translational science.
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Conducting high-consequence viral investigations on Avian Influenza (H5N1), Nipah, MERS coronavirus, CCHF, Ebola, and Monkeypox within India’s specialized BSL-3 and ABSL-3 biocontainment facilities in Anand Nagar, Bhopal.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate('research-domains')}
                className="px-6 py-3.5 rounded bg-emerald-700 hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all inline-flex items-center shadow-lg hover:shadow-emerald-950/40 cursor-pointer"
              >
                <span>Explore our research</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 rounded bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs sm:text-sm font-medium tracking-wide transition-all inline-flex items-center backdrop-blur-xs cursor-pointer"
              >
                <span>Collaborate with us</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom subtle banner */}
        <div className="absolute bottom-0 inset-x-0 bg-slate-950/80 border-t border-slate-800/80 px-4 sm:px-6 lg:px-8 py-2 text-[11px] text-slate-400 flex flex-col sm:flex-row justify-end items-center gap-1">
          <span className="text-slate-400">Avian Influenza H5N1 · Nipah · MERS-CoV · CCHF · Ebola · Monkeypox</span>
        </div>
      </section>

      {/* 2. THE FOUR DOMAINS (Image-backed interactive cards as requested) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
              Core Scientific Mandate
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-0.5">
              Our Research Domains
            </h2>
          </div>
          <button
            onClick={() => onNavigate('research-domains')}
            className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 inline-flex items-center gap-1 cursor-pointer"
          >
            <span>View detailed domain projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {/* Domain 1: Outbreak Investigation & Diagnostic Services (Image 4) */}
          <div
            onClick={() => onNavigate('research-domains')}
            className="group relative h-80 sm:h-96 rounded overflow-hidden border border-slate-300 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between p-5"
          >
            {/* Background Image: 4th image (scientist with 96-well diagnostic plate) */}
            <img
              src="/assets/aistudio/image_e019b1d5.png"
              alt="Outbreak Investigation & Diagnostic Services in Diagnostic Suite"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-900/40 group-hover:via-slate-950/85 transition-colors"></div>

            {/* Top Badge */}
            <div className="relative z-10 flex justify-between items-center">
              <span className="px-2.5 py-1 rounded bg-slate-950/80 border border-emerald-600/50 text-[11px] font-mono font-bold text-emerald-400 backdrop-blur-xs">
                DOMAIN 01
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 space-y-2">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug drop-shadow-sm">
                Outbreak Investigation &amp; Diagnostic Services
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 font-sans">
                National referral diagnostics, emergency response for CCHF, Nipah, MERS, Ebola, and high-consequence transboundary animal viruses within certified BSL-3 facilities.
              </p>
              <div className="pt-2 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 inline-flex items-center gap-1">
                <span>Explore Domain Projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Domain 2: Disease Surveillance & Epidemiology (Image 2) */}
          <div
            onClick={() => onNavigate('research-domains')}
            className="group relative h-80 sm:h-96 rounded overflow-hidden border border-slate-300 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between p-5"
          >
            {/* Background Image: 2nd image (field researchers swabbing wild bird) */}
            <img
              src="/assets/aistudio/image_3ad51c54.png"
              alt="Disease Surveillance and Epidemiology in Wetland Flyways"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-900/40 group-hover:via-slate-950/85 transition-colors"></div>

            {/* Top Badge */}
            <div className="relative z-10 flex justify-between items-center">
              <span className="px-2.5 py-1 rounded bg-slate-950/80 border border-emerald-600/50 text-[11px] font-mono font-bold text-emerald-400 backdrop-blur-xs">
                DOMAIN 02
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 space-y-2">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug drop-shadow-sm">
                Disease Surveillance &amp; Epidemiology
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 font-sans">
                One Health sentinel networks tracking zoonotic spillover at zoo animal-human interfaces, migratory bird flyways, bat colonies, and Antarctic wildlife reservoirs.
              </p>
              <div className="pt-2 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 inline-flex items-center gap-1">
                <span>Explore Domain Projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Domain 3: Infection Genomics & MetaViromics (Image 3) */}
          <div
            onClick={() => onNavigate('research-domains')}
            className="group relative h-80 sm:h-96 rounded overflow-hidden border border-slate-300 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between p-5"
          >
            {/* Background Image: 3rd image (DNA double helix with high-throughput bioinformatic matrix) */}
            <img
              src="/assets/aistudio/image_d152f1f8.png"
              alt="Infection Genomics and MetaViromics High-Throughput Sequencing"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-900/40 group-hover:via-slate-950/85 transition-colors"></div>

            {/* Top Badge */}
            <div className="relative z-10 flex justify-between items-center">
              <span className="px-2.5 py-1 rounded bg-slate-950/80 border border-emerald-600/50 text-[11px] font-mono font-bold text-emerald-400 backdrop-blur-xs">
                DOMAIN 03
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 space-y-2">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug drop-shadow-sm">
                Infection Genomics &amp; MetaViromics
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 font-sans">
                Deciphering differential host resilience (chicken vs. duck H5N1), regulatory microRNAs (miR-485), gene-edited poultry, and whole-genome sequencing of novel viral strains.
              </p>
              <div className="pt-2 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 inline-flex items-center gap-1">
                <span>Explore Domain Projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* Domain 4: Next Generation Diagnostics & Vaccine Development (Image 5) */}
          <div
            onClick={() => onNavigate('research-domains')}
            className="group relative h-80 sm:h-96 rounded overflow-hidden border border-slate-300 shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between p-5"
          >
            {/* Background Image: 5th image (scientist drawing vaccine from vial) */}
            <img
              src="/assets/aistudio/image_02d44242.png"
              alt="Next Generation Diagnostics and Vaccine Development"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-900/40 group-hover:via-slate-950/85 transition-colors"></div>

            {/* Top Badge */}
            <div className="relative z-10 flex justify-between items-center">
              <span className="px-2.5 py-1 rounded bg-slate-950/80 border border-emerald-600/50 text-[11px] font-mono font-bold text-emerald-400 backdrop-blur-xs">
                DOMAIN 04
              </span>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 space-y-2">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug drop-shadow-sm">
                Next Generation Diagnostics &amp; Vaccines
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed line-clamp-3 font-sans">
                Multiplex serological arrays, strip-based Triplex NALFIA for Nipah/MERS/Ebola, rabies neutralizing monoclonal antibodies, and prioritized animal vaccines.
              </p>
              <div className="pt-2 text-xs font-semibold text-emerald-400 group-hover:text-emerald-300 inline-flex items-center gap-1">
                <span>Explore Domain Projects</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MEET THE PI PREVIEW (Required section) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-8 items-center">
            {/* PI Photo (4:5 ratio per B10) */}
            <div className="md:col-span-4 lg:col-span-3">
              <PlaceholderFrame
                src="/images/pi/portrait.jpg"
                alt="Dr. Ashwin Ashok Raut, Principal Scientist & Group Leader"
                ratio="4:5"
                caption="Dr. Ashwin Ashok Raut"
                className="w-full max-w-[260px] mx-auto shadow-xs"
              />
            </div>

            {/* PI Brief */}
            <div className="md:col-span-8 lg:col-span-9 space-y-4">
              <div className="inline-block text-xs font-semibold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                Principal Investigator
              </div>

              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                  {piProfile.name}
                </h2>
                <p className="text-sm text-slate-600 font-medium mt-0.5">
                  {piProfile.designation} · {piProfile.institute}
                </p>
              </div>

              {/* Two-line summary as required */}
              <p className="text-sm text-slate-700 leading-relaxed font-sans">
                Over twenty years of research experience through the Agricultural Research Service of ICAR, specializing in molecular virology of emerging high-risk zoonoses, high-containment biosafety, and next-generation diagnostic development.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded">
                  <div className="text-slate-500">Antarctica Expedition</div>
                  <div className="font-semibold text-slate-900 mt-0.5">1st Indian Vet Expert</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded">
                  <div className="text-slate-500">DST BOYSCAST</div>
                  <div className="font-semibold text-slate-900 mt-0.5">Texas Tech Fellow</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded">
                  <div className="text-slate-500">Extramural Funding</div>
                  <div className="font-semibold text-slate-900 mt-0.5">&gt; ₹20 Crore</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-2.5 rounded">
                  <div className="text-slate-500">High-Throughput Data</div>
                  <div className="font-semibold text-slate-900 mt-0.5">&gt; 100 Datasets</div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('pi')}
                  className="inline-flex items-center px-4 py-2.5 rounded bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold tracking-wide transition-colors cursor-pointer"
                >
                  <span>Meet the PI (Full Profile &amp; Achievements)</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LAB AT A GLANCE (Key Stats from B1) */}
      <section className="bg-slate-100/80 border-y border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="font-serif text-2xl font-bold text-slate-900">Lab at a Glance</h2>
            <p className="text-xs text-slate-600 mt-1">
              Rigorous empirical track record spanning over two decades of high-containment viral research.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            <div className="bg-white border border-slate-200 p-4 rounded shadow-2xs">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-800">32</div>
              <div className="text-xs font-medium text-slate-700 mt-1">Research Projects</div>
              <div className="text-[11px] text-slate-500">16 PI / 16 Co-PI</div>
            </div>

            <div className="bg-white border border-slate-200 p-4 rounded shadow-2xs">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-800">&gt; ₹20 Cr</div>
              <div className="text-xs font-medium text-slate-700 mt-1">Extramural Funds</div>
              <div className="text-[11px] text-slate-500">DBT, ICMR, ICAR, BBSRC</div>
            </div>

            <div className="bg-white border border-slate-200 p-4 rounded shadow-2xs">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-800">60</div>
              <div className="text-xs font-medium text-slate-700 mt-1">Research Articles</div>
              <div className="text-[11px] text-slate-500">Cumulative IF &gt; 170</div>
            </div>

            <div className="bg-white border border-slate-200 p-4 rounded shadow-2xs">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-800">&gt; 1,200</div>
              <div className="text-xs font-medium text-slate-700 mt-1">Citations</div>
              <div className="text-[11px] text-slate-500">h-index 18 · i10 30</div>
            </div>

            <div className="bg-white border border-slate-200 p-4 rounded shadow-2xs">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-800">&gt; 100</div>
              <div className="text-xs font-medium text-slate-700 mt-1">Public Datasets</div>
              <div className="text-[11px] text-slate-500">PRIDE, SRA, GEO</div>
            </div>

            <div className="bg-white border border-slate-200 p-4 rounded shadow-2xs">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-emerald-800">17</div>
              <div className="text-xs font-medium text-slate-700 mt-1">Trainings Run</div>
              <div className="text-[11px] text-slate-500">213 Beneficiaries</div>
            </div>
          </div>
        </div>
      </section>


      {/* SCIENTIFIC VECTOR DIAGRAM SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            Scientific Visualizations
          </span>
          <h2 className="font-serif text-2xl font-bold text-slate-900 mt-0.5">
            Interconnected Methodology &amp; Sequencing Architecture
          </h2>
        </div>

        <OneHealthDiagram />
        <MetaviromicsPipelineDiagram />
      </section>

      {/* 6. RARE FACILITIES HIGHLIGHT */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                High-Security Infrastructure
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                Rare Biocontainment &amp; Animal Facilities
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
                National high-containment infrastructure at ICAR-NIHSAD supporting biosafety-certified handling of Risk Group 3 and 4 zoonotic pathogens.
              </p>
            </div>
            <button
              onClick={() => onNavigate('research-facilities')}
              className="inline-flex items-center text-xs font-semibold text-emerald-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Explore full facilities showcase</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Facility 1: BSL-3 */}
            <div className="bg-slate-950/70 border border-slate-800 rounded overflow-hidden group">
              <PlaceholderFrame
                src="/images/facilities/bsl3-01.jpg"
                alt="BSL-3 Biocontainment Laboratory"
                ratio="3:2"
                caption="BSL-3 Laboratory"
                onClick={() => onNavigate('research-facilities')}
              />
              <div className="p-4 space-y-2">
                <h3 className="font-serif font-bold text-sm text-white">BSL-3 Laboratory</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Biosafety Level 3 laboratory for work with high-risk pathogens.
                </p>
              </div>
            </div>

            {/* Facility 2: ABSL-3 */}
            <div className="bg-slate-950/70 border border-slate-800 rounded overflow-hidden group">
              <PlaceholderFrame
                src="/images/facilities/abs3-01.jpg"
                alt="Animal BSL-3 (ABSL-3) Containment Suite"
                ratio="3:2"
                caption="Animal BSL-3 Facility"
                onClick={() => onNavigate('research-facilities')}
              />
              <div className="p-4 space-y-2">
                <h3 className="font-serif font-bold text-sm text-white">Animal BSL-3 (ABSL-3)</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Animal Biosafety Level 3 facility for controlled experimental viral infections.
                </p>
              </div>
            </div>

            {/* Facility 3: SPF Unit */}
            <div className="bg-slate-950/70 border border-slate-800 rounded overflow-hidden group">
              <PlaceholderFrame
                src="/images/facilities/spf-01.jpg"
                alt="Specific Pathogen Free (SPF) Unit"
                ratio="3:2"
                caption="SPF Unit"
                onClick={() => onNavigate('research-facilities')}
              />
              <div className="p-4 space-y-2">
                <h3 className="font-serif font-bold text-sm text-white">SPF Unit</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Specific Pathogen Free unit ensuring pathogen-free experimental biological models.
                </p>
              </div>
            </div>

            {/* Facility 4: Large Animal */}
            <div className="bg-slate-950/70 border border-slate-800 rounded overflow-hidden group">
              <PlaceholderFrame
                src="/images/facilities/large-animal-01.jpg"
                alt="Large-animal experimental facilities for pigs and cattle"
                ratio="3:2"
                caption="Large Animal Facility"
                onClick={() => onNavigate('research-facilities')}
              />
              <div className="p-4 space-y-2">
                <h3 className="font-serif font-bold text-sm text-white">Pig &amp; Cattle Facilities</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Large-animal experimental facilities for pigs and cattle under containment isolation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LATEST NEWS & ACHIEVEMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 pb-3">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
              Laboratory Updates
            </span>
            <h2 className="font-serif text-2xl font-bold text-slate-900 mt-0.5">
              Latest News &amp; Achievements
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onNavigate('news-positions')}
              className="inline-flex items-center text-xs font-bold text-amber-700 hover:text-amber-800 bg-amber-50 px-3 py-1.5 rounded border border-amber-200 transition-colors cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5"></span>
              <span>We are hiring (Open Positions)</span>
            </button>
            <button
              onClick={() => onNavigate('news-achievements')}
              className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 cursor-pointer"
            >
              View all news →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentAchievements.slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => onNavigate('news-achievements')}
              className="bg-white border border-slate-200 rounded p-5 shadow-xs hover:border-slate-300 transition-colors flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono text-[11px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {item.category}
                  </span>
                  <span>{item.date}</span>
                </div>
                <h3 className="font-serif font-bold text-base text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-700 flex items-center group-hover:translate-x-1 transition-transform">
                <span>Read detailed announcement</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
