import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `wind-direction-arrow${shortid.generate()}`;
const Icon = ({ title, desc, ...props }) => {
  return (
    <svg
      id={id}
      {...props}
      width='20px'
      height='20px'
      viewBox='0 0 20 20'
      version='1.1'
      style={{ 'enable-background': 'new 0 0 20 20;' }}
    >
      <title id={`${id}_Title`}>{title}</title>
      <desc id={`${id}_Desc`}>{desc}</desc>
      <g>
        <path d='M17.6,9.1H5.4L11,3.5L9.6,2.1l-8,8l8,8l1.4-1.4l-5.6-5.6h12.2V9.1z' />
      </g>
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Icon;
