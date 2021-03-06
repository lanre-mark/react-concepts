import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `wind${shortid.generate()}`;
const Icon = ({ title, desc, ...props }) => {
  return (
    <svg
      id={id}
      {...props}
      width='20px'
      height='20px'
      viewBox='0 0 20 20'
      version='1.1'
    >
      <title id={`${id}_Title`}>{title}</title>
      <desc id={`${id}_Desc`}>{desc}</desc>
      <g>
        <path
          d='M16.9,8.6c0-1.2-0.9-2.2-2.1-2.2s-2.2,0.9-2.2,2.1c0,0.1,0,0.1,0,0.2c0,0.4,0.1,0.8,0.3,1.1H3.6
		C3.3,9.7,3.1,10,3.1,10.3s0.2,0.6,0.5,0.6h11.2c0.1,0,0.1-0.1,0.2-0.1C16.1,10.7,17,9.7,16.9,8.6z M14.8,9.7
		c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1s1.1,0.5,1.1,1.1l0,0C15.9,9.2,15.4,9.7,14.8,9.7z'
        />
        <path
          d='M11.1,12.4H3.6c-0.3,0.1-0.5,0.4-0.5,0.7s0.2,0.5,0.5,0.5l0,0h5.7C9.1,13.9,9,14.3,9,14.7
		c0,1.2,0.9,2.2,2.1,2.2s2.2-0.9,2.2-2.1c0-0.1,0-0.1,0-0.2C13.3,13.5,12.4,12.5,11.1,12.4z M11.1,15.8c-0.6,0-1.1-0.5-1.2-1.1
		c0-0.6,0.5-1.1,1.1-1.2c0.6,0,1.1,0.5,1.2,1.1l0,0C12.2,15.3,11.8,15.8,11.1,15.8z'
        />
        <path
          d='M3.6,8.2h4.8c0-0.1,0-0.2,0.1-0.2c1.1-0.1,2-1.1,2-2.2c0-1.2-0.9-2.2-2.1-2.2s-2.2,1-2.1,2.2
		c0,0.4,0.1,0.8,0.3,1.1h-3C3.3,7,3.1,7.2,3.1,7.5S3.3,8.1,3.6,8.2z M8.3,4.7c0.6,0,1.1,0.5,1.1,1.1S8.9,6.9,8.3,6.9
		C7.8,7,7.3,6.5,7.2,5.8l0,0C7.2,5.2,7.7,4.7,8.3,4.7L8.3,4.7z'
        />
      </g>
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Icon;
