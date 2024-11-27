import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [messages, setMessages] = useState([]); // Contact messages
  const [loggedInUser, setLoggedInUser] = useState("");

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching mock data from db.json
        const usersResponse = await axios.get("http://localhost:5000/users");
        const postsResponse = await axios.get("http://localhost:5000/posts");
        const messagesResponse = await axios.get("http://localhost:5000/messages");

        setUsers(usersResponse.data);
        setPosts(postsResponse.data);
        setMessages(messagesResponse.data); // Set messages

        const currentUser = localStorage.getItem("loggedInUser");
        setLoggedInUser(currentUser);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Delete a message
  const handleDeleteMessage = async (messageId) => {
    try {
      // Send DELETE request to mock API to delete message
      await axios.delete(`http://localhost:5000/messages/${messageId}`);

      // Update local state to remove the message
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message.id !== messageId)
      );

      alert("Message deleted successfully.");
    } catch (error) {
      console.error("Error deleting message:", error);
      alert("Failed to delete message.");
    }
  };

  // Delete a user and their posts
  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/users/${userId}`);

      const userPosts = posts.filter((post) => post.userId === userId);
      for (const post of userPosts) {
        await axios.delete(`http://localhost:5000/posts/${post.id}`);
      }

      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      setPosts((prevPosts) => prevPosts.filter((post) => post.userId !== userId));

      alert("User and their posts deleted successfully.");
    } catch (error) {
      console.error("Error deleting user or their posts:", error);
      alert("Failed to delete user or their posts.");
    }
  };

  // Delete an individual post
  const handleDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:5000/posts/${postId}`);

      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));

      alert("Post deleted successfully.");
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Failed to delete post.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen bg-gray-200">
        {/* Sidebar */}
        <div className="w-64 bg-indigo-600 text-white p-6">
          <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
          <ul>
            <li className="mb-4 hover:bg-indigo-500 rounded p-2">
              <a href="#">Dashboard</a>
            </li>
            <li className="mb-4 hover:bg-indigo-500 rounded p-2">
              <a href="#">Users</a>
            </li>
            <li className="mb-4 hover:bg-indigo-500 rounded p-2">
              <a href="#">Posts</a>
            </li>
            <li className="mb-4 hover:bg-indigo-500 rounded p-2">
              <a href="#">Messages</a>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h1 className="text-4xl font-extrabold text-center text-black mb-6">
            Admin Dashboard
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Messages Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Messages</h2>
              {messages.map((message) => (
                <div key={message.id} className="border p-4 rounded-md shadow-md mb-4">
                  <p>
                    <strong>Username:</strong> {message.username}
                  </p>
                  <p>
                    <strong>Email:</strong> {message.email}
                  </p>
                  <p>
                    <strong>Message:</strong> {message.message}
                  </p>
                  <button
                    onClick={() => handleDeleteMessage(message.id)}
                    className="bg-red-500 text-white py-1 px-4 mt-2 rounded hover:bg-red-600"
                  >
                    Delete Message
                  </button>
                </div>
              ))}
            </div>

            {/* Users Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Users</h2>
              {users.map((user) => (
                <div key={user.id} className="border p-4 rounded-md shadow-md mb-4">
                  <p>
                    <strong>Username:</strong> {user.username}
                  </p>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="bg-red-500 text-white py-1 px-4 mt-2 rounded hover:bg-red-600"
                  >
                    Delete User 
                  </button>
                </div>
              ))}
            </div>

            {/* Posts Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Posts</h2>
              {posts.map((post) => (
                <div key={post.id} className="border p-4 rounded-md shadow-md mb-4">
                  <p>
                    <strong>Movie:</strong> {post.movie_name}
                  </p>
                  <p>
                    <strong>Review by:</strong> {post.username}
                  </p>
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="bg-red-500 text-white py-1 px-4 mt-2 rounded hover:bg-red-600"
                  >
                    Delete Post
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
