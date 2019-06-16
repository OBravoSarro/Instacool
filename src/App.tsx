import React from 'react';
import './App.scss';
import Header from './components/Header'
import Intro from './components/Intro';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Intro/>
      <Intro/>
    </div>
  );
}

export default App;
