import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `thunderstorm-color${shortid.generate()}`;
const Icon = ({
  title,
  desc,
  fillColor1,
  fillColor2,
  fillColor3,
  ...props
}) => {
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
        d='M7.1 1.3c-.7.3-1.3.9-1.8 1.4s-.9 1.1-1 1.7c-.2.6-.1 1.5-.4 1.7-.3.2-1.1.9-1.2 1-.2.2-.7 1.7-.5 2.4s1.1 1.5 1.6 1.6H15.4c.4 0 1.1-.2 1.6-.7.5-.5.9-1.9.8-2.3-.1-.4-.4-.9-.9-1.4-.6-.5-1.1-.7-1.3-.6-.1 0-.3-.7-.4-1.1-.1-.4-.3-1.6-.9-2.2S11.4.7 9.9.8s-2.8.5-2.8.5z'
        fill={`${fillColor1 || '#FFFFFF'}`}
      />
      <path
        d='M15.3 11.4h-3.1c-.2 0-.3-.1-.3-.3s.1-.3.3-.3h3.1c1.2 0 2.2-1 2.2-2.2 0-1.1-.8-2-1.9-2.2-.4 0-.6-.6-.6-1C15 2.9 12.6.9 9.7.9s-5.3 2-5.3 4.5c0 .9-.8 1.1-.8 1.1-.8.5-1.3 1.3-1.3 2.2 0 1.2 1 2.2 2.2 2.2h2.2c.2-.1.3.1.3.2s-.1.3-.3.3H4.5c-1.5 0-2.8-1.2-2.8-2.8 0-1.1.6-2 1.6-2.5.1 0 .4-.2.4-.6C3.7 2.7 6.4.4 9.6.4s5.9 2.3 5.9 5.1c0 .2.1.4.1.4C17 6.1 18 7.3 18 8.7c0 1.5-1.2 2.7-2.7 2.7z'
        fill={`${fillColor2 || '#7A7A7A'}`}
      />
      <linearGradient
        id='prefix__a'
        gradientUnits='userSpaceOnUse'
        x1={9.881}
        y1={9.522}
        x2={9.881}
        y2={19.814}
      >
        <stop offset={0} stopColor='#ec6f32' />
        <stop offset={0.063} stopColor='#ec7935' />
        <stop offset={0.24} stopColor='#ee8e3b' />
        <stop offset={0.436} stopColor='#ee9d40' />
        <stop offset={0.665} stopColor='#efa642' />
        <stop offset={1} stopColor='#efa943' />
      </linearGradient>
      <path
        fill={`${fillColor3 || 'url(#prefix__a)'}`}
        d='M8.3 9.5l-.7 4.7h1.6l-.8 5.6 3.8-7.6h-1.7l.9-2.7z'
      />
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  fillColor1: PropTypes.string,
  fillColor2: PropTypes.string,
  fillColor3: PropTypes.string,
};

export default Icon;
