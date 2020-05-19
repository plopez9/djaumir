import React from 'react';

import mainLogo from "./images/djAumir_logo.png"

import Toolbar from "./components/SideNav-Toolbar/js/toolbar";
import ContactForm from "./components/Contact-Us/js/Contact-Page";
import BioForm from"./components/Bio/js/bio-page";

import './App.css';

const App = props =>(
      <div className="App">
        <Toolbar/>
        <header className="App-header" id="home-header" style={{background:"white"}}>
          <img src={mainLogo} style={{width:"50%"}}/>
        </header>
        <BioForm id="bio-header"/>
        <ContactForm/>
      </div>
    );

export default App;
