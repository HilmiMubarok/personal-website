/* eslint-disable no-return-assign */
import React from 'react';
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (

  <div className="app__social">
    <div onClick={() => window.location.href = 'https://twitter.com/hilmimubarok__'}>
      <BsTwitter />
    </div>
    <div onClick={() => window.location.href = 'https://www.facebook.com/moh.hilmi.mubarok/'}>
      <FaFacebookF />
    </div>
    <div onClick={() => window.location.href = 'https://www.instagram.com/hilmimubarok__/'}>
      <BsInstagram />
    </div>
    <div onClick={() => window.location.href = 'https://www.github.com/hilmimubarok/'}>
      <BsGithub />
    </div>
    <div onClick={() => window.location.href = 'https://www.linkedin.com/in/hilmi-mubarok/'}>
      <BsLinkedin />
    </div>
  </div>

);

export default SocialMedia;
