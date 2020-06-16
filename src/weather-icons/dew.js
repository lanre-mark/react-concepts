import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const id = `dew${shortid.generate()}`;
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
        <g>
          <g>
            <path
              d='M13.5,9.8l-7,0c-0.5,1.3-0.8,2.5-0.8,3.7c0,1.2,0.5,2.3,1.3,3.1c0.8,0.8,1.9,1.3,3.1,1.3s2.3-0.5,3.1-1.3
				c0.8-0.8,1.3-1.9,1.3-3.1C14.3,12.4,14,11.2,13.5,9.8z'
            />
          </g>
        </g>
        <g>
          <g>
            <path
              d='M12.2,5.9C11.1,3.8,10,2.1,10,2.1S8.9,3.7,7.8,5.7C7.5,6.4,7.4,6.9,7.1,7.7l5.8,0C12.6,7,12.5,6.5,12.2,5.9z
				'
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Icon;
