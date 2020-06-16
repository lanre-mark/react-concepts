import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `clear-night-color${shortid.generate()}`;
const Icon = ({ title, desc, fillColor1, fillColor2, ...props }) => {
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
      <g id='Layer_1'>
        <circle fill={`${fillColor1 || '#424242'}`} cx='1.6' cy='4.5' r='0.4' />
        <circle fill={`${fillColor1 || '#424242'}`} cx='8.3' cy='1.3' r='0.4' />
        <circle
          fill={`${fillColor1 || '#424242'}`}
          cx='1.9'
          cy='19.1'
          r='0.3'
        />
        <circle
          fill={`${fillColor1 || '#424242'}`}
          cx='18.2'
          cy='14.8'
          r='0.3'
        />
        <path
          fill={`${fillColor2 || '#28ABEF'}`}
          d='M15.1,14.2c-1.1,1.3-2.7,2.1-4.6,2.1c-3.4,0-6.1-2.7-6.1-6.1c0-3,2.2-5.6,5.2-6c0,0-2.8,3.6-0.8,7
		C11.2,15.1,15.1,14.2,15.1,14.2z'
        />
      </g>
      <g id='Layer_2'></g>
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  fillColor1: PropTypes.string,
  fillColor2: PropTypes.string,
};

export default Icon;
