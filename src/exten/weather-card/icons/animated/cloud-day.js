import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styled from 'styled-components';
import { AnimatedIcon } from '../../icon-component';

const CloudDay = styled(AnimatedIcon)`
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

    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    animation-iteration-count: infinite;

    -moz-animation-timing-function: linear;
    -webkit-animation-timing-function: linear;
    -o-animation-timing-function: linear;
    animation-timing-function: linear;

    -webkit-animation-duration: 12s;
    -moz-animation-duration: 12s;
    -o-animation-duration: 12s;
    animation-duration: 12s;

    -webkit-animation-direction: normal;
    -moz-animation-direction: normal;
    -o-animation-direction: normal;
    animation-direction: normal;
  }

  .climacon_componentWrap-sun_cloud {
    -webkit-animation-name: behindCloudMove, rotate;
    -moz-animation-name: behindCloudMove, rotate;
    -o-animation-name: behindCloudMove, rotate;
    animation-name: behindCloudMove, rotate;

    -webkit-animation-iteration-count: 1, infinite;
    -moz-animation-iteration-count: 1, infinite;
    -o-animation-iteration-count: 1, infinite;
    animation-iteration-count: 1, infinite;

    -webkit-animation-timing-function: ease-out, linear;
    -moz-animation-timing-function: ease-out, linear;
    -o-animation-timing-function: ease-out, linear;
    animation-timing-function: ease-out, linear;

    -webkit-animation-delay: 0, 3s;
    -moz-animation-delay: 0, 3s;
    -o-animation-delay: 0, 3s;
    animation-delay: 0, 3s;

    -webkit-animation-duration: 3s, 12s;
    -moz-animation-duration: 3s, 12s;
    -o-animation-duration: 3s, 12s;
    animation-duration: 3s, 12s;
  }

  .climacon_component-stroke_sunSpoke {
    fill-opacity: 0;
    -webkit-animation-name: fillOpacity, scale;
    -moz-animation-name: fillOpacity, scale;
    -o-animation-name: fillOpacity, scale;
    animation-name: fillOpacity, scale;

    -webkit-animation-direction: alternate;
    -moz-animation-direction: alternate;
    -o-animation-direction: alternate;
    animation-direction: alternate;

    -webkit-animation-iteration-count: 1, infinite;
    -moz-animation-iteration-count: 1, infinite;
    -o-animation-iteration-count: 1, infinite;
    animation-iteration-count: 1, infinite;

    -webkit-animation-delay: 3s, 0;
    -moz-animation-delay: 3s, 0;
    -o-animation-delay: 3s, 0;
    animation-delay: 3s, 0;

    -webkit-animation-duration: 3s;
    -moz-animation-duration: 3s;
    -o-animation-duration: 3s;
    animation-duration: 3s;

    -webkit-animation-fill-mode: both;
    -moz-animation-fill-mode: both;
    -o-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .climacon_component-stroke_sunSpoke:nth-child(even) {
    -webkit-animation-delay: 3s;
    -moz-animation-delay: 3s;
    -o-animation-delay: 3s;
    animation-delay: 3s;
  }
  @-webkit-keyframes rotate {
    0% {
      -webkit-transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @-moz-keyframes rotate {
    0% {
      -moz-transform: rotate(0);
    }
    100% {
      -moz-transform: rotate(360deg);
    }
  }

  @-o-keyframes rotate {
    0% {
      -o-transform: rotate(0);
    }
    100% {
      -o-transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes scale {
    0% {
      -webkit-transform: scale(1, 1);
    }
    100% {
      -webkit-transform: scale(0.5, 0.5);
    }
  }

  @-moz-keyframes scale {
    0% {
      -moz-transform: scale(1, 1);
    }
    100% {
      -moz-transform: scale(0.5, 0.5);
    }
  }

  @-o-keyframes scale {
    0% {
      -o-transform: scale(1, 1);
    }
    100% {
      -o-transform: scale(0.5, 0.5);
    }
  }

  @keyframes scale {
    0% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(0.5, 0.5);
    }
  }

  @-webkit-keyframes behindCloudMove {
    0% {
      -webkit-transform: translateX(-1.75px) translateY(1.75px);
    }

    100% {
      -webkit-transform: translateX(0) translateY(0);
    }
  }

  @-moz-keyframes behindCloudMove {
    0% {
      -moz-transform: translateX(-1.75px) translateY(1.75px);
    }

    100% {
      -moz-transform: translateX(0) translateY(0);
    }
  }

  @-o-keyframes behindCloudMove {
    0% {
      -o-transform: translateX(-1.75px) translateY(1.75px);
    }

    100% {
      -o-transform: translateX(0) translateY(0);
    }
  }

  @keyframes behindCloudMove {
    0% {
      transform: translateX(-1.75px) translateY(1.75px);
    }

    100% {
      transform: translateX(0) translateY(0);
    }
  }

  @-webkit-keyframes fillOpacity {
    0% {
      fill-opacity: 0;
      stroke-opacity: 0;
    }

    100% {
      fill-opacity: 1;
      stroke-opacity: 1;
    }
  }

  @-moz-keyframes fillOpacity {
    0% {
      fill-opacity: 0;
      stroke-opacity: 0;
    }

    100% {
      fill-opacity: 1;
      stroke-opacity: 1;
    }
  }

  @-o-keyframes fillOpacity {
    0% {
      fill-opacity: 0;
      stroke-opacity: 0;
    }

    100% {
      fill-opacity: 1;
      stroke-opacity: 1;
    }
  }

  @keyframes fillOpacity {
    0% {
      fill-opacity: 0;
      stroke-opacity: 0;
    }

    100% {
      fill-opacity: 1;
      stroke-opacity: 1;
    }
  }
`;

