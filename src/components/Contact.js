import React from 'react';
import FacebookImage from './fa.png';
import TwitterImage from './tw.png';
import InstagramImage from './in.png';

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Phone Number: </p>
        <p>0728306031/0729563326</p>
      <p>Social Media: 
        <a href="https://www.facebook.com/yourusername">
          <img src={FacebookImage} alt="Facebook Image" />
        </a>
        <a href="https://www.twitter.com/yourusername">
          <img src={TwitterImage} alt="Twitter Image" />
        </a>
        <a href="https://www.instagram.com/yourusername">
          <img src={InstagramImage} alt="Instagram Image" />
        </a>
      </p>
      
      <p>Location: </p>
      <p>Head Office Justic Building Karen 1st floor</p>
      <p>Email: <a href="mailto:you@example.com">threemuskateers@gmail.com</a></p>
    </div>
  );
};

export default Contact;
