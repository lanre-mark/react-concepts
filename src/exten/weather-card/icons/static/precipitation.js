import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `precipitation${shortid.generate()}`;
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
        fill={`${fillColor}`}
        d='M10.8,11.3c0,1.9-1.6,3.5-3.5,3.5s-3.5-1.6-3.5-3.5c0-3.7,3.5-8.6,3.5-8.6S10.8,8,10.8,11.3z'
      />
      <path
        fill={`${fillColor}`}
        d='M16.2,11.8c0,1.1-0.9,2-2,2s-2-0.9-2-2c0-2.1,2-4.9,2-4.9S16.2,9.9,16.2,11.8z'
      />
      <path
        fill={`${fillColor}`}
        d='M12.9,16.6c0,0.8-0.6,1.4-1.4,1.4S10,17.4,10,16.6c0-1.5,1.4-3.5,1.4-3.5S12.9,15.3,12.9,16.6z'
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
