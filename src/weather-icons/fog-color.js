import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `fog-color${shortid.generate()}`;
const Icon = ({
  title,
  desc,
  fillColor1,
  fillColor2,
  color,
  opacity1,
  opacity2,
  ...props
}) => {
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
      <g id='Layer_2'>
        <path
          fill={`${fillColor1 || '#FFFFFF'}`}
          d='M7.7,1.2C6.8,1.7,6,2.5,5.8,3.1C5.6,3.6,5.5,4.5,5.4,4.8S5.1,5.4,4.9,5.4C4.8,5.5,3.8,6.3,3.7,6.8
		s0.4,2.1,1,2.3C5.3,9.3,14.5,9.4,15,9.4s1.5-0.7,1.7-1.1C16.9,8,17,7,16.7,6.4c-0.3-0.6-0.4-0.8-0.8-0.9s-1-0.1-1-0.5
		s-0.3-2-0.8-2.6c-0.5-0.6-2.4-1.9-3.9-1.8S8.6,0.8,8.6,0.8L7.7,1.2z'
        />
      </g>
      <g id='Layer_1'>
        <path
          fill='none'
          stroke={`${color || '#7A7A7A'}`}
          strokeLinecap='round'
          strokeMiterlimit={10}
          d='M3.9,16.6'
        />
        <path
          fill={`${fillColor2 || '#28ABEF'}`}
          opacity={0.25 || opacity1}
          d='M15.9,14.5c-0.7,0-1.2-0.4-1.6-0.8C13.9,13.3,13.6,13,13,13c-0.4,0-0.6,0.2-0.9,0.5c-0.3,0.4-0.8,0.9-1.8,0.9
		c-0.9,0-1.3-0.4-1.7-0.8C8.3,13.3,8,13,7.4,13c-0.5,0-0.7,0.3-1.1,0.6C6,14,5.5,14.5,4.7,14.5c-0.7,0-1.2-0.5-1.6-0.9
		c-0.4-0.3-0.7-0.6-1-0.6c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4c0.6,0,1.1,0.4,1.5,0.8c0.4,0.3,0.8,0.7,1.2,0.7
		c0.5,0,0.8-0.3,1.1-0.6c0.4-0.4,0.8-0.8,1.6-0.8c0.9,0,1.3,0.4,1.7,0.8c0.4,0.4,0.7,0.6,1.2,0.6c0.6,0,0.9-0.3,1.2-0.7
		c0.3-0.4,0.7-0.8,1.4-0.8c0.9,0,1.4,0.5,1.8,0.9c0.4,0.3,0.6,0.6,1.1,0.6c0.5,0,0.8-0.3,1.1-0.6c0.4-0.4,0.9-0.8,1.6-0.8
		c0.2,0,0.4,0.2,0.4,0.4c0,0.2-0.2,0.4-0.4,0.4c-0.4,0-0.7,0.3-1.1,0.6C17.1,14,16.7,14.5,15.9,14.5z'
        />
        <path
          fill={`${fillColor2 || '#28ABEF'}`}
          opacity={0.6 || opacity2}
          d='M15.9,16.9c-0.7,0-1.2-0.4-1.6-0.8c-0.4-0.4-0.7-0.7-1.3-0.7c-0.4,0-0.6,0.2-0.9,0.5c-0.3,0.4-0.8,0.9-1.8,0.9
		c-0.9,0-1.3-0.4-1.7-0.8c-0.4-0.3-0.6-0.6-1.2-0.6c-0.5,0-0.7,0.3-1.1,0.6c-0.4,0.4-0.8,0.9-1.6,0.9c-0.7,0-1.2-0.5-1.6-0.9
		c-0.4-0.3-0.7-0.6-1-0.6c-0.2,0-0.4-0.2-0.4-0.4c0-0.2,0.2-0.4,0.4-0.4c0.6,0,1.1,0.4,1.5,0.8c0.4,0.3,0.8,0.7,1.2,0.7
		c0.5,0,0.8-0.3,1.1-0.6c0.4-0.4,0.8-0.8,1.6-0.8c0.9,0,1.3,0.4,1.7,0.8c0.4,0.4,0.7,0.6,1.2,0.6c0.6,0,0.9-0.3,1.2-0.7
		c0.3-0.4,0.7-0.8,1.4-0.8c0.9,0,1.4,0.5,1.8,0.9c0.4,0.3,0.6,0.6,1.1,0.6c0.5,0,0.8-0.3,1.1-0.6c0.4-0.4,0.9-0.8,1.6-0.8
		c0.2,0,0.4,0.2,0.4,0.4c0,0.2-0.2,0.4-0.4,0.4c-0.4,0-0.7,0.3-1.1,0.6C17.1,16.4,16.7,16.9,15.9,16.9z'
        />
        <path
          fill={`${fillColor2 || '#28ABEF'}`}
          d='M15.9,19.2c-0.7,0-1.2-0.4-1.6-0.8c-0.4-0.4-0.7-0.7-1.3-0.7c-0.4,0-0.6,0.2-0.9,0.5c-0.3,0.4-0.8,0.9-1.8,0.9
		c-0.9,0-1.3-0.4-1.7-0.8c-0.4-0.3-0.6-0.6-1.2-0.6c-0.5,0-0.7,0.3-1.1,0.6c-0.4,0.4-0.8,0.9-1.6,0.9c-0.7,0-1.2-0.5-1.6-0.9
		c-0.4-0.3-0.7-0.6-1-0.6c-0.2,0-0.4-0.2-0.4-0.4s0.2-0.4,0.4-0.4c0.6,0,1.1,0.4,1.5,0.8c0.4,0.3,0.8,0.7,1.2,0.7
		c0.5,0,0.8-0.3,1.1-0.6c0.4-0.4,0.8-0.8,1.6-0.8c0.9,0,1.3,0.4,1.7,0.8c0.4,0.4,0.7,0.6,1.2,0.6c0.6,0,0.9-0.3,1.2-0.7
		c0.3-0.4,0.7-0.8,1.4-0.8c0.9,0,1.4,0.5,1.8,0.9c0.4,0.3,0.6,0.6,1.1,0.6c0.5,0,0.8-0.3,1.1-0.6c0.4-0.4,0.9-0.8,1.6-0.8
		c0.2,0,0.4,0.2,0.4,0.4s-0.2,0.4-0.4,0.4c-0.4,0-0.7,0.3-1.1,0.6C17.1,18.8,16.7,19.2,15.9,19.2z'
        />
        <path
          fill={`${fillColor1 || '#FFFFFF'}`}
          d='M14.9,9.6H5.8c-1.3,0-2.3-1-2.3-2.3c0-0.9,0.5-1.7,1.3-2.1c0.1,0,0.4-0.1,0.4-0.5c0-2.3,2.2-4.3,5-4.3
		s5,1.9,5,4.3c0,0.1,0.1,0.3,0.1,0.3c1.1,0.1,2,1.1,2,2.3C17.2,8.6,16.1,9.6,14.9,9.6z M10.1,0.9c-2.5,0-4.5,1.7-4.5,3.8
		c0,0.7-0.6,1-0.7,1c-0.6,0.3-1,0.9-1,1.6c0,1,0.8,1.8,1.8,1.8h9.1c1,0,1.8-0.8,1.8-1.8c0-0.9-0.7-1.7-1.6-1.8
		c-0.3,0-0.5-0.5-0.5-0.8C14.6,2.6,12.6,0.9,10.1,0.9z'
        />
      </g>
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  fillColor1: PropTypes.string,
  fillColor2: PropTypes.string,
  color: PropTypes.string,
  opacity1: PropTypes.number,
  opacity2: PropTypes.number,
};

export default Icon;
