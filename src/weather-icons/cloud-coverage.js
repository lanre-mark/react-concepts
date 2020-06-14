import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `cloud-coverage${shortid.generate()}`;
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
        <circle cx='11.2' cy='9' r='4' />
        <path
          d='M14.4,16.4H5.6c-2,0-3.7-1.7-3.7-3.7v0c0-2,1.7-3.7,3.7-3.7h8.8c2,0,3.7,1.7,3.7,3.7v0
		C18.1,14.8,16.4,16.4,14.4,16.4z'
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
