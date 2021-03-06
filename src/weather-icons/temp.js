import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `temperature${shortid.generate()}`;
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
        <rect x='12.4' y='10' width='1.5' height='1.1' />
        <rect x='12.4' y='2.3' width='2.2' height='1.1' />
        <rect x='12.4' y='7.4' width='2.2' height='1.1' />
        <rect x='12.4' y='4.8' width='1.5' height='1.1' />
        <circle cx='8.8' cy='14.8' r='0.9' />
        <path
          d='M11.3,11.6V3.9c0-1.3-1.1-2.4-2.4-2.4S6.5,2.6,6.5,3.9v7.6c-1.7,1.3-2,3.8-0.6,5.4s3.8,2,5.4,0.6
		c1.7-1.3,2-3.8,0.6-5.4C11.7,12,11.5,11.8,11.3,11.6z M8.9,17.4c-1.5,0-2.8-1.2-2.8-2.8c0-0.8,0.4-1.6,1.1-2.2l0.4-0.3V3.9
		c0-0.7,0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3v8.2l0.4,0.3c1.2,0.9,1.4,2.7,0.5,3.9C10.5,17,9.7,17.4,8.9,17.4z'
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
