import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `sunrise${shortid.generate()}`;
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
        d='M10.5,19h-1v-2.2h1V19z M14.7,16.8l-1.3-1.3l0.7-0.7l1.3,1.3L14.7,16.8z M5.3,16.8l-0.7-0.7l1.3-1.3l0.7,0.7
    L5.3,16.8z M9.7,14.8c-2.1,0-3.1-0.8-3.1-2.3V12h1v0.5c0,0.7,0.3,1.3,2.2,1.3c1.5,0,2.1-0.4,2.1-1.3V12h1v0.5
    C12.8,14,11.8,14.8,9.7,14.8z M17.5,11.8h-2.1v-1h2.1V11.8z M4.6,11.8H2.5v-1h2.1V11.8z M12.8,10.6h-1v-0.5c0-1.2-1.5-1.3-2.1-1.3
    s-2.1,0.1-2.1,1.3v0.5h-1v-0.5c0-1.4,1.2-2.3,3.1-2.3s3.1,0.9,3.1,2.3V10.6z M14.1,7.8l-0.7-0.7l1.3-1.3l0.7,0.7L14.1,7.8z M5.9,7.8
    L4.7,6.5l0.7-0.7l1.3,1.3L5.9,7.8z M10.5,5.8h-1V3.6h1V5.8z'
      />
      <path d='M10,1.3l1.7,3.4H8.3L10,1.3z' />
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Icon;
