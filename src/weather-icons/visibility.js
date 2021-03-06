import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `visibility${shortid.generate()}`;
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
          d='M10.1,14.8c-3.1,0-7.2-2.9-7.5-4.1C2.5,10.4,2.7,10,3.1,9.5c1.2-1.5,4.3-3.7,7-3.7c4,0,7.5,3.4,8,4.5
	c0.1,0.3,0,0.5-0.1,0.6C17.4,11.7,13.9,14.8,10.1,14.8z M3.6,10.5c0.3,0.7,3.7,3.3,6.5,3.3c3.3,0,6.3-2.6,6.9-3.4
	c-0.7-1-3.7-3.7-6.9-3.7C7.2,6.8,3.8,9.8,3.6,10.5z'
        />
        <path
          d='M10.3,6.9c-1.9,0-3.5,1.4-3.5,3.1s1.6,3.1,3.5,3.1s3.5-1.4,3.5-3.1S12.2,6.9,10.3,6.9z M11.2,8.5
	c-2.7,1-2.8,1.7-2.9,1.8c-0.2,0.2-0.6,1.1-0.7,0.4c-0.2-1.2,0.8-2.4,2.2-3C10.6,7.4,12,8.2,11.2,8.5L11.2,8.5z'
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
