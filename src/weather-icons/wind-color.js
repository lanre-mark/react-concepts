import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `wind-colored${shortid.generate()}`;
const Icon = ({ title, desc, fillColor, ...props }) => {
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
        <path
          fill={`${fillColor || '#28ABEF'}`}
          d='M10.2,9.2H2.1v-1h8.2c0.9,0,1.7-0.8,1.7-1.7s-0.8-1.7-1.7-1.7c-0.9,0-1.7,0.8-1.7,1.7h-1
		c0-1.5,1.2-2.8,2.8-2.8S13,5,13,6.5S11.8,9.2,10.2,9.2z'
        />
        <path
          fill={`${fillColor || '#28ABEF'}`}
          d='M16.5,11.9H0.8v-1h15.7c0.9,0,1.7-0.8,1.7-1.7s-0.8-1.7-1.7-1.7c-0.9,0-1.7,0.8-1.7,1.7h-1
		c0-1.5,1.2-2.7,2.7-2.7c1.5,0,2.7,1.2,2.7,2.7S18,11.9,16.5,11.9z'
        />
        <path
          fill={`${fillColor || '#28ABEF'}`}
          d='M14.5,17.4c-1.1,0-2-0.9-2-2h1c0,0.5,0.4,1,1,1c0.5,0,1-0.4,1-1c0-0.5-0.4-1-1-1H4.8v-1h9.7c1.1,0,2,0.9,2,2
		S15.6,17.4,14.5,17.4z'
        />
      </g>
      <g id='Layer_2'></g>
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  fillColor: PropTypes.string,
};

export default Icon;
