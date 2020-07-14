import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styled from 'styled-components';
import { AnimatedIcon } from '../../icon-component';

const Moon = styled(AnimatedIcon)`
  svg {
    shape-rendering: geometricPrecision;
  }

  g,
  path,
  circle,
  rect {
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;
    -o-transform-origin: 50% 50%;
    transform-origin: 50% 50%;

    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    animation-timing-function: linear;
    -o-animation-timing-function: linear;

    -o-animation-direction: normal;
    animation-direction: normal;
    -webkit-animation-direction: normal;
    -moz-animation-direction: normal;

    -moz-animation-iteration-count: infinite;
    -webkit-animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    animation-iteration-count: infinite;

    -moz-animation-duration: 12s;
    -webkit-animation-duration: 12s;
    -o-animation-duration: 12s;
    animation-duration: 12s;
  }

  .climacon_componentWrap-moon {
    -webkit-animation-name: wobble;
    -moz-animation-name: wobble;
    -o-animation-name: wobble;
    animation-name: wobble;
  }

  @-webkit-keyframes wobble {
    0% {
      -webkit-transform: rotate(0);
    }
    25% {
      -webkit-transform: rotate(-15deg);
    }
    50% {
      -webkit-transform: rotate(0);
    }
    75% {
      -webkit-transform: rotate(15deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
    }
  }

  @-moz-keyframes wobble {
    0% {
      -moz-transform: rotate(0);
    }
    25% {
      -moz-transform: rotate(-15deg);
    }
    50% {
      -moz-transform: rotate(0);
    }
    75% {
      -moz-transform: rotate(15deg);
    }
    100% {
      -moz-transform: rotate(0deg);
    }
  }

  @-o-keyframes wobble {
    0% {
      -o-transform: rotate(0);
    }
    25% {
      -o-transform: rotate(-15deg);
    }
    50% {
      -o-transform: rotate(0);
    }
    75% {
      -o-transform: rotate(15deg);
    }
    100% {
      -o-transform: rotate(0deg);
    }
  }

  @keyframes wobble {
    0% {
      transform: rotate(0);
    }
    25% {
      transform: rotate(-15deg);
    }
    50% {
      transform: rotate(0);
    }
    75% {
      transform: rotate(15deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const id = `moon${shortid.generate()}`;
const Icon = ({ title, desc, fillColor }) => {
  return (
    <Moon
      id={id}
      version='1.1'
      x='0px'
      y='0px'
      viewBox='15 15 70 70'
      style={{ enableBackground: 'new 15 15 70 70' }}
    >
      <title id={`${id}_Title`}>{title}</title>
      <desc id={`${id}_Desc`}>{desc}</desc>

      <clipPath id='moonFillClip'>
        <path d='M15,15v70h70V15H15z M50,57.999c-4.418,0-7.999-3.582-7.999-7.999c0-3.803,2.655-6.979,6.211-7.792c0.903,4.854,4.726,8.676,9.579,9.58C56.979,55.344,53.802,57.999,50,57.999z' />
      </clipPath>
      <g className='climacon_iconWrap climacon_iconWrap-moon'>
        <g
          className='climacon_componentWrap climacon_componentWrap-moon'
          clipPath='url(#moonFillClip)'
        >
          <path
            className='climacon_component climacon_component-stroke climacon_component-stroke_moon'
            d='M50,61.998c-6.627,0-11.999-5.372-11.999-11.998c0-6.627,5.372-11.999,11.999-11.999c0.755,0,1.491,0.078,2.207,0.212c-0.132,0.576-0.208,1.173-0.208,1.788c0,4.418,3.582,7.999,8,7.999c0.614,0,1.212-0.076,1.788-0.208c0.133,0.717,0.211,1.452,0.211,2.208C61.998,56.626,56.626,61.998,50,61.998z'
          />
        </g>
      </g>
    </Moon>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  fillColor: PropTypes.string,
};

export default Icon;
