import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `rain-heavy-color${shortid.generate()}`;
const Icon = ({
  title,
  desc,
  fillColor1,
  fillColor2,
  fillColor3,
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
          d='M8.7,1C7.7,1.3,6.5,2,6,2.5S4.9,4,4.8,4.5S4.8,6,4.4,6.3C4.1,6.6,3.2,7,3,7.4C2.8,7.8,2.5,8.8,2.6,9.3
		c0.1,0.5,0.5,1.2,0.8,1.4C3.8,11,5,11.4,5,11.4h11.3c0,0,0.3-0.1,1-0.2c0.7-0.1,1.1-0.9,1.2-1.1s0.3-1,0.3-1.3s-0.2-1.3-0.7-1.7
		s-1.2-0.6-1.5-0.7c-0.3-0.2-0.3-0.5-0.5-1c-0.1-0.5-0.3-2.2-1.2-2.8s-2.6-1.9-4-1.9C9.7,0.8,8.7,1,8.7,1z'
        />
      </g>
      <g id='Layer_1'>
        <path
          fill={`${fillColor2 || '#7A7A7A'}`}
          d='M4.7,11.6C4.7,11.6,4.7,11.6,4.7,11.6c-1.4-0.2-2.5-1.4-2.5-2.8c0-1.1,0.6-2.1,1.6-2.6c0.1,0,0.4-0.2,0.4-0.6
		c0-2.9,2.7-5.2,6.1-5.2c3.4,0,6.1,2.3,6.1,5.2c0,0.2,0.1,0.4,0.2,0.4C18,6.2,19,7.4,19,8.8c0,1.4-1,2.6-2.4,2.8
		c-0.2,0-0.3-0.1-0.3-0.2c0-0.2,0.1-0.3,0.2-0.3c1.1-0.2,1.9-1.1,1.9-2.2c0-1.1-0.8-2.1-1.9-2.2c-0.4,0-0.6-0.6-0.6-1
		c0-2.5-2.5-4.6-5.5-4.6S4.9,3.1,4.9,5.6c0,0.9-0.8,1.2-0.8,1.2c-0.7,0.4-1.3,1.2-1.3,2c0,1.1,0.8,2.1,1.9,2.2C4.9,11,5,11.2,5,11.4
		C5,11.5,4.9,11.6,4.7,11.6z'
        />
        <path
          fill={`${fillColor3 || '#28ABEF'}`}
          d='M4.2,17.3c-0.1,0-0.1,0-0.2,0c-0.2-0.1-0.3-0.3-0.2-0.5l0.7-1.6c0.1-0.2,0.3-0.3,0.5-0.2
		c0.2,0.1,0.3,0.3,0.2,0.5L4.6,17C4.5,17.2,4.4,17.3,4.2,17.3z'
        />
        <path
          fill={`${fillColor3 || '#28ABEF'}`}
          d='M5.7,13.7c-0.1,0-0.1,0-0.2,0c-0.2-0.1-0.3-0.3-0.2-0.5l0.7-1.8c0.1-0.2,0.3-0.3,0.5-0.2
		c0.2,0.1,0.3,0.3,0.2,0.5l-0.7,1.8C6,13.6,5.9,13.7,5.7,13.7z'
        />
        <path
          fill={`${fillColor3 || '#28ABEF'}`}
          d='M8.5,17.3c-0.1,0-0.1,0-0.2,0c-0.2-0.1-0.3-0.3-0.2-0.5l0.7-1.6c0.1-0.2,0.3-0.3,0.5-0.2
		c0.2,0.1,0.3,0.3,0.2,0.5L8.9,17C8.8,17.2,8.7,17.3,8.5,17.3z'
        />
        <path
          fill={`${fillColor3 || '#28ABEF'}`}
          d='M10,13.7c-0.1,0-0.1,0-0.2,0c-0.2-0.1-0.3-0.3-0.2-0.5l0.7-1.8c0.1-0.2,0.3-0.3,0.5-0.2
		c0.2,0.1,0.3,0.3,0.2,0.5l-0.7,1.8C10.3,13.6,10.2,13.7,10,13.7z'
        />
        <path
          fill={`${fillColor3 || '#28ABEF'}`}
          d='M12.6,17.3c-0.1,0-0.1,0-0.2,0c-0.2-0.1-0.3-0.3-0.2-0.5l0.7-1.6c0.1-0.2,0.3-0.3,0.5-0.2
		c0.2,0.1,0.3,0.3,0.2,0.5L13,17C12.9,17.2,12.8,17.3,12.6,17.3z'
        />
        <path
          fill={`${fillColor3 || '#28ABEF'}`}
          d='M14.1,13.7c-0.1,0-0.1,0-0.2,0c-0.2-0.1-0.3-0.3-0.2-0.5l0.7-1.8c0.1-0.2,0.3-0.3,0.5-0.2
		c0.2,0.1,0.3,0.3,0.2,0.5l-0.7,1.8C14.4,13.6,14.3,13.7,14.1,13.7z'
        />
        <path
          fill={`${fillColor3 || '#28ABEF'}`}
          d='M9.8,19.3c-0.1,0-0.1,0-0.2,0c-0.2-0.1-0.3-0.3-0.2-0.5l0.7-1.6c0.1-0.2,0.3-0.3,0.5-0.2
		c0.2,0.1,0.3,0.3,0.2,0.5l-0.7,1.6C10.1,19.2,9.9,19.3,9.8,19.3z'
        />
        <path
          fill={`${fillColor3 || '#28ABEF'}`}
          d='M11.3,15.7c-0.1,0-0.1,0-0.2,0c-0.2-0.1-0.3-0.3-0.2-0.5l0.7-1.8c0.1-0.2,0.3-0.3,0.5-0.2
		c0.2,0.1,0.3,0.3,0.2,0.5l-0.7,1.8C11.6,15.6,11.4,15.7,11.3,15.7z'
        />
        <path
          fill={`${fillColor3 || '#28ABEF'}`}
          d='M5.5,19.3c-0.1,0-0.1,0-0.2,0c-0.2-0.1-0.3-0.3-0.2-0.5l0.7-1.6c0.1-0.2,0.3-0.3,0.5-0.2
		c0.2,0.1,0.3,0.3,0.2,0.5L5.9,19C5.9,19.2,5.7,19.3,5.5,19.3z'
        />
        <path
          fill={`${fillColor3 || '#28ABEF'}`}
          d='M7.1,15.6c-0.1,0-0.1,0-0.2,0c-0.2-0.1-0.3-0.3-0.2-0.5l0.7-1.8C7.5,13.1,7.8,13,8,13.1
		c0.2,0.1,0.3,0.3,0.2,0.5l-0.7,1.8C7.4,15.5,7.2,15.6,7.1,15.6z'
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
  fillColor3: PropTypes.string,
};

export default Icon;
