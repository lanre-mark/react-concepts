import styled, { css } from 'styled-components';
//'Muli', sans-serif;

export const WeatherBlocks = styled.div`
  ${(props) =>
    props.type === 'update'
      ? css`
          display: flex;
          flex-direction: row;
          align-items: center;
        `
      : css``}
`;

export const WeatherCardBase = styled.div`
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: solid 1px #ebebeb;
  padding: 10px 10px 0px 10px;
  display: inline-block;
  background-color: #000000;
  width: 128%;
  font-family: 'Muli', sans-serif;
  font-size: 10px;
  color: #6c757d;
  box-sizing: border-box;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: right;
`;

export const WeatherCardFrame = styled.div`
  width: 100%;
`;

export const RealTimeSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  color: #ebebeb;
  text-align: left;
  padding-top: 10px;
  padding-bottom: 5px;
`;

export const RealTimeBlocks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #ebebeb;
  text-align: ${(props) => props.align};
  ${(props) =>
    props.type === 'weather'
      ? css`
          padding-top: 10px;
          padding-bottom: 5px;
        `
      : css``}
`;

export const RealTimeTemp = styled.div`
  font-size: 16px;
  line-height: 2px;
  font-weight: 400;
  color: #ebebeb;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 2px;
  }
`;

export const RealTimeTempDegrees = styled.div`
  font-weight: bold;
  align-self: flex-start;
  margin-right: 6px;
  margin-top: 4px;
  color: #ebebeb;
  @media only screen and (max-width: 768px) {
    margin-right: 2px;
  }
`;

export const RealTimeIcon = styled.div`
  width: 36px;
  height: 36px;
  margin-left: auto;
  @media only screen and (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const AnimatedIcon = styled.svg`
  width: 36px;
  height: 36px;
  margin-left: auto;
  @media only screen and (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

export const RealTimeBlockDescription = styled.div`
  @media only screen and (max-width: 768px) {
    margin-right: 10px;
  }
`;

export const RealTimeDescription = styled.div`
  color: #ebebeb;
  ${(props) =>
    props.delimit === 'true'
      ? css`
          margin-bottom: 5px;
        `
      : css``}
`; // weather code like Clear, etc

export const WeatherCardDivider = styled.div`
  border-bottom: solid 1px #ebebeb;
  margin: 0px -32px 0px -32px;
`;

export const WeatherCardLocation = styled.div`
  margin-bottom: 12px;
  text-align: left;
  color: #ebebeb;
`;

export const WeatherCardLocationIcon = styled.svg`
  height: 12px;
  width: 12px;
  vertical-align: middle;
  margin-right: 2px;
  opacity: 0.5;
  color: #ebebeb;
`;

export const WeatherCardLocalTime = styled.div`
  margin-bottom: 2px;
  text-align: left;
  color: #ebebeb;
`;

export const WindDirectionComponent = (rotate) => styled.svg`
  transform: rotate(${rotate}deg);
  transform-origin: center center;
`;
