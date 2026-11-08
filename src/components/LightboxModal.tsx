import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { GalleryPhoto } from '../types';
import { getAssetUrl } from '../utils/assetHelper';

interface LightboxModalProps {
  item: GalleryPhoto | null;
  items: GalleryPhoto[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onNavigate
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      onNavigate(currentIndex - 1);
    } else {
      onNavigate(items.length - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < items.length - 1) {
      onNavigate(currentIndex + 1);
    } else {
      onNavigate(0);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate(currentIndex > 0 ? currentIndex - 1 : items.length - 1);
      if (e.key === 'ArrowRight') onNavigate(currentIndex < items.length - 1 ? currentIndex + 1 : 0);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items.length, onClose, onNavigate]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-slate-900 border border-slate-800 rounded shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-slate-300">
          <div className="flex items-center space-x-2 text-xs">
            <span className="bg-teal-900/60 text-teal-300 border border-teal-700/50 px-2 py-0.5 rounded font-medium">
              {item.category}
            </span>
            <span className="text-slate-400">
              {currentIndex + 1} of {items.length}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Lightbox"
            className="text-slate-400 hover:text-white transition-colors p-1 rounded hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display Area */}
        <div className="relative bg-slate-950 aspect-[4/3] max-h-[60vh] flex items-center justify-center overflow-hidden">
          <img
            src={getAssetUrl(item.image)}
            alt={item.title}
            className="w-full h-full object-contain"
            onError={(e) => {
              // Hide broken img and let fallback show
              (e.target as HTMLElement).style.display = 'none';
            }}
          />

          {/* Placeholder illustration if image is missing */}
          <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center text-slate-500 bg-slate-900">
            <Camera className="w-12 h-12 text-slate-600 mb-2 stroke-[1.2]" />
            <span className="text-xs uppercase tracking-wider text-slate-400">Photo coming soon</span>
            <span className="text-xs text-slate-500 mt-1">{item.title}</span>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous Image"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-800 border border-slate-700 transition-colors shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Image"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-800 border border-slate-700 transition-colors shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Caption bar */}
        <div className="p-4 sm:p-5 bg-slate-900 border-t border-slate-800 text-left">
          <h3 className="text-base font-serif font-bold text-white mb-1">{item.title}</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.caption}</p>
        </div>
      </div>
    </div>
  );
};
