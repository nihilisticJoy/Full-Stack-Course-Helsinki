import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const User = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.users.allUsers.find((u) => u.id === id));

  if (!user) {
    return <p>Loading user information...</p>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <h3>added blogs</h3>
      <ul>
        {user.blogs.map((blog) => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default User;
