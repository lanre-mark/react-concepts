import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `cloudy-color${shortid.generate()}`;
const Icon = ({ title, desc, fillColor1, fillColor2, ...props }) => {
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
        d='M5.6 3.8c-.8.5-2.2 1.7-2.5 2.4S2.6 8 2.5 8.4c-.1.5.1.6-.6 1.2s-1.3 2.3-1 3 1.7 1.9 2 1.9h2.5s-.3 1 0 1.5c.3.4.7 1.5 1.5 1.5s8.7-.1 8.7-.1 1-.2 1.3-.8c.3-.6.3-1.3.3-1.5l-.3-.6s1.2-.3 1.7-.5.9-1 .8-1.9c0-.9-.6-1.9-1-2s-.7-.3-1.1-.3-.8-.1-1.1-.3c-.3-.3-1-1.3-1.5-1.4-.5-.1-1.4-.2-2-.5-.6-.2-.9-.9-1.2-1.4-.3-.5-1.7-2.5-3.1-2.5-1.3-.2-2.8.1-2.8.1z'
        fill={`${fillColor1 || '#FFFFFF'}`}
      />
      <path
        d='M15.2 17.6H7c-1.2 0-2.1-1-2.1-2.1 0-.8.5-1.6 1.2-1.9.1 0 .3-.1.3-.4 0-2.1 2-3.9 4.5-3.9s4.5 1.7 4.5 3.9c0 .1.1.2.1.3 1 .1 1.8 1 1.8 2.1 0 1-.9 2-2.1 2zm-4.3-7.9c-2.2 0-4 1.5-4 3.4 0 .6-.4.8-.6.9-.5.3-.9.8-.9 1.5 0 .9.7 1.6 1.6 1.6h8.2c.9 0 1.6-.7 1.6-1.6 0-.8-.6-1.5-1.4-1.6-.3 0-.5-.5-.5-.8 0-1.9-1.8-3.4-4-3.4z'
        fill={`${fillColor2 || '#7A7A7A'}`}
      />
      <defs>
        <path
          id='prefix__a'
          d='M20.1 20.6h-1.8L16 11.3l-10.4-.2-1 9.5H-.1V.4h20.2z'
        />
      </defs>
      <clipPath id='prefix__b'>
        <use xlinkHref='#prefix__a' overflow='visible' />
      </clipPath>
      <path
        d='M3 14.6c-1.3 0-2.4-1.3-2.4-2.9 0-1.1.5-2.1 1.3-2.6.1 0 .4-.1.4-.6 0-2.9 2.3-5.3 5.1-5.3 2.2 0 4.2 1.5 4.9 3.8 0 .1.5.3.9.3 1.3 0 2.5.7 3.1 1.8.1.1.3.3.8.3 1.4 0 2.5 1.1 2.5 2.5s-1.2 2.6-2.5 2.6H3zM7.4 3.7c-2.5 0-4.6 2.1-4.6 4.8 0 .9-.6 1.1-.7 1.2-.6.4-1.1 1.2-1.1 2.1 0 1.3.8 2.3 1.9 2.3H17c1.1 0 2-1 2-2.1s-.9-2-2-2c-.6 0-1-.2-1.2-.5-.6-1-1.6-1.6-2.7-1.6-.6 0-1.3-.3-1.4-.7-.5-2.1-2.3-3.5-4.3-3.5z'
        clipPath='url(#prefix__b)'
        fill={`${fillColor2 || '#7A7A7A'}`}
      />
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  fillColor1: PropTypes.string,
  fillColor2: PropTypes.string,
};

export default Icon;
