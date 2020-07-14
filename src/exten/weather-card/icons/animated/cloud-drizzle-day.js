import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styled from 'styled-components';
import { AnimatedIcon } from '../../icon-component';

const CloudDrizzleDay = styled(AnimatedIcon)`
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

  .climacon_component-stroke_drizzle {
    fill-opacity: 0;

    -webkit-animation-name: drizzleFall, fillOpacity2;
    -moz-animation-name: drizzleFall, fillOpacity2;
    -o-animation-name: drizzleFall, fillOpacity2;
    animation-name: drizzleFall, fillOpacity2;

    -webkit-animation-timing-function: ease-in;
    -moz-animation-timing-function: ease-in;
    -o-animation-timing-function: ease-in;
    animation-timing-function: ease-in;

    -webkit-animation-duration: 1s;
    -moz-animation-duration: 1s;
    -o-animation-duration: 1s;
    animation-duration: 1s;
  }

  .climacon_component-stroke_drizzle:nth-child(1) {
    -webkit-animation-delay: 0s;
    -moz-animation-delay: 0s;
    -o-animation-delay: 0s;
    animation-delay: 0s;
  }

  .climacon_component-stroke_drizzle:nth-child(2) {
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
    -o-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }

  .climacon_component-stroke_drizzle:nth-child(3) {
    -webkit-animation-delay: 1.2s;
    -moz-animation-delay: 1.2s;
    -o-animation-delay: 1.2s;
    animation-delay: 1.2s;
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

  @-webkit-keyframes drizzleFall {
    0% {
      -webkit-transform: translateY(0);
    }

    100% {
      -webkit-transform: translateY(21px);
    }
  }

  @-moz-keyframes drizzleFall {
    0% {
      -moz-transform: translateY(0);
    }

    100% {
      -moz-transform: translateY(21px);
    }
  }

  @-o-keyframes drizzleFall {
    0% {
      -o-transform: translateY(0);
    }

    100% {
      -o-transform: translateY(21px);
    }
  }

  @keyframes drizzleFall {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(21px);
    }
  }

  @-webkit-keyframes fillOpacity2 {
    0% {
      fill-opacity: 0;
      stroke-opacity: 0;
    }

    50% {
      fill-opacity: 1;
      stroke-opacity: 1;
    }

    100% {
      fill-opacity: 0;
      stroke-opacity: 0;
    }
  }

  @-moz-keyframes fillOpacity2 {
    0% {
      fill-opacity: 0;
      stroke-opacity: 0;
    }

    50% {
      fill-opacity: 1;
      stroke-opacity: 1;
    }

    100% {
      fill-opacity: 0;
      stroke-opacity: 0;
    }
  }

  @-o-keyframes fillOpacity2 {
    0% {
      fill-opacity: 0;
      stroke-opacity: 0;
    }

    50% {
      fill-opacity: 1;
      stroke-opacity: 1;
    }

    100% {
      fill-opacity: 0;
      stroke-opacity: 0;
    }
  }

  @keyframes fillOpacity2 {
    0% {
      fill-opacity: 0;
      stroke-opacity: 0;
    }

    50% {
      fill-opacity: 1;
      stroke-opacity: 1;
    }

    100% {
      fill-opacity: 0;
      stroke-opacity: 0;
    }
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

const id = `cloud-drizzle-day${shortid.generate()}`;
const Icon = ({ title, desc, fillColor }) => {
  return (
    <CloudDrizzleDay
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
      <clipPath id='cloudSunFillClip'>
        <path d='M15,15v70h20.947V63.481c-4.778-2.767-8-7.922-8-13.84c0-8.836,7.163-15.998,15.998-15.998c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.338-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12c0,5.262-3.394,9.723-8.107,11.341V85H85V15H15z' />
      </clipPath>
      <g className='climacon_iconWrap climacon_iconWrap-cloudDrizzleSun'>
        <g clipPath='url(#cloudSunFillClip)'>
          <g className='climacon_componentWrap climacon_componentWrap-sun climacon_componentWrap-sun_cloud'>
            <g className='climacon_componentWrap climacon_componentWrap_sunSpoke'>
              <path
                className='climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north'
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
        <g className='climacon_componentWrap climacon_componentWrap-drizzle'>
          <path
            className='climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left'
            d='M42.001,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2.001-0.895-2.001-2v-3.998C40,54.538,40.896,53.644,42.001,53.644z'
          />
          <path
            className='climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle'
            d='M49.999,53.644c1.104,0,2,0.896,2,2v4c0,1.104-0.896,2-2,2s-1.998-0.896-1.998-2v-4C48.001,54.54,48.896,53.644,49.999,53.644z'
          />
          <path
            className='climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right'
            d='M57.999,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998C55.999,54.538,56.894,53.644,57.999,53.644z'
          />
        </g>

        <g
          className='climacon_componentWrap climacon_componentWrap-cloud'
          clipPath='url(#cloudFillClip)'
        >
          <path
            className='climacon_component climacon_component-stroke climacon_component-stroke_cloud'
            d='M63.999,64.944v-4.381c2.387-1.386,3.998-3.961,3.998-6.92c0-4.418-3.58-8-7.998-8c-1.603,0-3.084,0.481-4.334,1.291c-1.232-5.316-5.973-9.29-11.664-9.29c-6.628,0-11.999,5.372-11.999,12c0,3.549,1.55,6.729,3.998,8.926v4.914c-4.776-2.769-7.998-7.922-7.998-13.84c0-8.836,7.162-15.999,15.999-15.999c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.336-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12C71.997,58.864,68.655,63.296,63.999,64.944z'
          />
        </g>
      </g>
    </CloudDrizzleDay>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  fillColor: PropTypes.string,
};

export default Icon;
