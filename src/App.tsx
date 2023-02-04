import React from 'react';
import './App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from './shared/components/header/Header';
import Footer from './shared/components/footer/Footer';
import RoutesFile from './Routes';

function App() {
  return (
    <div className='App'>
      <Header />
      <RoutesFile />
      <Footer />
    </div>
  );
}

export default App;
