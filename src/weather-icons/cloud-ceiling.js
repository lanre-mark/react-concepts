import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `cloud-ceiling${shortid.generate()}`;
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
        <ellipse cx='11.3' cy='9.5' rx='3.9' ry='4.1' />
        <path
          d='M14.3,17.1H5.9c-2.1,0-3.8-1.7-3.8-3.8v0c0-2.1,1.7-3.8,3.8-3.8h8.5c2.1,0,3.8,1.7,3.8,3.8v0
		C18.1,15.4,16.4,17.1,14.3,17.1z'
        />
      </g>
      <rect x='2.8' y='3.2' width='15.3' height='0.9' />
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Icon;
