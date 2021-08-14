import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './style.css';
import { animateScroll as scroll } from 'react-scroll';

function Email() {
  const [sent, setsent] = useState('Send');
  const ref = useRef();
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  function sendEmail(e) {
    e.preventDefault();

    if (ref.current.value) {
      emailjs
        .sendForm(
          'portfolio',
          'template_0751srl',
          e.target,
          'user_EpSgeudZlWY814x2HTYJM'
        )
        .then(
          result => {
            console.log(result.text);
            alert('Your Message has been Sent!');
            setsent('Message has been Sent');
            toggleHome();
            setsent('Send');
          },
          error => {
            console.log(error.text);
            alert(`Error: Couldn't send the message`);
          }
        );
    } else {
      alert('enter something');
    }
  }

  return (
    <>
      {/* <form className='contact-form' onSubmit={sendEmail}>
        <input type='hidden' name='contact_number' />
        <label>Name</label>
        <input type='text' name='user_name' />
        <label>Email</label>
        <input type='email' name='user_email' />
        <label>Message</label>
        <textarea name='message' />
        <input type='submit' value='Send' />
      </form> */}

      <div class='container' id='send_email'>
        <form class='row input-container contact-form ' onSubmit={sendEmail}>
          <div class='col-xs-12'>
            <div class='styled-input wide'>
              <input type='text' name='user_name' ref={ref} required />
              <label>Name</label>
            </div>
          </div>
          <div class='col-md-6 col-sm-12'>
            <div class='styled-input'>
              <input type='text' name='user_email' ref={ref} required />
              <label>Email</label>
            </div>
          </div>
          <div class='col-md-6 col-sm-12'>
            <div class='styled-input' style={{ float: 'right' }}>
              <input type='text' name='subject' ref={ref} required />
              <label>Subject</label>
            </div>
          </div>
          <div class='col-xs-12'>
            <div class='styled-input wide'>
              <textarea name='message' ref={ref} required></textarea>
              <label>Message</label>
            </div>
          </div>
          <div class='col-xs-12'>
            {/* <div class='btn-lrg submit-btn' type='submit'>
              Send Message
            </div> */}
            <input
              class='btn-lrg submit-btn'
              type='submit'
              value={sent}
              style={{
                backgroundColor: '#4b8cfb',
                color: '#fff',
                float: 'right',
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Email;
