import React from 'react';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  );
}

export default App;
