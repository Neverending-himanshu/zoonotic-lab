import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PlaceholderFrame } from '../components/PlaceholderFrame';
import { LightboxModal } from '../components/LightboxModal';
import { galleryItems } from '../data/galleryData';
import { GalleryPhoto } from '../types';
import { Camera, Eye, Filter } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (route: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'Facilities', label: 'Facilities' },
    { id: 'Fieldwork and Antarctica', label: 'Fieldwork & Antarctica' },
    { id: 'Team and Events', label: 'Team & Events' },
    { id: 'Trainings', label: 'Trainings' }
  ];

  const filteredPhotos = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-8 pb-16">
      <Breadcrumbs items={[{ label: 'Photo Gallery' }]} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
              Visual Archive
            </span>
            <h1 className="font-serif text-3xl font-bold text-slate-900 mt-1">
              Fieldwork, Facilities &amp; Laboratory Gallery
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              Photographic archive spanning high-containment biocontainment operations, the Indian Scientific Expedition to Antarctica, international trainings, and team events.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap border border-slate-300 rounded p-1 bg-slate-50 text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (3 per category, 4:3 ratio per B10) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className="bg-white border border-slate-200 rounded overflow-hidden shadow-2xs hover:border-slate-400 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="relative overflow-hidden bg-slate-100">
                <PlaceholderFrame
                  src={photo.image}
                  alt={photo.title}
                  ratio="4:3"
                  caption={photo.title}
                />
                <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                  <div className="bg-slate-900/80 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-xs">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View photo &amp; caption</span>
                  </div>
                </div>
              </div>

              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                    <span className="font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">
                      {photo.category}
                    </span>
                    <span className="font-mono text-slate-400">
                      {photo.image.replace('/images/gallery/', '')}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-sm text-slate-900 group-hover:text-teal-800 transition-colors">
                    {photo.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-100 line-clamp-3">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activePhoto}
        items={filteredPhotos}
        onClose={() => setActivePhoto(null)}
        onNavigate={(newIndex) => setActivePhoto(filteredPhotos[newIndex])}
      />
    </div>
  );
};
