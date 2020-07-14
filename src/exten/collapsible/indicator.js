import React from 'react';
import { ReactComponent as ReactLogo } from './logo.svg';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const fade = keyframes`
0% {
fill:#61DAFB;
}
50% {
 fill:black;
}
100%{
  fill:#61DAFB;
}
`;

const pulse = keyframes`
0% {
  transform: scale(0);
  opacity: 1;
  transform-origin: center;
}
100% {
  transform: scale(4.5);
  opacity: 0;
  transform-origin: center;
}
`;

const StyledLogo = styled(ReactLogo)`
  animation: ${rotate} infinite 20s linear;
  height: 25rem;
  width: 25rem;
  display: block;
  margin: auto;
  .lines {
    animation: ${fade} infinite 8s linear;
  }
  .circle {
    animation: ${pulse} infinite 4s linear;
    &:hover {
      animation-play-state: paused;
      cursor: pointer;
    }
  }
`;

const circlePulse = keyframes`
0% {
  fill:#10aded;
  stroke-width:4px
}
50% {
  fill:#bada55;
  stroke-width:2px
}
100%{
  fill:#10aded;
  stroke-width:4px
}
`;
const StyledCircle = styled.svg`
  margin: auto;
`;
const StyledInnerCircle = styled.circle`
  animation: ${circlePulse} infinite 4s linear;
  fill: blue;
`;

const circle = (
  <StyledCircle primaryColor='red' secondaryColor='blue' height='25' width='25'>
    <StyledInnerCircle
      cx='12.5'
      cy='12.5'
      r='10'
      stroke='black'
      stroke-width='3'
    />
  </StyledCircle>
);

export const Indicator = () => {
  return (
    <React.Fragment>
      <StyledLogo />
      <div style={{ width: '25px', margin: 'auto' }}>{circle}</div>
    </React.Fragment>
  );
};
