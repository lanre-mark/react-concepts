import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Item } from '../carousel/components';
import Carousel from '../carousel';

import {
  AvatarBox,
  AvatarDistance,
  AvatarImage,
  AvatarOwner,
  CollapsePanel,
  Content,
  Heading,
} from './components';
import './wrap.css';

import Clock from '../clock/extenClock';
import useClockTicker from '../clock/clockhook';

const responseBE = [
  {
    background: '#2980B9',
    borderColor: '#015389',
    avatar:
      'https://lh4.googleusercontent.com/-tpn4s-0Q6XI/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnUERTERKULYXtOPbNQrielF4t3ZA/s192-c-mo/photo.jpg',
    deviceinfo: null,
    distance: null,
    holidayinfo: [],
    id: 'spaces/oq2_SosFiJUB/devices/b823555c-f5b6-479d-a609-0f0739cbe795',
    name: 'Lanre Omomat',
    participant_id: 'b823555c-f5b6-479d-a609-0f0739cbe795',
    point: false,
    timezone: null,
    weatherinfo: {
      base: 'stations',
      clouds: { all: 40 },
      cod: 200,
      coord: { lon: 3.39, lat: 6.45 },
      dt: 1593826154,
      id: 2332459,
      main: {
        feels_like: 31.35,
        humidity: 94,
        pressure: 1013,
        temp: 26,
        temp_max: 26,
        temp_min: 26,
      },
      name: 'Lagos',
      sys: {
        type: 1,
        id: 1185,
        country: 'NG',
        sunrise: 1593840971,
        sunset: 1593885917,
      },
      timezone: 3600,
      visibility: 10000,
      weather: [
        {
          id: 200,
          main: 'Thunderstorm',
          description: 'thunderstorm with light rain',
          icon: '11n',
        },
      ],
      wind: { speed: 1.5, deg: 250 },
    },
  },
  {
    background: '#27AE60',
    borderColor: '#086C32',
    avatar:
      'https://lh3.googleusercontent.com/-BZpQh7biwzA/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclhNKHC8ceCkG8Yev6S7qGmvxHGxw/s192-c-mo/photo.jpg',
    deviceinfo: null,
    distance: null,
    holidayinfo: [],
    id: 'spaces/oq2_SosFiJUB/devices/95b99d87-9336-4005-8143-a25eb026a228',
    name: 'Fliptop Consulting',
    participant_id: '95b99d87-9336-4005-8143-a25eb026a228',
    point: false,
    timezone: null,
    weatherinfo: {
      base: 'stations',
      clouds: { all: 40 },
      cod: 200,
      coord: { lon: 3.39, lat: 6.45 },
      dt: 1593826154,
      id: 2332459,
      main: {
        feels_like: 31.35,
        humidity: 94,
        pressure: 1013,
        temp: 26,
        temp_max: 26,
        temp_min: 26,
      },
      name: 'Lagos',
      sys: {
        type: 1,
        id: 1185,
        country: 'NG',
        sunrise: 1593840971,
        sunset: 1593885917,
      },
      timezone: 3600,
      visibility: 10000,
      weather: [
        {
          id: 200,
          main: 'Thunderstorm',
          description: 'thunderstorm with light rain',
          icon: '11n',
        },
      ],
      wind: { speed: 1.5, deg: 250 },
    },
  },
  {
    background: '#9B27AE',
    borderColor: '#6A067A',
    avatar:
      'https://lh3.googleusercontent.com/a-/AOh14Gjhby_af4Ml6LhVGn4dapmIWWU5IcASCBmFNOUr=s192-c-mo',
    deviceinfo: [
      'Mac OS v10.15.4',
      'Chrome v83.0.4103.116',
      'Blink v83.0.4103.116',
    ],
    distance: '23,840 km',
    holidayinfo: [],
    id: 'spaces/oq2_SosFiJUB/devices/b40ad969-da94-4a6e-b500-f72481c448d3',
    name: 'olanrewaju Mark',
    participant_id: 'b40ad969-da94-4a6e-b500-f72481c448d3',
    point: true,
    timezone: 'Africa/Lagos',
    weatherinfo: {
      base: 'stations',
      clouds: { all: 40 },
      cod: 200,
      coord: { lon: 3.39, lat: 6.45 },
      dt: 1593826154,
      id: 2332459,
      main: {
        feels_like: 31.35,
        humidity: 94,
        pressure: 1013,
        temp: 26,
        temp_max: 26,
        temp_min: 26,
      },
      name: 'Lagos',
      sys: {
        type: 1,
        id: 1185,
        country: 'NG',
        sunrise: 1593840971,
        sunset: 1593885917,
      },
      timezone: 3600,
      visibility: 10000,
      weather: [
        {
          id: 200,
          main: 'Thunderstorm',
          description: 'thunderstorm with light rain',
          icon: '11n',
        },
      ],
      wind: { speed: 1.5, deg: 250 },
    },
  },
];

