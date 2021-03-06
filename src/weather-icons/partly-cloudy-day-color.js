import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `partly-cloudy-day-color${shortid.generate()}`;
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
      <g id='Layer_1'>
        <path
          fill={`${fillColor1 || '#FFFFFF'}`}
          d='M5.8,10c-1.3,0-2.3,0.5-2.7,0.9s-1,1.1-1.1,1.6s-0.3,1.1-0.3,1.3s-0.6,0.4-0.8,0.5c-0.1,0.1-0.8,1.3-0.5,1.9
		c0.2,0.7,1,1.1,1.6,1.1s7.1,0,7.8,0s1.5-0.9,1.6-1.2c0.1-0.4,0-1.5-0.4-1.8s-1-0.3-1.1-0.5c-0.1-0.2-0.1-1.5-0.5-1.9
		c-0.4-0.4-1.1-1.5-1.9-1.7C6.6,10,5.8,10,5.8,10z'
        />
      </g>
      <g id='Layer_2'>
        <g>
          <circle
            fill={`${fillColor2 || '#F7B148'}`}
            cx='12.9'
            cy='8.6'
            r='2.5'
          />
          <path
            fill={`${fillColor2 || '#F7B148'}`}
            d='M12.9,15.4c-0.2,0-0.3-0.1-0.3-0.3v-3c0-0.2,0.1-0.3,0.3-0.3c0.2,0,0.3,0.1,0.3,0.3v3
			C13.2,15.2,13,15.4,12.9,15.4z'
          />
          <path
            fill={`${fillColor2 || '#F7B148'}`}
            d='M12.9,5.5c-0.2,0-0.3-0.1-0.3-0.3v-3c0-0.2,0.1-0.3,0.3-0.3c0.2,0,0.3,0.1,0.3,0.3v3
			C13.2,5.4,13,5.5,12.9,5.5z'
          />
          <path
            fill={`${fillColor2 || '#F7B148'}`}
            d='M19.3,8.9h-3c-0.2,0-0.3-0.1-0.3-0.3c0-0.2,0.1-0.3,0.3-0.3h3c0.2,0,0.3,0.1,0.3,0.3
			C19.6,8.8,19.5,8.9,19.3,8.9z'
          />
          <path
            fill={`${fillColor2 || '#F7B148'}`}
            d='M9.4,8.9h-3c-0.2,0-0.3-0.1-0.3-0.3c0-0.2,0.1-0.3,0.3-0.3h3c0.2,0,0.3,0.1,0.3,0.3C9.8,8.8,9.6,8.9,9.4,8.9z
			'
          />
          <path
            fill={`${fillColor2 || '#F7B148'}`}
            d='M15.3,6.5c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4l2.1-2.1c0.1-0.1,0.3-0.1,0.4,0c0.1,0.1,0.1,0.3,0,0.4
			l-2.1,2.1C15.5,6.5,15.4,6.5,15.3,6.5z'
          />
          <path
            fill={`${fillColor2 || '#F7B148'}`}
            d='M9.5,12.3c-0.1,0-0.2,0-0.2-0.1c-0.1-0.1-0.1-0.3,0-0.4l0.9-0.9c0.1-0.1,0.3-0.1,0.4,0c0.1,0.1,0.1,0.3,0,0.4
			l-0.9,0.9C9.7,12.2,9.6,12.3,9.5,12.3z'
          />
          <path
            fill={`${fillColor2 || '#F7B148'}`}
            d='M10.4,6.5c-0.1,0-0.2,0-0.2-0.1L8.1,4.3C8,4.1,8,4,8.1,3.8c0.1-0.1,0.3-0.1,0.4,0L10.7,6
			c0.1,0.1,0.1,0.3,0,0.4C10.6,6.5,10.5,6.5,10.4,6.5z'
          />
          <path
            fill={`${fillColor2 || '#F7B148'}`}
            d='M17.4,13.5c-0.1,0-0.2,0-0.2-0.1l-2.1-2.1c-0.1-0.1-0.1-0.3,0-0.4c0.1-0.1,0.3-0.1,0.4,0l2.1,2.1
			c0.1,0.1,0.1,0.3,0,0.4C17.6,13.4,17.5,13.5,17.4,13.5z'
          />
          <path
            fill={`${fillColor2 || '#F7B148'}`}
            d='M14.6,13.1c-0.1,0-0.2-0.1-0.3-0.2l-0.4-1c-0.1-0.2,0-0.3,0.2-0.4c0.2-0.1,0.3,0,0.4,0.2l0.4,1
			c0.1,0.2,0,0.3-0.2,0.4C14.7,13.1,14.7,13.1,14.6,13.1z'
          />
          <path
            fill={`${fillColor2 || '#F7B148'}`}
            d='M11.5,5.8c-0.1,0-0.2-0.1-0.3-0.2l-0.4-1c-0.1-0.2,0-0.3,0.2-0.4c0.2-0.1,0.3,0,0.4,0.2l0.4,1
			c0.1,0.2,0,0.3-0.2,0.4C11.6,5.8,11.6,5.8,11.5,5.8z'
          />
          <path
            fill={`${fillColor2 || '#F7B148'}`}
            d='M16,7.6c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.2,0-0.3,0.2-0.4l1-0.4c0.2-0.1,0.3,0,0.4,0.2c0.1,0.2,0,0.3-0.2,0.4
			l-1,0.4C16.1,7.6,16.1,7.6,16,7.6z'
          />
          <path
            fill={`${fillColor2 || '#F7B148'}`}
            d='M8.7,10.7c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.2,0-0.3,0.2-0.4l1-0.4c0.2-0.1,0.3,0,0.4,0.2c0.1,0.2,0,0.3-0.2,0.4
			l-1,0.4C8.8,10.7,8.7,10.7,8.7,10.7z'
          />
          <path
            fill={`${fillColor2 || '#F7B148'}`}
            d='M14.2,5.7c0,0-0.1,0-0.1,0c-0.2-0.1-0.2-0.2-0.2-0.4l0.4-1c0.1-0.2,0.2-0.2,0.4-0.2c0.2,0.1,0.2,0.2,0.2,0.4
			l-0.4,1C14.4,5.7,14.3,5.7,14.2,5.7z'
          />
          <path
            fill={`${fillColor2 || '#F7B148'}`}
            d='M11.2,13.1c0,0-0.1,0-0.1,0c-0.2-0.1-0.2-0.2-0.2-0.4l0.4-1c0.1-0.2,0.2-0.2,0.4-0.2c0.2,0.1,0.2,0.2,0.2,0.4
			l-0.4,1C11.4,13,11.3,13.1,11.2,13.1z'
          />
          <path
            fill={`${fillColor2 || '#F7B148'}`}
            d='M9.7,7.6c0,0-0.1,0-0.1,0l-1-0.4C8.4,7.1,8.3,6.9,8.4,6.8c0.1-0.2,0.2-0.2,0.4-0.2l1,0.4
			C10,7.1,10,7.3,10,7.4C9.9,7.6,9.8,7.6,9.7,7.6z'
          />
          <path
            fill={`${fillColor2 || '#F7B148'}`}
            d='M17,10.6c0,0-0.1,0-0.1,0l-1-0.4c-0.2-0.1-0.2-0.2-0.2-0.4c0.1-0.2,0.2-0.2,0.4-0.2l1,0.4
			c0.2,0.1,0.2,0.2,0.2,0.4C17.3,10.6,17.2,10.6,17,10.6z'
          />
        </g>
        <path
          fill={`${fillColor3 || '#7A7A7A'}`}
          d='M9.7,17.6H2.1c-1.1,0-2-0.9-2-2c0-0.8,0.4-1.4,1.1-1.8c0.1,0,0.3-0.1,0.3-0.4c0-2,1.9-3.6,4.2-3.6
		s4.2,1.6,4.2,3.6c0,0.1,0.1,0.3,0.1,0.3c0.9,0.1,1.6,0.9,1.6,1.9C11.7,16.7,10.8,17.6,9.7,17.6z M5.7,10.2c-2.1,0-3.8,1.4-3.8,3.2
		c0,0.6-0.5,0.8-0.6,0.8c-0.5,0.2-0.9,0.8-0.9,1.4c0,0.9,0.7,1.5,1.5,1.5h7.7c0.9,0,1.5-0.7,1.5-1.5c0-0.8-0.6-1.4-1.3-1.5
		c-0.3,0-0.4-0.4-0.4-0.7C9.5,11.7,7.8,10.2,5.7,10.2z'
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
};

export default Icon;
