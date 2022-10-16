import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <>
      <Toaster
        position="top right"
        toastOptions={{
          style: {
            fontSize: '1.8rem',
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </>
  );
}

export default App;
