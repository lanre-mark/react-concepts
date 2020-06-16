import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `clear-night${shortid.generate()}`;
const Icon = ({ title, desc, strokeColor, ...props }) => {
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
      <path
        stroke={`${strokeColor || '#7A7A7A'}`}
        strokeLinecap='round'
        strokeMiterlimit={10}
        d='M-34.5,52.3'
      />
      <circle cx='1.9' cy='4.2' r='0.4' />
      <circle cx='8.7' cy='0.9' r='0.4' />
      <circle cx='2.2' cy='19.2' r='0.3' />
      <circle cx='18.9' cy='14.8' r='0.3' />
      <path
        d='M15.7,14.1c-1.1,1.3-2.8,2.1-4.6,2.1c-3.4,0-6.2-2.8-6.2-6.2c0-3.1,2.3-5.7,5.3-6.1c0,0-2.9,3.7-0.8,7.2
	C11.6,15,15.7,14.1,15.7,14.1z'
      />
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  strokeColor: PropTypes.string,
};

export default Icon;
