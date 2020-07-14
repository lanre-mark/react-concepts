import React from 'react';
import parseIcon from './parse';

const RenderStyle = (generateRandom) => {
  return generateRandom === 1
    ? {
        filter: 'invert(75%) sepia(100%) hue-rotate(40deg) saturate(10000%)',
        WebkitFilter:
          'invert(75%) sepia(100%) hue-rotate(40deg) saturate(10000%)',
      }
    : generateRandom === 2
    ? {
        filter:
          'invert(72%) sepia(79%) saturate(447%) hue-rotate(29deg) brightness(94%) contrast(87%)',
        WebkitFilter:
          'invert(72%) sepia(79%) saturate(447%) hue-rotate(29deg) brightness(94%) contrast(87%)',
      }
    : generateRandom === 3
    ? {
        filter: 'invert(75%) sepia(100%) hue-rotate(0deg) saturate(10000%)',
        WebkitFilter:
          'invert(75%) sepia(100%) hue-rotate(0deg) saturate(10000%)',
      }
    : {};
};

const RenderIcon = ({
  iconCode,
  timeStamp = null,
  randomStyle,
  ...template
}) => {
  const [Icon, composeStyle] = parseIcon(iconCode, timeStamp);
  return composeStyle ? (
    <div style={RenderStyle(randomStyle)}>
      <Icon />
    </div>
  ) : iconCode === 'show_direction' ? (
    <Icon {...template} />
  ) : (
    <Icon />
  );
};

export default RenderIcon;
