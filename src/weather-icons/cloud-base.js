import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `cloud-base${shortid.generate()}`;
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
        <ellipse cx='11.3' cy='7.3' rx='3.9' ry='3.9' />
        <path
          d='M14.6,14.6h-9c-1.9,0-3.5-1.6-3.5-3.5v-0.2c0-1.9,1.6-3.5,3.5-3.5h9c1.9,0,3.5,1.6,3.5,3.5v0.2
		C18.1,13,16.5,14.6,14.6,14.6z'
        />
      </g>
      <rect x='2.8' y='16.3' width='15.3' height='0.9' />
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Icon;
