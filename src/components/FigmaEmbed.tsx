'use client';
import { useState } from 'react';

type FigmaEmbedProps = {
  src: string;
  title: string;
  width: number;
  height: number;
  className?: string;
};

const FigmaEmbed = ({ src, title, width, height, className }: FigmaEmbedProps) => {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title={title}
        width={width}
        height={height}
        src={src}
        allowFullScreen
        className={className}
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      style={{ width, height }}
      className={`flex flex-col items-center justify-center overflow-clip rounded-[48px] bg-gray-500 bg-[url(/assets/images/ElainesEasecipesFigma.png)] bg-contain bg-center bg-no-repeat text-white bg-blend-overlay transition hover:bg-gray-200 hover:text-gray-800 ${className ?? ''}`}
    >
      <div className="hover:backdrop-blur-xs flex size-full flex-col items-center justify-center gap-2 backdrop-blur-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10">
          <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
        </svg>
        <span className="text-sm font-black">Click to load Figma prototype</span>
      </div>
    </button>
  );
};

export { FigmaEmbed };
