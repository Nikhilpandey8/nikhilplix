import React from 'react';
import { Play, Info } from 'lucide-react';
import Button from './ui/Button';
import { Movie } from '../types';

interface FeaturedContentProps {
  movie: Movie;
}

const FeaturedContent: React.FC<FeaturedContentProps> = ({ movie }) => {
  return (
    <div className="relative h-[70vh] lg:h-[85vh]">
      <div className="absolute inset-0">
        <img 
          src={movie.backdropUrl} 
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-black/10"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 px-4 md:px-16 pb-16 lg:pb-32 z-10">
        <div className="max-w-2xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-3">{movie.title}</h1>
          
          <div className="flex items-center text-white space-x-4 mb-4">
            <span className="text-green-500 font-bold">94% Match</span>
            <span className="text-sm">{movie.year}</span>
            <span className="border border-gray-600 px-2 py-0.5 text-sm">{movie.maturityRating}</span>
            <span className="text-sm">{movie.duration}</span>
          </div>
          
          <p className="text-white text-sm md:text-base mb-6">{movie.description}</p>
          
          <div className="flex space-x-3">
            <Button 
              variant="primary" 
              size="lg" 
              startIcon={<Play size={20} />}
            >
              Play
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              startIcon={<Info size={20} />}
            >
              More Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedContent;