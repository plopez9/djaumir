import React, { Component } from 'react';

import "../css/Contact-Page.css"


class ContactForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      contactName: "",
      contactEmail:"",
      emailMessage:"",
      mailSent: false,
      error: null,
    }
  }

  render(){

    return (
      <div className="contact-header" id="contact-header">
        <div className="contact-mask">
        </div>

        <div className="contact-content">
            <form className="align-content">

              <div className="contact-title">
                <h2> Contact Us </h2>
              </div>

              <div className="ne-row">
                <div className="name-container">
                Name <span style={{color: "red"}}>*</span>
                  <input className="name-entry" placeholder="Your Name"
                    value={this.state.contactName}
                    onChange = {e => this.setState({contactName: e.target.value})}>
                  </input>
                </div>

                <div className="email-container">
                Email <span style={{color: "red"}}>*</span>
                  <input className="email-entry" placeholder="Email@Host.com"
                    value={this.state.contactEmail}
                    onChange = {e => this.setState({contactEmail: e.target.value})}>
                  </input>
                </div>
              </div>


              <div className="message-container">
              Message <span style={{color: "red"}}>*</span>
                <textarea className="message-entry"
                  placeholder=" Whats on your mind?" type="text"
                  value={this.state.emailMessage}
                  onChange = {e => this.setState({emailMessage: e.target.value})}>
                </textarea>
              </div>

              <button className="send-message"
              disabled ={!this.state.contactName||!this.state.contactEmail||!this.state.emailMessage}>
                Send Message
              </button>

            </form>

        </div>
      </div>
    );
  }
}

export default ContactForm;
