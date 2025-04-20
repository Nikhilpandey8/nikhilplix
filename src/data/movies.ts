import { ContentRow, Movie } from '../types';

export const movies: Movie[] = [
  {
    id: 1,
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    posterUrl: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    year: 2016,
    maturityRating: "TV-14",
    duration: "4 Seasons",
    genres: ["Horror", "Sci-Fi", "Drama"],
    type: "series",
    featured: true
  },
  {
    id: 2,
    title: "The Crown",
    description: "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    posterUrl: "https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/5662857/pexels-photo-5662857.png?auto=compress&cs=tinysrgb&w=1260&h=750",
    year: 2016,
    maturityRating: "TV-MA",
    duration: "4 Seasons",
    genres: ["Drama", "History", "Biography"],
    type: "series"
  },
  {
    id: 3,
    title: "Breaking Bad",
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine to secure his family's future.",
    posterUrl: "https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/4009401/pexels-photo-4009401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    year: 2008,
    maturityRating: "TV-MA",
    duration: "5 Seasons",
    genres: ["Crime", "Drama", "Thriller"],
    type: "series"
  },
  {
    id: 4,
    title: "The Witcher",
    description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    posterUrl: "https://images.pexels.com/photos/4089658/pexels-photo-4089658.jpeg?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/4089658/pexels-photo-4089658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    year: 2019,
    maturityRating: "TV-MA",
    duration: "2 Seasons",
    genres: ["Action", "Adventure", "Fantasy"],
    type: "series"
  },
  {
    id: 5,
    title: "Money Heist",
    description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
    posterUrl: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    year: 2017,
    maturityRating: "TV-MA",
    duration: "5 Parts",
    genres: ["Crime", "Drama", "Thriller"],
    type: "series"
  },
  {
    id: 6,
    title: "The Irishman",
    description: "Hitman Frank Sheeran looks back at the secrets he kept as a loyal member of the Bufalino crime family in this acclaimed film from Martin Scorsese.",
    posterUrl: "https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    year: 2019,
    maturityRating: "R",
    duration: "3h 29m",
    genres: ["Biography", "Crime", "Drama"],
    type: "movie"
  },
  {
    id: 7,
    title: "Bird Box",
    description: "Five years after an ominous unseen presence drives most of society to suicide, a survivor and her two children make a desperate bid to reach safety.",
    posterUrl: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    year: 2018,
    maturityRating: "R",
    duration: "2h 4m",
    genres: ["Horror", "Sci-Fi", "Thriller"],
    type: "movie"
  },
  {
    id: 8,
    title: "Extraction",
    description: "A hardened mercenary's mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son.",
    posterUrl: "https://images.pexels.com/photos/1461435/pexels-photo-1461435.jpeg?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/1461435/pexels-photo-1461435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    year: 2020,
    maturityRating: "R",
    duration: "1h 56m",
    genres: ["Action", "Thriller"],
    type: "movie"
  },
  {
    id: 9,
    title: "The Queen's Gambit",
    description: "In a 1950s orphanage, a young girl reveals an astonishing talent for chess and begins an unlikely journey to stardom while grappling with addiction.",
    posterUrl: "https://images.pexels.com/photos/6509121/pexels-photo-6509121.jpeg?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/6509121/pexels-photo-6509121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    year: 2020,
    maturityRating: "TV-MA",
    duration: "Limited Series",
    genres: ["Drama"],
    type: "series"
  },
  {
    id: 10,
    title: "Dark",
    description: "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
    posterUrl: "https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/1809644/pexels-photo-1809644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    year: 2017,
    maturityRating: "TV-MA",
    duration: "3 Seasons",
    genres: ["Crime", "Drama", "Mystery"],
    type: "series"
  },
  {
    id: 11,
    title: "The Old Guard",
    description: "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
    posterUrl: "https://images.pexels.com/photos/713664/pexels-photo-713664.jpeg?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/713664/pexels-photo-713664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    year: 2020,
    maturityRating: "R",
    duration: "2h 5m",
    genres: ["Action", "Fantasy", "Thriller"],
    type: "movie"
  },
  {
    id: 12,
    title: "Ozark",
    description: "A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.",
    posterUrl: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=600",
    backdropUrl: "https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    year: 2017,
    maturityRating: "TV-MA",
    duration: "4 Seasons",
    genres: ["Crime", "Drama", "Thriller"],
    type: "series"
  }
];

export const contentRows: ContentRow[] = [
  {
    id: "trending",
    title: "Trending Now",
    movies: movies.slice(0, 6)
  },
  {
    id: "popular",
    title: "Popular on Netflix",
    movies: movies.slice(3, 9)
  },
  {
    id: "originals",
    title: "Netflix Originals",
    movies: movies.slice(6, 12)
  },
  {
    id: "watchAgain",
    title: "Watch It Again",
    movies: [movies[2], movies[4], movies[6], movies[8], movies[10], movies[1]]
  }
];

export const getFeaturedContent = (): Movie => {
  return movies.find(movie => movie.featured) || movies[0];
};