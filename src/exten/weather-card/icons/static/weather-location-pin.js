import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { WeatherCardLocationIcon } from '../../icon-component';

const id = `lcation-pin-${shortid.generate()}`;
const Icon = ({ title, desc, fillColor, ...props }) => {
  return (
    <WeatherCardLocationIcon
      id={id}
      {...props}
      width='24px'
      height='24px'
      viewBox='0 0 24 24'
      version='1.1'
      style={{ enableBackground: 'new 0 0 24 24' }}
    >
      <title id={`${id}_Title`}>{title}</title>
      <desc id={`${id}_Desc`}>{desc}</desc>
      <path fill='none' d='M0,0h24v24H0V0z' />
      <path
        fill={`${fillColor}`}
        d='M12,2C8.13,2,5,5.13,5,9c0,4.1714,4.4192,9.921,6.235,12.1075c0.3988,0.4802,1.1312,0.4802,1.53,0
	C14.5808,18.921,19,13.1714,19,9C19,5.13,15.87,2,12,2z M12,18.8716C9.4585,15.6348,7,11.5957,7,9c0-2.7568,2.2432-5,5-5
	s5,2.2432,5,5C17,11.5957,14.5415,15.6348,12,18.8716z M12,11c-1.104,0-2-0.896-2-2s0.896-2,2-2s2,0.896,2,2S13.104,11,12,11z'
      />
    </WeatherCardLocationIcon>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  fillColor: PropTypes.string,
};

Icon.defaultProps = {
  fillColor: '#FFFFFF',
};

export default Icon;
