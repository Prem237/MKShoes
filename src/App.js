import React from 'react'
import Header from './components/header';
import Footer from './components/footer';
import MainContent from './components/mainContent';
import './App.css';

function App() {
  return (
    <div className="container" >
      <Header />
      <Footer />
      <MainContent />
    </div>
  );
}

export default App;
