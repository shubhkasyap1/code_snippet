import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FormList = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    // Fetch data from backend API when component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/code-snippets'); // Assuming your backend server is running on the same host/port
        setSnippets(response.data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch data');
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <h1>Code Snippets</h1>
      <ul>
        {snippets.map((snippet) => (
          <li key={snippet._id}>
            <div>Username: {snippet.username}</div>
            <div>Language: {snippet.language}</div>
            <div>Standard Input: {snippet.stdin}</div>
            <div>Code: {snippet.code}</div>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormList;