// background: '#e67e22',
// borderColor: '#9D4F09',

const payloadBE = responseBE
  .concat(responseBE)
  .concat(responseBE)
  .concat(responseBE)
  .concat(responseBE)
  .concat(responseBE)
  .concat(responseBE)
  .concat(responseBE);

// const clockDate = useClockTicker({
//   label: 'California',
//   value: 'America/Los_Angeles',
// });
// const clockDate1 = useClockTicker({
//   label: 'Lagos',
//   value: 'Africa/Lagos',
// });
// const clockDate2 = useClockTicker({
//   label: 'Macau',
//   value: 'Asia/Macau',
// });
// const clockPayload = {
//   theme: {
//     colorLightest: '#f0f0f0',
//     colorLight: '#cecece',
//     colorMedium: '#adadad',
//     colorDark: '#414141',
//     colorWhite: '#fff',
//     colorBlack: '#000',
//   },
//   clockSize: '230px',
//   date: clockDate,
// };
// const clockPayload1 = {
//   theme: {
//     colorLightest: '#f0f0f0',
//     colorLight: '#cecece',
//     colorMedium: '#adadad',
//     colorDark: '#414141',
//     colorWhite: '#fff',
//     colorBlack: '#000',
//   },
//   clockSize: '230px',
//   date: clockDate1,
// };
// const clockPayload2 = {
//   theme: {
//     colorLightest: '#f0f0f0',
//     colorLight: '#cecece',
//     colorMedium: '#adadad',
//     colorDark: '#414141',
//     colorWhite: '#fff',
//     colorBlack: '#000',
//   },
//   clockSize: '230px',
//   date: clockDate2,
// };

// const allClockPayloads = {};
// allClockPayloads[0] = clockPayload;
// allClockPayloads[1] = clockPayload1;
// allClockPayloads[2] = clockPayload2;
// allClockPayloads[3] = clockPayload1;
// allClockPayloads[4] = clockPayload;

const Accordion = () => {
  const [compOpen, setCompOpen] = useState(false);

  const toggleOpen = () => {
    setCompOpen(!compOpen);
  };

  const clockDate = useClockTicker({
    label: 'California',
    value: 'America/Los_Angeles',
  });
  const clockPayload = {
    theme: {
      colorLightest: '#f0f0f0',
      colorLight: '#cecece',
      colorMedium: '#adadad',
      colorDark: '#414141',
      colorWhite: '#fff',
      colorBlack: '#000',
    },
    clockSize: '130px',
    date: clockDate,
  };

  return (
    <CollapsePanel>
      <Heading onClick={toggleOpen}>
        <AvatarImage
          src={
            'https://lh3.googleusercontent.com/a-/AOh14Gjhby_af4Ml6LhVGn4dapmIWWU5IcASCBmFNOUr'
          }
          alt={'avatar'}
          borderColor={''}
        />
        <AvatarBox>
          <AvatarOwner>olanrewaju Mark</AvatarOwner>
          <AvatarDistance>24,354km away from you</AvatarDistance>
        </AvatarBox>
      </Heading>
      <Content open={compOpen}>
        <CSSTransition
          in={compOpen}
          timeout={{
            enter: 800,
            exit: 500,
          }}
          classNames='leaderboard-list__item-'
        >
          <Carousel title='Carousel'>
            {Array(3)
              .fill('')
              .map((i, ii) => (
                <Clock key={ii} {...clockPayload}></Clock>
              ))}
          </Carousel>
        </CSSTransition>
      </Content>
    </CollapsePanel>
  );
};

export default Accordion;
