import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import styled from 'styled-components';

const id = `wind-direction-arrow${shortid.generate()}`;
const Icon = ({ title, desc, fillColor, Styled, ...props }) => {
  return (
    <Styled
      id={id}
      {...props}
      width='20px'
      height='20px'
      viewBox='0 0 20 20'
      version='1.1'
      style={{ enableBackground: 'new 0 0 20 20' }}
    >
      <title id={`${id}_Title`}>{title}</title>
      <desc id={`${id}_Desc`}>{desc}</desc>
      <g>
        <path
          fill={`${fillColor}`}
          d='M17.6,9.1H5.4L11,3.5L9.6,2.1l-8,8l8,8l1.4-1.4l-5.6-5.6h12.2V9.1z'
        />
      </g>
    </Styled>
  );
};

Icon.Prototypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  fillColor: PropTypes.string,
  Styled: PropTypes.object,
};

Icon.defaultProps = {
  fillColor: '#FFFFFF',
  Styled: styled.svg`
    transform: rotate(0deg);
    transform-origin: center center;
  `,
};

export default Icon;
