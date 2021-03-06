import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `partly-cloudy-day${shortid.generate()}`;
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
      <circle cx='1.2' cy='4.8' r='0.4' />
      <circle cx='8' cy='1.5' r='0.4' />
      <circle cx='18.1' cy='15.3' r='0.3' />
      <path
        d='M19.3,11.1c-0.9,1-2.2,1.7-3.7,1.7c-2.7,0-4.9-2.2-4.9-4.9c0-2.5,1.8-4.5,4.2-4.9c0,0-2.3,2.9-0.6,5.7
	C16.1,11.8,19.3,11.1,19.3,11.1z'
      />
      <path
        d='M11.8,18.8H3.1c-1.2,0-2.2-1-2.2-2.2c0-0.9,0.5-1.6,1.3-2c0.1,0,0.3-0.1,0.3-0.5c0-2.2,2.1-4.1,4.8-4.1s4.8,1.8,4.8,4.1
	c0,0.1,0.1,0.3,0.1,0.3c1,0.1,1.9,1.1,1.9,2.2C14,17.8,13,18.8,11.8,18.8z M7.3,10.5c-2.4,0-4.3,1.6-4.3,3.6C3,14.8,2.4,15,2.3,15
	c-0.6,0.3-1,0.9-1,1.6c0,1,0.8,1.8,1.8,1.8h8.7c1,0,1.8-0.8,1.8-1.8c0-0.9-0.6-1.6-1.5-1.7c-0.3,0-0.5-0.5-0.5-0.8
	C11.6,12.1,9.6,10.5,7.3,10.5z'
      />
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Icon;
