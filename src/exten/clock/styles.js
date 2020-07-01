import styled, { css, keyframes } from 'styled-components';
import { lighten, rgba } from 'polished';

const adjustTagsByPercent = (w, ratio) =>
  (parseInt(w || '100px', 10) * (ratio / 100)).toFixed(2);

const adjustPixelsByPercent = (w, ratio, wPxs = true) =>
  `${((parseInt(w || '100px', 10) - 30) * (ratio / 100)).toFixed(2)}${
    wPxs ? 'px' : ''
  }`;

const adjustMarginForDigitWrap = (w) => {
  //-12.5px 0 0 70px;    4.167  0  0 23.33
  const lM = adjustPixelsByPercent(w, 4.167, false) * -1;
  const tM = 0;
  const rM = 0;
  const bM = adjustPixelsByPercent(w, 23.33, false);
  return `${lM !== 0 ? lM + 'px' : 0} ${tM !== 0 ? tM + 'px' : 0} ${
    rM !== 0 ? rM + 'px' : 0
  } ${bM !== 0 ? bM + 'px' : 0};`;
};

const BlackHands = (props) => css`
  background-image: linear-gradient(
    -10deg,
    ${props.colorDark} 0%,
    ${props.colorBlack} 50%
  );
  border-bottom-right-radius: 40%;
  border-bottom-left-radius: 40%;
`;

const CenterPointHands = () => css`
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
`;

const GradientInHands = (props) => css`
  background-image: linear-gradient(
    -70deg,
    ${props.colorWhite} 15%,
    ${rgba(props.colorBlack, 1)} 100%
  );
  box-shadow: inset 0 2px 5px ${props.colorDark}, -1px 0 5px ${props.colorBlack};
`;

const HourLines = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
`;

const mixBg = (props) => css`
  background-image: linear-gradient(
    -15deg,
    ${lighten(0.3, props.colorBlack)}
      ${100 - Math.ceil(parseInt(props.hourlabel, 10) / 6) * 12.5}%,
    ${props.colorLightest} 100%
  );
`;

const mainBxShade = (props) =>
  css`
    box-shadow: inset 0 2px 20px ${props.colorDark};
  `;

const minuteLabel = (ii, width) => {
  return `
          &:nth-child(${ii}) {
            transform: translate(-50%, -50%) rotate(${
              180 + ii * 30
            }deg) translateY(${adjustTagsByPercent(width, 36)}px);
            ${
              ii % 3 === 0
                ? css`
                    background: rgb(62, 33, 47);
                    background: linear-gradient(
                      124deg,
                      ${rgba(62, 33, 47, 1)} 0%,
                      ${rgba(70, 16, 32, 1)} 100%
                    );
                    height: ${adjustPixelsByPercent(width, 3.33)};
                    width: ${adjustPixelsByPercent(width, 1.67)};
                  `
                : css``
            }
           }
        `;
};

const ClocksBase = styled.div`
  width: ${(props) => props.width || '130px'};
  height: ${(props) => props.width || '130px'};
  border-radius: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => mixBg(props)}
  ${(props) => mainBxShade(props)}
  position: relative;
  z-index: 100;
`;

const Timers = styled.div`
  width: 87%;
  height: 87%;
  border-radius: 50%;
  background: #3c3c3c;
  background: ${(props) => css`
  linear-gradient(
    162deg,
    #3c3c3c 10%,
    ${props.colorBlack} 68%,
    ${props.colorBlack} 100%
  );`}
  box-shadow: ${(props) =>
    css`inset 0 -2px 4px ${props.colorLight}, inset 0 1px 15px ${props.colorBlack};`}
  position: relative;
`;

const ClockTimerHand = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, 0, 0) rotate(180deg);
  transform-origin: 50% 0;
`;

const TimerHandSeconds = styled(ClockTimerHand)`
  height: 45%;
  width: 0.75%;
  background-image: ${(props) => css`linear-gradient(
    40deg,
    ${props.colorLightest} 35%,
    ${props.colorMedium} 100%
  );`}
  box-shadow: ${(props) => css`-1px 0 1px ${rgba(props.colorWhite, 0.7)} inset,
    1px 0 1px ${rgba(props.colorMedium, 0.8)} inset;`}

  ${CenterPointHands}

  &:after {
    position: absolute;
    content: '';
    background-image: ${(props) => css`linear-gradient(
      -10deg,
      ${props.colorBlack} 35%,
      ${props.colorDark} 100%
    );`}
    box-shadow: ${(props) => css`1px 0 3px ${rgba(
      props.colorMedium,
      0.8
    )} inset,
      -1px 0 3px ${rgba(props.colorWhite, 0.7)} inset;`}
    width: 10px;
    height: 10px;
    border-radius: 50%;
    top: 0;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
`;

const TimerHandMinutes = styled(ClockTimerHand)`
  height: 40%;
  width: 3%;
  ${(props) => GradientInHands(props)}
  ${() => CenterPointHands()}

  &:before {
    content: '';
    position: absolute;
    width: 50%;
    height: 60%;
    top: 15%;
    left: 0;
    transform: translate3d(50%, -15%, 0);
    ${(props) => BlackHands(props)}
  }
`;

const TimerHandHours = styled(ClockTimerHand)`
  height: 30%;
  width: 4%;
  ${(props) => GradientInHands(props)}
  ${() => CenterPointHands()}

  &:before {
    content: '';
    position: absolute;
    width: 50%;
    height: 70%;
    top: 15%;
    left: 0;
    transform: translate3d(50%, -15%, 0);
    ${(props) => BlackHands(props)}
  }
`;

const HourLine = styled(HourLines)`
  position: absolute;
  background: ${(props) => props.colorWhite};
  height: ${(props) => adjustPixelsByPercent(props.width, 3.33)};
  width: ${(props) => adjustPixelsByPercent(props.width, 1.67)};
  border-radius: 50%;
  ${(props) => minuteLabel(props.label, props.width)}
`;

const DigitalWrap = styled.div`
  width: ${(props) => adjustPixelsByPercent(props.width, 9.75)};
  height: ${(props) => adjustPixelsByPercent(props.width, 9.75)};
  border-radius: 0.2em;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: ${(props) => adjustMarginForDigitWrap(props.width)}
  overflow: hidden;
  background: ${(props) => props.colorDark};
  background: ${(props) =>
    css`-webkit-linear-gradient(top, ${props.colorDark} 65%,${props.colorLightest} 100%);`} 
  background: ${(props) =>
    css`-moz-linear-gradient(top, ${props.colorDark} 65%,${props.colorLightest} 100%);`}
  background: ${(props) =>
    css`-ms-linear-gradient(top, ${props.colorDark} 65%,${props.colorLightest} 100%);`}
  background: ${(props) =>
    css`-o-linear-gradient(top, ${props.colorDark} 65%,${props.colorLightest} 100%);`}
  background: ${(props) =>
    css`linear-gradient(to bottom, ${props.colorDark} 65%,${props.colorLightest} 100%);`}
`;

const DigitalWrapLabel = styled.span`
  float: left;
  width: 100%;
  height: 100%;
  font-weight: 700;
  font-size: ${(props) => adjustPixelsByPercent(props.width, 7.25)};
  border-right: ${(props) => css`0.1em solid ${props.colorBlack}`};
  color: #ddd;
  text-align: center;
  font-family: Consolas, monaco, monospace;
`;

export {
  ClocksBase,
  Timers,
  HourLine,
  TimerHandSeconds,
  TimerHandMinutes,
  TimerHandHours,
  DigitalWrap,
  DigitalWrapLabel,
};
