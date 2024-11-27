import React from "react";

const PostsList = ({ posts }) => {
  return (
    <>
    
    <div className="bg-black">
      <h2
        className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500 text-center p-10 "
        style={{ fontFamily: "'sans-serif" }}
      >
        All Reviews
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-28 w-[1400px] mx-auto mt-32">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-xl hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              {/* Post Header */}
              <div className="flex items-center mb-3">
                {/* Profile Icon */}
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {post.username.charAt(0).toUpperCase()}
                </div>

                {/* Username and Timestamp */}
                <div>
                  <p className="text-white font-semibold">{post.username}</p>
                  <p className="text-gray-400 text-sm">
                    {new Date().toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Post Content */}
              <div>
                <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500">
                  {post.movie_name} - {post.year_of_release}
                </h3>
                <p className="text-sm text-gray-400 italic">
                  {post.movie_language} - {post.movie_genre}
                </p>
                <p className="mt-2 text-gray-300">{post.review}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white col-span-2 text-center">
            No reviews available. Be the first to add one!
          </p>
        )}
      </div>
    </div>

    </>
  );
};

export default PostsList;
