import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `ice-pellet-color${shortid.generate()}`;
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
      <path
        fill={`${fillColor1 || '#7A7A7A'}`}
        d='M15.1,10.3c-0.1,0-0.1,0-0.2,0c-0.2-0.1-0.4-0.3-0.3-0.6l0.9-2.6c0,0,1.9-4.5,2.2-4.4c0.2,0.1-1.3,4.8-1.3,4.8
	L15.5,10C15.5,10.2,15.3,10.3,15.1,10.3z'
      />
      <path
        fill={`${fillColor1 || '#7A7A7A'}`}
        d='M10.8,13.9c-0.1,0-0.1,0-0.2,0c-0.2-0.1-0.4-0.3-0.3-0.6l0.9-2.6c0,0,2.8-6.9,3-6.8c0.2,0.1-2.2,7.2-2.2,7.2
	l-0.9,2.5C11.1,13.8,11,13.9,10.8,13.9z'
      />
      <path
        fill={`${fillColor1 || '#7A7A7A'}`}
        d='M8.8,9.7c-0.1,0-0.1,0-0.2,0C8.4,9.6,8.3,9.4,8.3,9.1l0.9-2.6c0,0,2.7-6,3-5.9c0.2,0.1-2.1,6.3-2.1,6.3L9.2,9.4
	C9.1,9.6,9,9.7,8.8,9.7z'
      />
      <path
        fill={`${fillColor1 || '#7A7A7A'}`}
        d='M4.7,11.5c-0.1,0-0.1,0-0.2,0c-0.2-0.1-0.4-0.3-0.3-0.6l0.9-2.6c0,0,1.9-4.5,2.2-4.4C7.6,4,6,8.7,6,8.7
	l-0.9,2.5C5,11.4,4.9,11.5,4.7,11.5z'
      />
      <rect
        x='7.9'
        y='15.9'
        transform='matrix(0.866 -0.5 0.5 0.866 -7.4639 7.0812)'
        fill={`${fillColor2 || '#28ABEF'}`}
        width='3.2'
        height='3.2'
      />
      <rect
        x='13.3'
        y='12'
        transform='matrix(0.866 -0.5 0.5 0.866 -4.6124 8.8941)'
        fill={`${fillColor2 || '#28ABEF'}`}
        width='2'
        height='2'
      />
      <rect
        x='6.8'
        y='11.7'
        transform='matrix(0.866 -0.5 0.5 0.866 -5.2866 5.6152)'
        fill={`${fillColor2 || '#28ABEF'}`}
        width='2'
        height='2'
      />
      <rect
        x='2.8'
        y='13.4'
        transform='matrix(0.866 -0.5 0.5 0.866 -6.6938 3.8334)'
        fill={`${fillColor2 || '#28ABEF'}`}
        width='2'
        height='2'
      />
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
