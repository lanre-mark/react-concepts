import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `pressure${shortid.generate()}`;
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
        <circle cx='15.6' cy='15.6' r='1.4' />
        <circle cx='11.7' cy='15.6' r='1.4' />
        <circle cx='8' cy='15.6' r='1.4' />
        <circle cx='4.4' cy='15.6' r='1.4' />
        <circle cx='15.4' cy='11.5' r='1.2' />
        <circle cx='11.8' cy='11.5' r='1.2' />
        <circle cx='8.2' cy='11.5' r='1.2' />
        <circle cx='4.6' cy='11.5' r='1.2' />
        <circle cx='15.4' cy='7.6' r='0.9' />
        <circle cx='11.8' cy='7.6' r='0.9' />
        <circle cx='8.2' cy='7.6' r='0.9' />
        <circle cx='4.6' cy='7.6' r='0.9' />
        <circle cx='15.6' cy='3.8' r='0.8' />
        <circle cx='11.7' cy='3.8' r='0.8' />
        <circle cx='8' cy='3.8' r='0.8' />
        <circle cx='4.4' cy='3.8' r='0.8' />
      </g>
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Icon;
