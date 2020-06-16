import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `cloudy${shortid.generate()}`;
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
      <path d='M15.2 17H7c-1.2 0-2.1-.9-2.1-2.1 0-.8.5-1.6 1.2-1.9.1 0 .3-.1.3-.4 0-2.1 2-3.8 4.5-3.8s4.5 1.7 4.5 3.8c0 .1.1.2.1.3 1 .1 1.8 1 1.8 2.1s-1 2-2.1 2zm-4.3-7.8c-2.2 0-4 1.5-4 3.3 0 .5-.4.8-.6.9-.5.3-.9.8-.9 1.4 0 .9.7 1.6 1.6 1.6h8.1c.9 0 1.6-.7 1.6-1.6 0-.8-.6-1.5-1.4-1.6-.3 0-.5-.5-.5-.7.1-1.8-1.7-3.3-3.9-3.3z' />
      <defs>
        <path id='prefix__a' d='M20 20h-1.8L16 10.8l-10.3-.3-1 9.5H0V0h20z' />
      </defs>
      <clipPath id='prefix__b'>
        <use xlinkHref='#prefix__a' overflow='visible' />
      </clipPath>
      <path
        d='M3.1 14C1.8 14 .8 12.7.8 11.2c0-1.1.5-2.1 1.3-2.5.1 0 .4-.2.4-.7 0-2.9 2.3-5.2 5-5.2 2.2 0 4.1 1.5 4.8 3.8 0 .1.4.3.9.3 1.3 0 2.5.7 3.1 1.8.1.1.3.3.8.3 1.4 0 2.5 1.1 2.5 2.5s-1.1 2.6-2.5 2.6h-14zM7.5 3.3C5 3.3 2.9 5.4 2.9 8c0 .9-.6 1.1-.7 1.1-.6.4-1 1.2-1 2.1 0 1.3.8 2.3 1.8 2.3h14c1.1 0 2-1 2-2.1s-.9-2-2-2c-.6 0-1-.2-1.2-.5-.5-.9-1.6-1.5-2.7-1.5-.6 0-1.2-.3-1.3-.7-.6-2.1-2.4-3.4-4.3-3.4z'
        clipPath='url(#prefix__b)'
      />
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Icon;
