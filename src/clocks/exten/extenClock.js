import React, { useState, useEffect } from 'react';
import { ClockHand } from './clockHand';
import {
  ClocksBase,
  Timers,
  HourLine,
  DigitalWrap,
  DigitalWrapLabel,
} from './tick/styles';
import './extenClock.css';

const Clock = (props) => {
  let secs = props.date.seconds() * 6 + 180;
  let mins = props.date.minutes() * 6 + 180;
  let hrs = props.date.hours();
  const [hours, setHour] = useState(hrs * 30 + 180); //+ mins / 12
  const [seconds, setSeconds] = useState(secs);
  const [minutes, setMinute] = useState(mins);
  const [Hour24lbl, set24HourLabel] = useState(hrs);

  useEffect(() => {
    secs = props.date.seconds() * 6 + 180;
    mins = props.date.minutes() * 6 + 180;
    hrs = props.date.hours();
    setSeconds(secs);
    setMinute(props.date.minutes() * 6 + 180);
    setHour(hrs * 30 + 180); //+ mins / 12
    set24HourLabel(hrs);
  }, [props.date]);

  return (
    <ClocksBase
      {...props.theme}
      width={props.clockSize}
      hourlabel={props.date.hours()}
    >
      <Timers {...props.theme}>
        {Array(12)
          .fill()
          .map((el, ii) => (
            <HourLine
              {...props.theme}
              width={props.clockSize}
              key={ii}
              label={ii + 1}
            ></HourLine>
          ))}
        <DigitalWrap width={props.clockSize} {...props.theme}>
          <DigitalWrapLabel width={props.clockSize} {...props.theme}>
            {props.date.hours() > 12 ? 'PM' : 'AM'}
          </DigitalWrapLabel>
        </DigitalWrap>
        {/* <ClockHand
          {...{
            seconds: props.date.seconds(),
            minutes: props.date.minutes(),
            hour: props.date.hours(),
          }}
          {...props.theme}
        /> */}
        <ClockHand name='hours' position={hours} {...props.theme} />
        <ClockHand name='minutes' position={minutes} {...props.theme} />
        <ClockHand name='seconds' position={seconds} {...props.theme} />
      </Timers>
    </ClocksBase>
  );
};

export default Clock;
