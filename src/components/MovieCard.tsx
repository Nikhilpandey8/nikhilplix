import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
  index?: number;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const delayAnimation = {
    transitionDelay: `${index ? index * 50 : 0}ms`,
  };

  return (
    <div 
      className="relative group"
      style={delayAnimation}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        transition-all duration-300 ease-in-out
        ${isHovered ? 'scale-110 z-20 shadow-xl rounded-md' : 'scale-100 z-10'}
      `}>
        <img 
          src={movie.posterUrl} 
          alt={movie.title}
          className="w-full h-auto rounded-md object-cover"
        />
        
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/80 to-black rounded-md">
            <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-col space-y-2">
              <h3 className="text-white font-semibold text-sm truncate">{movie.title}</h3>
              
              <div className="flex space-x-2">
                <button className="bg-white text-black rounded-full p-1">
                  <Play size={16} />
                </button>
                <button className="bg-gray-700/80 text-white rounded-full p-1 hover:bg-gray-600">
                  <Plus size={16} />
                </button>
                <button className="bg-gray-700/80 text-white rounded-full p-1 hover:bg-gray-600">
                  <ThumbsUp size={16} />
                </button>
                <div className="flex-grow"></div>
                <button className="bg-gray-700/80 text-white rounded-full p-1 hover:bg-gray-600">
                  <ChevronDown size={16} />
                </button>
              </div>
              
              <div className="flex items-center text-xs text-white space-x-2">
                <span className="text-green-500 font-bold">{Math.floor(Math.random() * 30) + 70}% Match</span>
                <span className="border border-gray-600 px-1">{movie.maturityRating}</span>
                <span>{movie.duration}</span>
              </div>
              
              <div className="text-xs text-white space-x-1">
                {movie.genres.slice(0, 3).map((genre, idx) => (
                  <span key={idx} className="inline-block">
                    {genre}{idx < Math.min(movie.genres.length, 3) - 1 ? ' • ' : ''}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;