export interface Movie {
  id: number;
  title: string;
  description: string;
  posterUrl: string;
  backdropUrl: string;
  year: number;
  maturityRating: string;
  duration: string;
  genres: string[];
  type: 'movie' | 'series';
  featured?: boolean;
}

export interface ContentRow {
  id: string;
  title: string;
  movies: Movie[];
}