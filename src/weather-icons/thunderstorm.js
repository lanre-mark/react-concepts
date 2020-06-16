import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `thunderstorm${shortid.generate()}`;
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
          d='M15.4,11.1h-3.1c-0.2,0-0.3-0.1-0.3-0.3s0.1-0.3,0.3-0.3h3.1c1.2,0,2.2-1,2.2-2.2c0-1.1-0.8-2-1.8-2.1
	c-0.4,0-0.6-0.6-0.6-0.9c0-2.5-2.4-4.5-5.3-4.5s-5.3,2-5.3,4.5c0,0.9-0.8,1.1-0.8,1.1C3,6.8,2.5,7.5,2.5,8.4c0,1.2,1,2.2,2.2,2.2
	h2.2c0.2,0,0.3,0.1,0.3,0.3S7,11.1,6.9,11.1H4.7c-1.5,0-2.7-1.2-2.7-2.7c0-1.1,0.6-2,1.6-2.5c0.1,0,0.4-0.2,0.4-0.6
	c0-2.8,2.6-5,5.9-5s5.9,2.3,5.9,5c0,0.2,0.1,0.4,0.1,0.4c1.3,0.2,2.3,1.3,2.3,2.7C18.1,9.9,16.9,11.1,15.4,11.1z'
        />
        <polygon points='8.4,9.2 7.7,13.9 9.3,13.9 8.5,19.5 12.3,11.9 10.7,11.9 11.6,9.2 ' />
      </g>
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Icon;
