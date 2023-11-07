import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MarkdownViewer from './components/MarkdownRenderer';
import { auth } from './firebase'; // Import your Firebase configuration
import Darkmode from 'darkmode-js'; // Import the library
import FormContainer from './components/FormContainer';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const options = {
      bottom: '64px', // default: '32px'
      right: '32px', // default: '32px'
      left: 'unset', // default: 'unset'
      time: '0.5s', // default: '0.3s'
      mixColor: '#fff', // default: '#fff'
      backgroundColor: '#fff',  // default: '#fff'
      buttonColorDark: '#100f2c',  // default: '#100f2c'
      buttonColorLight: '#fff', // default: '#fff'
      saveInCookies: false, // default: true,
      label: '🌓', // default: ''
      autoMatchOsTheme: true // default: true
    };

    const darkmode = new Darkmode(options);
    darkmode.showWidget();

    // Set up a listener to track the user's authentication state
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in
        setUser(authUser);
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return () => {
      // Unsubscribe from the auth state listener when the component unmounts
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<MarkdownViewer  user={user}/>} />
        <Route path="/:subject" element={<MarkdownViewer user={user}/>} />
        <Route path="/:subject/:content" element={<MarkdownViewer user={user}/>} />
        <Route path="/auth" element={<FormContainer />} />
      </Routes>
    </div>
  );
}

export default App;
