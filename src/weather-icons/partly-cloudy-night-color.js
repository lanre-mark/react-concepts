import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `partly-cloudy-night-color${shortid.generate()}`;
const Icon = ({
  title,
  desc,
  fillColor1,
  fillColor2,
  fillColor3,
  fillColor4,
  strokeColor,
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
      <g id='Layer_1'>
        <path
          fill={`${fillColor1 || '#FFFFFF'}`}
          d='M7.2,9.1c-0.9,0-2.8,0.4-3.4,1.4S3,12.7,2.9,12.9s-0.5,0.4-0.7,0.6c-0.2,0.2-0.9,1.2-0.7,2.1
		c0.2,0.8,1.3,1.3,2,1.3s7.2,0,7.9,0s1.5-0.7,1.7-1.1c0.1-0.4,0.2-1.5-0.2-1.9c-0.4-0.4-0.7-0.6-1-0.8s-0.4-0.5-0.5-0.8
		c0-0.3-0.4-1.6-1.1-2.1C9.5,9.7,7.2,9.1,7.2,9.1z'
        />
      </g>
      <g id='Layer_2'>
        <circle fill={`${fillColor2 || '#424242'}`} cx='1.9' cy='4.3' r='0.4' />
        <circle fill={`${fillColor2 || '#424242'}`} cx='8.6' cy='1.1' r='0.4' />
        <circle
          fill={`${fillColor2 || '#424242'}`}
          cx='2.2'
          cy='18.8'
          r='0.3'
        />
        <circle
          fill={`${fillColor2 || '#424242'}`}
          cx='18.5'
          cy='14.6'
          r='0.3'
        />
        <line
          fill='none'
          stroke={`${strokeColor || '#F7B148'}`}
          strokeWidth={2}
          strokeLinecap='round'
          strokeMiterlimit={10}
          x1='5.8'
          y1='12.3'
          x2='7.3'
          y2='11.7'
        />
        <g>
          <path
            fill={`${fillColor1 || '#FFFFFF'}`}
            d='M9.1,16.8h2.3c1,0,1.9-0.8,1.9-1.9c0-0.9-0.7-1.7-1.6-1.8c-0.1,0-0.3-0.3-0.3-0.5c0-2-1.9-3.6-4.2-3.6
			S3,10.7,3,12.7c0,0.5-0.4,0.7-0.4,0.7c-0.6,0.3-1.1,0.9-1.1,1.7c0,1,0.8,1.9,1.9,1.9H5H9.1z'
          />
          <path
            fill={`${fillColor3 || '#7A7A7A'}`}
            d='M11.4,17.1H3.3c-1.2,0-2.1-0.9-2.1-2.1c0-0.8,0.5-1.6,1.2-1.9c0.1,0,0.3-0.1,0.3-0.4c0-2.1,2-3.8,4.5-3.8
			s4.5,1.7,4.5,3.8c0,0.1,0.1,0.2,0.1,0.3c1,0.1,1.8,1,1.8,2.1C13.5,16.1,12.6,17.1,11.4,17.1z M7.2,9.3c-2.2,0-4,1.5-4,3.3
			c0,0.5-0.4,0.8-0.6,0.9c-0.5,0.3-0.9,0.8-0.9,1.4c0,0.9,0.7,1.6,1.6,1.6h8.1c0.9,0,1.6-0.7,1.6-1.6c0-0.8-0.6-1.5-1.4-1.6
			c-0.3,0-0.5-0.5-0.5-0.7C11.2,10.8,9.4,9.3,7.2,9.3z'
          />
        </g>
        <path
          fill={`${fillColor4 || '#28ABEF'}`}
          d='M19.2,10.4c-0.8,0.9-1.9,1.5-3.2,1.5c-2.4,0-4.3-1.9-4.3-4.3c0-2.1,1.6-3.9,3.6-4.2c0,0-2,2.5-0.5,5
		C16.4,11,19.2,10.4,19.2,10.4z'
        />
      </g>
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  fillColor1: PropTypes.string,
  fillColor2: PropTypes.string,
  fillColor3: PropTypes.string,
  fillColor4: PropTypes.string,
  strokeColor: PropTypes.string,
};

export default Icon;
