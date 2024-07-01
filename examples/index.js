import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  // State to hold the message fetched from the backend
  const [message, setMessage] = useState('');
  // State to hold any errors that occur during the fetch operation
  const [error, setError] = useState(null);

  // useEffect hook to fetch data from the backend when the component mounts
  useEffect(() => {
    fetch('/api/hello') // Fetch request to the proxied endpoint
      .then(response => {
        // Check if the response is not okay (e.g., 404 or 500 errors)
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse the response as JSON
      })
      .then(data => setMessage(data.message)) // Update the message state with the fetched data
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        setError(error.toString()); // Update the error state if there's an error
      });
  }, []); // Empty dependency array means this runs once after the initial render

  return (
    <div className='app'>
      {/* Conditionally render the error message if there is an error, otherwise render the fetched message */}
      {error ? <div className='error'>{error}</div> : message}
    </div>
  );
};

root.render(
  <App />
);

