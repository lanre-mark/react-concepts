import React from 'react';
import PropTypes from 'prop-types';
import './css/weather-icons.css';
import translateToCode from './utils';

/**
 * @param {string} iconId Id based on weather condition
 * @param {string} flip
 * @param {string} fixedWidth
 * @param {string} rotate
 * @param {object} timing Format { sunrise: [weatherResponse|result].data.sys.sunrise, sunset: [weatherResponse|result].data.sys.sunset }
 * @module WeatherIcon
 * @type {ReactClass}
 **/

const WeatherIcon = (props) => {
  var icon;
  var { timing, className, rotate, fixedWidth, iconId, flip, ...other } = props;
  icon = translateToCode(iconId, timing);
  icon += flip ? ' wi-flip-' + flip : '';
  icon += rotate ? ' wi-rotate-' + rotate : '';
  icon += fixedWidth ? ' wi-fw' : '';
  icon += className ? ' ' + className : '';
  return (
    <i
      {...other}
      className={icon}
      style={{
        filter:
          'invert(72%) sepia(79%) saturate(447%) hue-rotate(29deg) brightness(94%) contrast(87%)',
        WebkitFilter:
          'invert(72%) sepia(79%) saturate(447%) hue-rotate(29deg) brightness(94%) contrast(87%)',
      }}
    />
  );
};

WeatherIcon.propTypes = {
  className: PropTypes.string,
  iconId: PropTypes.string.isRequired,
  flip: PropTypes.oneOf(['horizontal', 'vertical']),
  fixedWidth: PropTypes.bool,
  rotate: PropTypes.oneOf(['0', '90', '180', '270']),
};
export default WeatherIcon;