const id = `cloud-day${shortid.generate()}`;
const Icon = ({ title, desc, fillColor }) => {
  return (
    <CloudDay
      id={id}
      version='1.1'
      x='0px'
      y='0px'
      viewBox='15 15 70 70'
      style={{ enableBackground: 'new 15 15 70 70' }}
    >
      <title id={`${id}_Title`}>{title}</title>
      <desc id={`${id}_Desc`}>{desc}</desc>

      <clipPath id='cloudFillClip'>
        <path d='M15,15v70h70V15H15z M59.943,61.639c-3.02,0-12.381,0-15.999,0c-6.626,0-11.998-5.371-11.998-11.998c0-6.627,5.372-11.999,11.998-11.999c5.691,0,10.434,3.974,11.665,9.29c1.252-0.81,2.733-1.291,4.334-1.291c4.418,0,8,3.582,8,8C67.943,58.057,64.361,61.639,59.943,61.639z' />
      </clipPath>
      <clipPath id='sunCloudFillClip'>
        <path d='M15,15v70h70V15H15z M57.945,49.641c-4.417,0-8-3.582-8-7.999c0-4.418,3.582-7.999,8-7.999s7.998,3.581,7.998,7.999C65.943,46.059,62.362,49.641,57.945,49.641z' />
      </clipPath>
      <g className='climacon_iconWrap climacon_cloudSun-iconWrap'>
        <g clipPath='url(#cloudFillClip)'>
          <g className='climacon_componentWrap climacon_componentWrap-sun climacon_componentWrap-sun_cloud'>
            <g className='climacon_componentWrap climacon_componentWrap_sunSpoke'>
              <path
                className='climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-orth'
                d='M80.029,43.611h-3.998c-1.105,0-2-0.896-2-1.999s0.895-2,2-2h3.998c1.104,0,2,0.896,2,2S81.135,43.611,80.029,43.611z'
              />
              <path
                className='climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north'
                d='M72.174,30.3c-0.781,0.781-2.049,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l2.828-2.828c0.779-0.781,2.047-0.781,2.828,0c0.779,0.781,0.779,2.047,0,2.828L72.174,30.3z'
              />
              <path
                className='climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north'
                d='M58.033,25.614c-1.105,0-2-0.896-2-2v-3.999c0-1.104,0.895-2,2-2c1.104,0,2,0.896,2,2v3.999C60.033,24.718,59.135,25.614,58.033,25.614z'
              />
              <path
                className='climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north'
                d='M43.892,30.3l-2.827-2.828c-0.781-0.781-0.781-2.047,0-2.828c0.78-0.781,2.047-0.781,2.827,0l2.827,2.828c0.781,0.781,0.781,2.047,0,2.828C45.939,31.081,44.673,31.081,43.892,30.3z'
              />
              <path
                className='climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north'
                d='M42.033,41.612c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.998-0.896-1.998-1.999s0.896-2,1.998-2h4C41.139,39.612,42.033,40.509,42.033,41.612z'
              />
              <path
                className='climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north'
                d='M43.892,52.925c0.781-0.78,2.048-0.78,2.827,0c0.781,0.78,0.781,2.047,0,2.828l-2.827,2.827c-0.78,0.781-2.047,0.781-2.827,0c-0.781-0.78-0.781-2.047,0-2.827L43.892,52.925z'
              />
              <path
                className='climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north'
                d='M58.033,57.61c1.104,0,2,0.895,2,1.999v4c0,1.104-0.896,2-2,2c-1.105,0-2-0.896-2-2v-4C56.033,58.505,56.928,57.61,58.033,57.61z'
              />
              <path
                className='climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north'
                d='M72.174,52.925l2.828,2.828c0.779,0.78,0.779,2.047,0,2.827c-0.781,0.781-2.049,0.781-2.828,0l-2.828-2.827c-0.781-0.781-0.781-2.048,0-2.828C70.125,52.144,71.391,52.144,72.174,52.925z'
              />
            </g>
            <g
              className='climacon_componentWrap climacon_componentWrap-sunBody'
              clipPath='url(#sunCloudFillClip)'
            >
              <circle
                className='climacon_component climacon_component-stroke climacon_component-stroke_sunBody'
                cx='58.033'
                cy='41.612'
                r='11.999'
              />
            </g>
          </g>
        </g>
        <g
          className='climacon_componentWrap climacon_componentWrap-cloud'
          clipPath='url(#cloudFillClip)'
        >
          <path
            className='climacon_component climacon_component-stroke climacon_component-stroke_cloud'
            d='M44.033,65.641c-8.836,0-15.999-7.162-15.999-15.998c0-8.835,7.163-15.998,15.999-15.998c6.006,0,11.233,3.312,13.969,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,6.625-5.371,11.998-11.998,11.998C57.26,65.641,47.23,65.641,44.033,65.641z'
          />
        </g>
      </g>
    </CloudDay>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  fillColor: PropTypes.string,
};

export default Icon;
