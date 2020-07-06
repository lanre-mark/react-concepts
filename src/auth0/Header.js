import React, { useState, useEffect } from 'react';

import { LoginAuthorization } from './now/AuthContextProvider';
import { GeneralDataAdapter } from '../axios/Providers/GeneralDataProvider';

import MainPopup from '../popup/PopupContainer';
import Map04 from '../maptest/map';
import useClockTicker from '../exten/clock/clockhook';

import Accordion from '../exten/collapsible/wrap-collapse';

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
      <div style={{ width: '20vw' }}>
        {Array(3)
          .fill('')
          .map((i, ii) => (
            <Accordion key={ii}></Accordion>
          ))}
      </div>
    </div>
  );
};

export default Header;
