import React from 'react';
import Navbar from '../components/Navbar';

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div
        className="relative min-h-screen bg-cover bg-center text-white flex flex-col items-center justify-center p-6"
        style={{
          backgroundImage: 'url("https://i.redd.it/4fxxbm4opjd31.jpg")', // Replace with your desired background image URL
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-90"></div>

        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">About Review Arena</h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Welcome to <span className="text-red-500 font-semibold">Review Arena</span>, the ultimate movie reviewing platform where movie enthusiasts gather to share their thoughts, rate films, and discover amazing content. Whether you're a casual viewer or a cinema fanatic, Review Arena provides a space for you to express your opinions after watching your favorite movies.
          </p>
          <div className="mt-8 max-w-4xl space-y-4 mx-auto">
            <h2 className="text-2xl font-semibold">What We Offer:</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>Write detailed reviews about the movies you love or critique.</li>
              <li>Rate movies to help other users decide what to watch.</li>
              <li>Explore trending reviews and top-rated films.</li>
              <li>Connect with a community of movie buffs.</li>
            </ul>
          </div>
          <p className="mt-8 text-lg">
            Our goal is to create a vibrant and inclusive platform where everyone’s opinions matter. Dive into the world of movies with Review Arena and make your voice heard!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
