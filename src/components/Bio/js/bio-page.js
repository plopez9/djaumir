import React from 'react';

import profile from "../../../images/aumir-bw.jpg"
import "../css/bio-page.css"

const BioForm = props => (
  <header className="bio-header" id="bio-header">
    <div className="profile-container">
      <div className="bio-pic">
        <img className="profile" src={profile}/>
      </div>

      <div className="profile-bio">
        <div className="bio-card">
          <h1> Generic Title </h1>
          <p> This is test text this is test text this is test text this
          is test text this is test text this is test text this is test text
           this is test text this is test text this is test text this is test text
            this is test text this is test text this is test text this is test text
             this is test text this is test text this is test text this is test text

          </p>
        </div>
      </div>
    </div>
  </header>
);

export default BioForm;
