import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import PostsList from "../components/PostsList";

const HomePage = () => {
  const [movieName, setMovieName] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [movieLanguage, setMovieLanguage] = useState("");
  const [yearOfRelease, setYearOfRelease] = useState("");
  const [review, setReview] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts"));
    if (savedPosts) {
      setPosts(savedPosts);
    }
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      localStorage.setItem("posts", JSON.stringify(posts));
    }
  }, [posts]);

  const validateReview = () => {
    const wordCount = review.trim().split(/\s+/).length;
    if (wordCount < 70) {
      setError("The review must contain at least 70 words.");
      return false;
    }
    return true;
  };

  const handleCreatePost = async (event) => {
    event.preventDefault();

    if (!movieName || !movieGenre || !movieLanguage || !yearOfRelease || !review || !username) {
      setError("All fields are required.");
      return;
    }

    if (!validateReview()) return;

    const newPost = {
      movie_name: movieName,
      movie_genre: movieGenre,
      movie_language: movieLanguage,
      year_of_release: yearOfRelease,
      review: review,
      username: username,
    };

    try {
      const response = await axios.post("http://localhost:5000/posts", newPost);
      alert("Post created successfully!");

      setPosts((prevPosts) => [...prevPosts, response.data]);

      // Clear form fields
      setMovieName("");
      setMovieGenre("");
      setMovieLanguage("");
      setYearOfRelease("");
      setReview("");
      setUsername("");
      setError(""); // Clear errors
    } catch (err) {
      console.error("There was an error creating the post:", err);
      setError("Failed to create post.");
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://foreverdc.com/wp-content/uploads/2021/03/moviesbaba-1-1536x864.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        <div className="container mx-auto p-4 max-w-3xl z-10 relative">
          <h1 className="text-4xl font-extrabold text-center mt-20 text-white">Welcome to Review Arena</h1>

          <div className="relative mt-20">
            <div className="w-full bg-gray-800 h-10 flex items-center justify-center text-white font-bold text-lg"></div>
            <form
              onSubmit={handleCreatePost}
              className="bg-gray-100 border-black border-4 rounded-b-lg shadow-lg p-6 space-y-4"
            >
              <div>
                <label htmlFor="movieName" className="block text-sm font-medium">Movie Name</label>
                <input
                  type="text"
                  id="movieName"
                  value={movieName}
                  onChange={(e) => setMovieName(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="movieGenre" className="block text-sm font-medium">Movie Genre</label>
                <input
                  type="text"
                  id="movieGenre"
                  value={movieGenre}
                  onChange={(e) => setMovieGenre(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="movieLanguage" className="block text-sm font-medium">Movie Language</label>
                <input
                  type="text"
                  id="movieLanguage"
                  value={movieLanguage}
                  onChange={(e) => setMovieLanguage(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="yearOfRelease" className="block text-sm font-medium">Year of Release</label>
                <input
                  type="number"
                  id="yearOfRelease"
                  value={yearOfRelease}
                  onChange={(e) => setYearOfRelease(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="review" className="block text-sm font-medium">Review</label>
                <textarea
                  id="review"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  onBlur={validateReview}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="username" className="block text-sm font-medium">Your Username</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded w-full mt-4 hover:bg-blue-600 transition"
              >
                Create Post
              </button>
            </form>
          </div>
        </div>
      </div>
      <PostsList posts={posts} />
    </>
  );
};

export default HomePage;
