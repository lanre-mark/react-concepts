import React from 'react';
import {
  TimerHandSeconds,
  TimerHandMinutes,
  TimerHandHours,
} from './tick/styles';

export const ClockHand = (props) => {
  //const getStyle = (pos, type) => {
  const getStyle = () => {
    // transform: `translateX(-50%) rotate(${pos}deg)`,
    // transition: `${
    //   (pos > 534 || pos <= 182) && type === 'seconds'
    //     ? 'none'
    //     : 0.2 + 's cubic-bezier(0.4, 2.08, 0.55, 0.44)'
    // }`,
    return {
      transform: `translateX(-50%) rotate(${props.position}deg)`,
      transition: `${
        (props.position > 534 || props.position <= 182) &&
        props.name === 'seconds'
          ? 'none'
          : 0.2 + 's cubic-bezier(0.4, 2.08, 0.55, 0.44)'
      }`,
    };
  };

  // return (
  //   <>
  //     <TimerHandSeconds
  //       {...props}
  //       style={getStyle(props.seconds * 6 + 180, 'seconds')}
  //     ></TimerHandSeconds>
  //     <TimerHandMinutes
  //       {...props}
  //       style={getStyle(props.minutes * 6 + 180, 'minutes')}
  //     ></TimerHandMinutes>
  //     <TimerHandHours
  //       {...props}
  //       style={getStyle(props.hours * 30 + 180, 'hours')}
  //     ></TimerHandHours>
  //   </>
  // );

  {
    return props.name === 'seconds' ? (
      <TimerHandSeconds {...props} style={getStyle()}></TimerHandSeconds>
    ) : props.name === 'minutes' ? (
      <TimerHandMinutes {...props} style={getStyle()}></TimerHandMinutes>
    ) : props.name === 'hours' ? (
      <TimerHandHours {...props} style={getStyle()}></TimerHandHours>
    ) : (
      ''
    );
  }
};
