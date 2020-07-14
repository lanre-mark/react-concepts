import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `humidity${shortid.generate()}`;
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
      <path
        fill={`${fillColor || '#FFFFFF'}`}
        d='M14.7,13.3c0,2.7-2.2,4.9-4.9,4.9S4.9,16,4.9,13.3c0-5.1,4.9-12,4.9-12S14.7,8.7,14.7,13.3z M7,10.4
	c0,0.4,0.1,0.8,0.4,1c0.3,0.3,0.6,0.4,1,0.4s0.7-0.1,1-0.4c0.3-0.3,0.4-0.6,0.4-1v-0.3c0-0.4-0.1-0.7-0.4-1c-0.2-0.3-0.6-0.4-1-0.4
	c-0.4,0-0.7,0.1-1,0.4C7.1,9.4,7,9.7,7,10.1V10.4z M7.6,10.1c0-0.2,0.1-0.4,0.2-0.6C8,9.4,8.1,9.3,8.4,9.3c0.2,0,0.4,0.1,0.5,0.2
	C9,9.7,9.1,9.9,9.1,10.1v0.3c0,0.3-0.1,0.5-0.2,0.6c-0.1,0.1-0.3,0.2-0.5,0.2S8,11.1,7.9,11s-0.2-0.3-0.2-0.6v-0.3H7.6z M11.8,9.8
	l-0.5-0.3l-3.2,5.1l0.5,0.3L11.8,9.8z M10.2,14.1c0,0.4,0.1,0.8,0.4,1c0.3,0.3,0.6,0.4,1,0.4s0.7-0.1,1-0.4c0.3-0.3,0.4-0.6,0.4-1
	v-0.3c0-0.4-0.1-0.8-0.4-1s-0.6-0.4-1-0.4s-0.7,0.1-1,0.4c-0.3,0.3-0.4,0.6-0.4,1V14.1z M10.8,13.8c0-0.3,0.1-0.5,0.2-0.6
	c0.1-0.1,0.3-0.2,0.5-0.2s0.4,0.1,0.5,0.2c0.1,0.2,0.2,0.3,0.2,0.6v0.3c0,0.3-0.1,0.5-0.2,0.6c0,0.2-0.2,0.3-0.4,0.3
	s-0.4-0.1-0.5-0.2c-0.1-0.2-0.2-0.3-0.2-0.6v-0.4H10.8z'
      />
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  fillColor: PropTypes.string,
};

Icon.defaultProps = {
  fillColor: '#FFFFFF',
};

export default Icon;
