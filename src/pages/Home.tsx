import React from 'react';
import Navbar from '../components/Navbar';
import FeaturedContent from '../components/FeaturedContent';
import ContentRow from '../components/ContentRow';
import Footer from '../components/Footer';
import { contentRows, getFeaturedContent } from '../data/movies';

const Home = () => {
  const featuredMovie = getFeaturedContent();

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <FeaturedContent movie={featuredMovie} />
      <div className="relative z-10 mt-[-100px]">
        {contentRows.map(row => (
          <ContentRow key={row.id} contentRow={row} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;