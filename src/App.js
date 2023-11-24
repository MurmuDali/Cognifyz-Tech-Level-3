import React from 'react';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Home from './Components/Home/Home.js';
import About from './Components/About/About.js';
import Details from './Components/Details/Details.js';
import Contact from './Components/Contact/Contact.js';

function App() {
  return (
    <div className="App">
     <Header />
     <Home />
     <Details />
     <About />
     <Contact />
     <Footer className='footer-container' />
     
    </div>
  );
}

export default App;