import React, { Component } from 'react';
import axios from "axios";

import "../css/Contact-Page.css"

const API_PATH='http://localhost:1992/react-contact-form/api/contact/index.php';

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

  submitMessage(event) {
    event.preventDefault();
    axios({
      method:"post",
      url: `${API_PATH}`,
      headers: {"content-type": "application/json"},
      data: this.state,
    }).then(result => {
      this.setState({mailSent:result.data.sent})
    }).catch(
      error=>this.setState({error:error.message})
    );

    console.log(this.state);
  }

  render(){

    return (
      <div className="contact-header" id="contact-header">
        <div className="contact-mask">
        </div>

        <div className="contact-content">
            <form className="align-content" action="../PHP/contactform.php" method="post">

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
                  <input className="email-entry" placeholder="Your Email"
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
              onClick = {e => this.submitMessage(e)}
              disabled ={!this.state.contactName||!this.state.contactEmail||!this.state.emailMessage}>
                Send Message
              </button>

              <div className="thanks">
                {this.state.mailSent &&
                <div> Thank you for contacting us! </div>}
              </div>
            </form>

        </div>
      </div>
    );
  }
}

export default ContactForm;
