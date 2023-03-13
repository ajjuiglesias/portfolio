import React from 'react'
import { BsTwitter, BsInstagram,  } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://twitter.com/ajjuiglesias" target="_blank">
        <div>
          <BsTwitter />
        </div>
      </a>
      <a href="https://instagram.com/ajjuiglesias" target="_blank">
        <div>
          <BsInstagram />
        </div>
      </a>
      <a href="https://facebook.com/ajjuiglesiass" target="_blank">
        <div>
          <FaFacebookF />
        </div>
      </a>
    </div>
  );
}

export default SocialMedia
