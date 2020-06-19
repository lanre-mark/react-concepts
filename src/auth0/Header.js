import React, { useState, useEffect } from 'react';

import { LoginAuthorization } from './now/AuthContextProvider';
import { GeneralDataAdapter } from '../axios/Providers/GeneralDataProvider';

import MainPopup from '../popup/PopupContainer';
import Map04 from '../maptest/map';

const Header = () => {
  const {
    // isAuthenticated,
    // userProfile,
    handleLogin,
    logout,
  } = LoginAuthorization();

  const { getGeneralData } = GeneralDataAdapter();

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
      <Map04></Map04>
    </div>
  );
};

export default Header;
