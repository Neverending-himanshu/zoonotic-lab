import React, { useState } from 'react';
import { Camera } from 'lucide-react';

interface PlaceholderFrameProps {
  src?: string;
  alt: string;
  ratio?: '16:9' | '4:5' | '3:2' | '4:3' | '1:1';
  caption?: string;
  className?: string;
  onClick?: () => void;
}

export const PlaceholderFrame: React.FC<PlaceholderFrameProps> = ({
  src,
  alt,
  ratio = '16:9',
  caption = 'Photo coming soon',
  className = '',
  onClick
}) => {
  const [imageError, setImageError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Aspect ratio classes
  const ratioClasses = {
    '16:9': 'aspect-[16/9]',
    '4:5': 'aspect-[4/5]',
    '3:2': 'aspect-[3/2]',
    '4:3': 'aspect-[4/3]',
    '1:1': 'aspect-square'
  }[ratio];

  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden bg-slate-100 border border-slate-300/80 rounded-sm flex flex-col items-center justify-center text-center select-none ${ratioClasses} ${className} ${
        onClick ? 'cursor-pointer hover:border-slate-400 transition-colors' : ''
      }`}
    >
      {src && !imageError && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setImageError(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* Neutral placeholder fallback / overlay when loading or error */}
      {(!src || imageError || !loaded) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-slate-100 text-slate-500">
          <div className="w-10 h-10 rounded-full bg-slate-200/90 border border-slate-300 flex items-center justify-center mb-2 text-slate-500">
            <Camera className="w-5 h-5 stroke-[1.5]" />
          </div>
          <span className="text-xs font-medium tracking-wide text-slate-600 uppercase">
            {caption}
          </span>
          <span className="text-[11px] text-slate-400 mt-0.5 line-clamp-1 max-w-[85%]">
            {alt}
          </span>
        </div>
      )}
    </div>
  );
};
