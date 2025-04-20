import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import MovieCard from './MovieCard';
import { ContentRow as ContentRowType } from '../types';

interface ContentRowProps {
  contentRow: ContentRowType;
}

const ContentRow: React.FC<ContentRowProps> = ({ contentRow }) => {
  const { title, movies } = contentRow;
  
  const scrollLeft = () => {
    const container = document.getElementById(`row-${contentRow.id}`);
    if (container) {
      container.scrollBy({ left: -container.clientWidth / 2, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    const container = document.getElementById(`row-${contentRow.id}`);
    if (container) {
      container.scrollBy({ left: container.clientWidth / 2, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-6 group">
      <h2 className="text-white text-xl md:text-2xl font-bold mb-4 px-4 md:px-16">{title}</h2>
      
      {/* Scroll Buttons */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 hidden group-hover:block">
        <button 
          onClick={scrollLeft} 
          className="bg-black/50 text-white p-1 rounded-full hover:bg-black/80"
          aria-label="Scroll left"
        >
          <ChevronLeft size={30} />
        </button>
      </div>
      
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20 hidden group-hover:block">
        <button 
          onClick={scrollRight} 
          className="bg-black/50 text-white p-1 rounded-full hover:bg-black/80"
          aria-label="Scroll right"
        >
          <ChevronRight size={30} />
        </button>
      </div>
      
      {/* Movies Container */}
      <div 
        id={`row-${contentRow.id}`}
        className="flex space-x-2 overflow-x-scroll scrollbar-hide px-4 md:px-16"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {movies.map((movie, index) => (
          <div key={movie.id} className="flex-none w-[150px] md:w-[200px] transition-transform">
            <MovieCard movie={movie} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentRow;