import React, { useState, useEffect } from 'react';

import { LoginAuthorization } from './now/AuthContextProvider';
import { GeneralDataAdapter } from '../axios/Providers/GeneralDataProvider';

import MainPopup from '../popup/PopupContainer';
import Map04 from '../maptest/map';
import useClockTicker from '../exten/clock/clockhook';

import Accordion from '../exten/collapsible/wrap-collapse';
import WeatherIcon from '../weather-icons-lib';

import { WeatherCard } from '../exten/weather-card';

const weather1 = {
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
  country: 'Nigeria',
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
};

const climaweather = {
  feels_like: { value: 18.63, units: 'C' },
  lat: 34.0531,
  lon: -118.242,
  observation_time: { value: '2020-07-09T11:58:27.070Z' },
  precipitation: { value: 0, units: 'mm/hr' },
  temp: { value: 18.63, units: 'C' },
  weather_code: { value: 'Clear' },
};

const Header = () => {
  const {
    // isAuthenticated,
    // userProfile,
    handleLogin,
    logout,
  } = LoginAuthorization();

  const { getGeneralData } = GeneralDataAdapter();

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
  // console.log(clockDate);
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

  const loadAgerange = async () => {
    await getGeneralData.getAgeRanges();
  };

  const loadGender = async () => {
    await getGeneralData.getGender();
  };

  const [_storyFlags, setStoryFlags] = useState();
  const [_ageRanges, setAgeranges] = useState();
  const [_gender, setGender] = useState();

  useEffect(() => {
    if (getGeneralData.payload && getGeneralData.modelType) {
      if (getGeneralData.modelType === 'storyflag') {
        setStoryFlags(getGeneralData.payload);
      } else if (getGeneralData.modelType === 'agerange') {
        setAgeranges(getGeneralData.payload);
      } else if (getGeneralData.modelType === 'gender') {
        setGender(getGeneralData.payload);
      }
    }
    // eslint-disable-next-line
  }, [getGeneralData.payload]);

  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log('Alias :: ', event.target.name.value);
    console.log('Age Range :: ', event.target.agerange.value);
    console.log('Country :: ', event.target.country.value);
    console.log('City :: ', event.target.city.value);
    console.log('Ethnicity :: ', event.target.ethnicity.value);
    console.log('Gender :: ', event.target.gender.value);
  };

  return (
    <div>
      {/* <MainPopup onSubmit={onSubmit} /> */}
      {/* <Map04></Map04> */}
      {/* <MainFrame></MainFrame> */}
      {/* <Clock {...clockPayload}></Clock>
      <Clock {...clockPayload1}></Clock>
      <Clock {...clockPayload2}></Clock> */}
      {/* <Base></Base> */}
      {/* <div style={{ width: '20vw' }}>
        {Array(3)
          .fill('')
          .map((i, ii) => (
            <Accordion key={ii}></Accordion>
          ))}
      </div> */}

      {/* <WeatherIcon
        timing={{ sunrise: 1594093958, sunset: 1594153075 }}
        iconId='200'
        className='icon'
        rotate='0'
        // fixedWidth={true}
      /> */}

      {/* <div style={{ width: '150%' }}>
        <WeatherIcon
          timing={{ sunrise: 1594093958, sunset: 1594153075 }}
          iconId='905'
          className='icon'
          rotate='0'
          fixedWidth={false}
        />
      </div> */}

      {/* <WeatherCard
        realtimeResponse={weather1}
        location={'Los Angeles, California, United States'}
      ></WeatherCard> */}
      <div style={{ width: '25%' }}>
        <Accordion></Accordion>
      </div>
    </div>
  );
};

export default Header;
