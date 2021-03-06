import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `ice-pellet${shortid.generate()}`;
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
      <path
        d='M15,10.3c-0.1,0-0.1,0-0.2,0c-0.2-0.1-0.4-0.3-0.3-0.6l1-2.6c0,0,1.9-4.5,2.2-4.4c0.2,0.1-1.3,4.8-1.3,4.8L15.4,10
	C15.3,10.2,15.1,10.3,15,10.3z'
      />
      <path
        d='M10.6,13.9c-0.1,0-0.1,0-0.2,0c-0.2-0.1-0.4-0.3-0.3-0.6l1-2.6c0,0,2.8-6.9,3-6.9c0.2,0.1-2.2,7.3-2.2,7.3L11,13.6
	C10.9,13.8,10.8,13.9,10.6,13.9z'
      />
      <path
        d='M8.6,9.7c-0.1,0-0.1,0-0.2,0C8.2,9.6,8.1,9.3,8.1,9.1l1-2.6c0,0,2.7-6.1,3-6c0.2,0.1-2.1,6.4-2.1,6.4L9,9.4
	C8.9,9.6,8.8,9.7,8.6,9.7z'
      />
      <path
        d='M4.5,11.5c-0.1,0-0.1,0-0.2,0C4.1,11.4,4,11.1,4,10.9l1-2.6c0,0,1.9-4.5,2.2-4.4c0.2,0.1-1.3,4.8-1.3,4.8l-0.9,2.5
	C4.8,11.4,4.7,11.5,4.5,11.5z'
      />
      <rect
        x='7.7'
        y='15.9'
        transform='matrix(0.866 -0.5 0.5 0.866 -7.492 6.99)'
        width='3.2'
        height='3.2'
      />
      <rect
        x='13.1'
        y='12'
        transform='matrix(0.866 -0.5 0.5 0.866 -4.6262 8.812)'
        width='2'
        height='2'
      />
      <rect
        x='6.6'
        y='11.6'
        transform='matrix(0.866 -0.5 0.5 0.866 -5.3038 5.5166)'
        width='2'
        height='2'
      />
      <rect
        x='2.6'
        y='13.4'
        transform='matrix(0.866 -0.5 0.5 0.866 -6.7181 3.726)'
        width='2'
        height='2'
      />
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Icon;
