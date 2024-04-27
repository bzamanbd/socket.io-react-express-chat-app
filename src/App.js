import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

export default function App() {
  const [dataFromServer, setDataFromServer] = useState(null);
  useEffect(() => {
    const socket = io('/'); // Replace with your server URL
    
    socket.on('myEvent', (data) => { 
      setDataFromServer(data);
    })
    // Socket.io events and logic go here
    
    return () => {
      socket.disconnect(); // Disconnect socket when component unmounts
    };
  }, []);

  return (
    <div>
      {
        dataFromServer ? (<p>{ dataFromServer}</p>):(<p>Loading......</p>)
      }
      
    </div>
  );
};

