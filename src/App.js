import React, { useEffect } from 'react';
import io from 'socket.io-client';

export default function App() {
  useEffect(() => {
    const socket = io('/'); // Replace with your server URL
    // Socket.io events and logic go here
    
    return () => {
      socket.disconnect(); // Disconnect socket when component unmounts
    };
  }, []);

  return (
    <div>
      hello react
    </div>
  );
};

