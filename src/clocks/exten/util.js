export const getHandAngle = (props) => {
  let handAngle = 0;
  switch (props.type) {
    case 'second':
      handAngle = 270 + props.seconds * 6;
      break;
    case 'minute':
      handAngle = 270 + props.minutes * 6;
      break;
    case 'hour':
      handAngle = 270 + props.hours * 30;
      break;
    default:
      handAngle = 0;
  }
  return handAngle;
};
