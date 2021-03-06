import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `sunset${shortid.generate()}`;
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
        d='M10.5,16.7h-1v-2.2h1V16.7z M14.7,14.5l-1.3-1.3l0.7-0.7l1.3,1.3L14.7,14.5z M5.3,14.5l-0.7-0.7l1.3-1.3
    l0.7,0.7L5.3,14.5z M10.3,12.5c-1.9,0-3.1-0.9-3.1-2.3V9.7h1v0.5c0,1.2,1.5,1.3,2.1,1.3s2.1-0.1,2.1-1.3V9.7h1v0.5
    C13.4,11.6,12.2,12.5,10.3,12.5z M17.5,9.5h-2.1v-1h2.1V9.5z M4.6,9.5H2.5v-1h2.1V9.5z M13.4,8.3h-1V7.8c0-0.7-0.3-1.3-2.2-1.3
    c-1.9,0-2.1,0.6-2.1,1.3v0.5h-1V7.8c0-1.5,1-2.3,3.1-2.3c2.1,0,3.1,0.8,3.1,2.3V8.3z M14.1,5.5l-0.7-0.7l1.3-1.3l0.7,0.7L14.1,5.5z
    M5.9,5.5L4.7,4.2l0.7-0.7l1.3,1.3L5.9,5.5z M10.5,3.5h-1V1.3h1V3.5z'
      />
      <path d='M10,18.4l1.3-2.6H8.7L10,18.4z' />
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Icon;
