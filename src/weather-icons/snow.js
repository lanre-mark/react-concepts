import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `snow${shortid.generate()}`;
const Icon = ({ title, desc, opacity, ...props }) => {
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
        <path
          d='M5.3,16.2c-0.2,0-0.4-0.1-0.5-0.3c-0.2-0.3-0.1-0.6,0.2-0.8l11-6.6c0.3-0.2,0.6-0.1,0.8,0.2c0.2,0.3,0.1,0.6-0.2,0.8
		l-11,6.6C5.5,16.2,5.4,16.2,5.3,16.2z'
        />
        <path
          d='M7.2,17.5C7.2,17.5,7.2,17.5,7.2,17.5c-0.4,0-0.6-0.3-0.5-0.6l0.2-2.2l-2-0.7c-0.3-0.1-0.4-0.4-0.3-0.7
		C4.6,13,4.9,12.9,5.2,13L8,14l-0.3,3C7.7,17.3,7.5,17.5,7.2,17.5z'
        />
        <path
          d='M16.7,11.8c-0.1,0-0.1,0-0.2,0l-2.8-1.1l0.3-2.9c0-0.3,0.3-0.5,0.6-0.5c0.3,0,0.5,0.3,0.5,0.6l-0.2,2.1l2.1,0.8
		c0.3,0.1,0.4,0.4,0.3,0.7C17.1,11.7,16.9,11.8,16.7,11.8z'
        />
        <g>
          <path
            d='M11.2,19.1c-0.1,0.2-0.3,0.3-0.5,0.3c-0.3,0-0.5-0.2-0.5-0.6L10.3,6c0-0.3,0.2-0.5,0.6-0.5c0.3,0,0.5,0.2,0.5,0.6
			l-0.1,12.8C11.3,18.9,11.3,19,11.2,19.1z'
          />
          <path
            d='M13.4,18.2C13.3,18.2,13.3,18.2,13.4,18.2c-0.2,0.3-0.6,0.3-0.8,0.2L10.8,17l-1.7,1.4c-0.2,0.2-0.6,0.2-0.8-0.1
			c-0.2-0.2-0.2-0.6,0.1-0.8l2.3-1.9l2.4,1.8C13.4,17.6,13.5,17.9,13.4,18.2z'
          />
          <path
            d='M13.4,7.1c0,0.1-0.1,0.1-0.1,0.2l-2.4,1.8L8.5,7.3C8.2,7.1,8.2,6.8,8.4,6.5c0.2-0.2,0.5-0.3,0.8-0.1l1.7,1.3l1.8-1.3
			c0.2-0.2,0.6-0.1,0.8,0.1C13.5,6.7,13.5,6.9,13.4,7.1z'
          />
          <path
            d='M16.8,15.6c0.1,0.2,0.1,0.4,0,0.5c-0.2,0.3-0.5,0.3-0.8,0.2L5.1,9.5C4.8,9.3,4.8,9,4.9,8.7c0.2-0.3,0.5-0.3,0.8-0.2
			l10.9,6.8C16.6,15.4,16.7,15.5,16.8,15.6z'
          />
          <path
            d='M17.1,13.3C17.1,13.3,17.1,13.3,17.1,13.3c0.1,0.3,0,0.7-0.3,0.8l-2.1,0.8L15,17c0,0.3-0.2,0.6-0.5,0.6
			c-0.3,0-0.6-0.2-0.6-0.5l-0.4-3l2.9-1.1C16.7,12.9,17,13,17.1,13.3z'
          />
          <path
            d='M7.7,7.4c0,0.1,0.1,0.1,0.1,0.2l0.3,3l-2.8,1c-0.3,0.1-0.6,0-0.7-0.3c-0.1-0.3,0-0.6,0.3-0.7l2-0.7L6.7,7.7
			c0-0.3,0.2-0.6,0.5-0.6C7.4,7.1,7.6,7.2,7.7,7.4z'
          />
        </g>
      </g>
      <g opacity={0.6 || opacity}>
        <path
          d='M15.1,4.7c-0.1,0-0.1,0-0.2-0.1c-0.1-0.1,0-0.2,0.1-0.3L19,1.8c0.1-0.1,0.2,0,0.3,0.1c0.1,0.1,0,0.2-0.1,0.3l-4.1,2.5
		C15.1,4.7,15.1,4.7,15.1,4.7z'
        />
        <path
          d='M15.7,5.2C15.7,5.2,15.7,5.2,15.7,5.2c-0.1,0-0.2-0.1-0.2-0.2l0.1-0.8l-0.8-0.3c-0.1,0-0.2-0.2-0.1-0.3
		c0-0.1,0.2-0.2,0.3-0.1l1.1,0.4L16,5C15.9,5.1,15.9,5.2,15.7,5.2z'
        />
        <path
          d='M19.3,3C19.2,3,19.2,3,19.3,3l-1.1-0.4l0.1-1.1c0-0.1,0.1-0.2,0.2-0.2c0.1,0,0.2,0.1,0.2,0.2l-0.1,0.8l0.8,0.3
		c0.1,0,0.2,0.2,0.1,0.3C19.4,3,19.3,3,19.3,3z'
        />
        <g>
          <path
            d='M17.2,5.7c0,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.2-0.1-0.2-0.2l0-4.8c0-0.1,0.1-0.2,0.2-0.2c0.1,0,0.2,0.1,0.2,0.2l0,4.8
			C17.3,5.7,17.3,5.7,17.2,5.7z'
          />
          <path
            d='M18,5.4C18,5.4,18,5.4,18,5.4c-0.1,0.1-0.2,0.1-0.3,0.1L17.1,5l-0.6,0.5c-0.1,0.1-0.2,0.1-0.3,0c-0.1-0.1-0.1-0.2,0-0.3
			l0.9-0.7L18,5.1C18.1,5.2,18.1,5.3,18,5.4z'
          />
          <path
            d='M18,1.3C18,1.3,18,1.3,18,1.3l-1,0.7l-0.9-0.7c-0.1-0.1-0.1-0.2,0-0.3C16.3,1,16.4,1,16.5,1l0.6,0.5L17.8,1
			C17.8,0.9,18,1,18,1C18.1,1.1,18.1,1.2,18,1.3z'
          />
          <path
            d='M19.3,4.4c0,0.1,0,0.1,0,0.2c-0.1,0.1-0.2,0.1-0.3,0.1l-4-2.5c-0.1-0.1-0.1-0.2-0.1-0.3c0.1-0.1,0.2-0.1,0.3-0.1L19.3,4.4
			C19.3,4.4,19.3,4.4,19.3,4.4z'
          />
          <path
            d='M19.4,3.6C19.4,3.6,19.4,3.6,19.4,3.6c0,0.1,0,0.2-0.1,0.3l-0.8,0.3L18.7,5c0,0.1-0.1,0.2-0.2,0.2c-0.1,0-0.2-0.1-0.2-0.2
			l-0.1-1.1l1.1-0.4C19.3,3.4,19.4,3.5,19.4,3.6z'
          />
          <path
            d='M15.9,1.4C15.9,1.4,16,1.5,15.9,1.4l0.1,1.2L15,3c-0.1,0-0.2,0-0.3-0.1c0-0.1,0-0.2,0.1-0.3l0.7-0.3l-0.1-0.8
			c0-0.1,0.1-0.2,0.2-0.2C15.8,1.3,15.9,1.3,15.9,1.4z'
          />
        </g>
      </g>
      <g opacity={0.4 || opacity}>
        <path
          d='M0.7,7.1c-0.1,0-0.1,0-0.1-0.1c0-0.1,0-0.2,0.1-0.2l3.2-2c0.1,0,0.2,0,0.2,0.1c0,0.1,0,0.2-0.1,0.2L0.7,7.1
		C0.7,7.1,0.7,7.1,0.7,7.1z'
        />
        <path
          d='M1.2,7.5C1.2,7.5,1.2,7.5,1.2,7.5C1.1,7.5,1,7.4,1.1,7.3l0.1-0.6L0.5,6.5c-0.1,0-0.1-0.1-0.1-0.2c0-0.1,0.1-0.1,0.2-0.1
		l0.8,0.3L1.4,7.4C1.4,7.4,1.3,7.5,1.2,7.5z'
        />
        <path
          d='M4,5.8C4,5.8,4,5.8,4,5.8L3.1,5.5l0.1-0.9c0-0.1,0.1-0.2,0.2-0.1c0.1,0,0.2,0.1,0.1,0.2L3.5,5.3l0.6,0.2
		c0.1,0,0.1,0.1,0.1,0.2C4.1,5.8,4.1,5.8,4,5.8z'
        />
        <g>
          <path
            d='M2.4,8C2.4,8,2.3,8,2.3,8C2.2,8,2.1,8,2.1,7.9l0-3.8c0-0.1,0.1-0.2,0.2-0.2c0.1,0,0.2,0.1,0.2,0.2L2.4,8
			C2.4,7.9,2.4,7.9,2.4,8z'
          />
          <path
            d='M3,7.7C3,7.7,3,7.7,3,7.7C3,7.8,2.9,7.8,2.8,7.7L2.3,7.3L1.8,7.7c-0.1,0.1-0.2,0-0.2,0c-0.1-0.1,0-0.2,0-0.2l0.7-0.6
			L3,7.5C3.1,7.5,3.1,7.6,3,7.7z'
          />
          <path
            d='M3,4.4C3,4.4,3,4.5,3,4.4L2.3,5L1.6,4.5c-0.1-0.1-0.1-0.2,0-0.2c0.1-0.1,0.2-0.1,0.2,0l0.5,0.4l0.5-0.4
			c0.1-0.1,0.2,0,0.2,0C3.1,4.3,3.1,4.4,3,4.4z'
          />
          <path
            d='M4,6.9c0,0,0,0.1,0,0.2c0,0.1-0.1,0.1-0.2,0.1l-3.2-2C0.5,5.1,0.5,5,0.5,4.9c0-0.1,0.1-0.1,0.2-0.1L4,6.9
			C4,6.9,4,6.9,4,6.9z'
          />
          <path
            d='M4.1,6.3C4.1,6.3,4.1,6.3,4.1,6.3c0,0.1,0,0.2-0.1,0.2L3.4,6.7l0.1,0.6c0,0.1-0.1,0.2-0.1,0.2c-0.1,0-0.2-0.1-0.2-0.1
			L3.1,6.5l0.8-0.3C4,6.1,4.1,6.2,4.1,6.3z'
          />
          <path
            d='M1.4,4.5C1.4,4.5,1.4,4.6,1.4,4.5l0.1,1L0.6,5.8c-0.1,0-0.2,0-0.2-0.1c0-0.1,0-0.2,0.1-0.2l0.6-0.2L1.1,4.6
			c0-0.1,0.1-0.2,0.1-0.2C1.3,4.4,1.3,4.5,1.4,4.5z'
          />
        </g>
      </g>
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  opacity: PropTypes.number,
};

export default Icon;