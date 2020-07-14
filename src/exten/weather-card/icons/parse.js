import StaticWind from './static/wind';
import StaticHumidity from './static/humidity';
import StaticPrecipitation from './static/precipitation';
import StaticPressure from './static/pressure';
import StaticSolarRadiation from './static/solar-radiation';
import StaticSunrise from './static/sunrise';
import StaticSunset from './static/sunset';
import StaticTemperature from './static/temp';
import StaticVisibility from './static/visibility';
import StaticWeatherLocation from './static/weather-location-pin';
import StaticWindDirection from './static/wind-direction-arrow';

import AnimatedDrizzle from './animated/cloud-drizzle';
import AnimatedCloudDay from './animated/cloud-day';
import AnimatedDrizzleDay from './animated/cloud-drizzle-day';
import AnimatedDrizzleNight from './animated/cloud-drizzle-night';
import AnimatedFogAltDay from './animated/cloud-fog-alt-day';
import AnimatedFogAltNight from './animated/cloud-fog-alt-night';
import AnimatedFogDay from './animated/cloud-fog-day';
import AnimatedFogNight from './animated/cloud-fog-night';
import AnimatedHailAltDay from './animated/cloud-hail-alt-day';
import AnimatedHailAltNight from './animated/cloud-hail-alt-night';
import AnimatedLightningDay from './animated/cloud-lightning-day';
import AnimatedLightningNight from './animated/cloud-lightning-night';
import AnimatedCloudNight from './animated/cloud-night';
import AnimatedRainAltDay from './animated/cloud-rain-alt-day';
import AnimatedRainAltNight from './animated/cloud-rain-alt-night';
import AnimatedRainDay from './animated/cloud-rain-day';
import AnimatedRainNight from './animated/cloud-rain-night';
import AnimatedCloudSnow from './animated/cloud-snow';
import AnimatedSnowAltDay from './animated/cloud-snow-alt-day';
import AnimatedSnowAltNight from './animated/cloud-snow-alt-night';
import AnimatedSnowDay from './animated/cloud-snow-day';
import AnimatedSnowNight from './animated/cloud-snow-night';
import AnimatedMoon from './animated/moon';
import AnimatedSun from './animated/sun';
import AnimatedSunrise from './animated/sunrise';
import AnimatedSunset from './animated/sunset';
import AnimatedTornado from './animated/tornado';
import AnimatedWind from './animated/wind';
// import Animated from './animated';
// import Animated from './animated';
// import Animated from './animated';
// import Animated from './animated';
// import Animated from './animated';

import iconDict from './icons';
// import Icon from '../../../popup/close-icon';

export const WEATHER_ICON_CODES = {
  DISPLAY_WIND: 'show_wind',
  DISPLAY_HUMIDITY: 'show_humidity',
  DISPLAY_PRECIPITATION: 'show_precipitation',
  DISPLAY_PRESSURE: 'show_pressure',
  DISPLAY_SOLARRADIATION: 'show_solarradiaiton',
  DISPLAY_SUNRISE: 'show_sunrise',
  DISPLAY_SUNSET: 'show_sunset',
  DISPLAY_TEMPERATURE: 'show_temperature',
  DISPLAY_VISIBILITY: 'show_visibility',
  DISPLAY_WEATHERLOCATION: 'show_location',
  DISPLAY_WINDDIRECTION: 'show_direction',

  LIGHTNING_DAY: 'cloud_lighting_sun',
  CLOUD_NIGHT: 'cloud_moon',
  CLOUD_DAY: 'cloud_sun',
  MOON: 'moon',
  SUN: 'sun',
  TORNADO: 'tornado',
  SUNRISE: 'sunrise',
  DRIZZLE: 'cloud_drizzle',
  SNOW: 'cloud_snow',
  WIND: 'wind',
  SUNSET: 'sunset',
  FOG_ALT_NIGHT: 'cloud_fog_alt_moon',
  FOG_ALT_DAY: 'cloud_fog_alt_sun',
  FOG_NIGHT: 'cloud_fog_moon',
  FOG_DAY: 'cloud_fog_sun',
  HAIL_ALT_NIGHT: 'cloud_hail_alt_moon',
  HAIL_ALT_DAY: 'cloud_hail_alt_sun',
  SNOW_ALT_NIGHT: 'cloud_snow_alt_moon',
  SNOW_ALT_DAY: 'cloud_snow_alt_sun',
  SNOW_NIGHT: 'cloud_snow_moon',
  SNOW_DAY: 'cloud_snow_sun',
  RAIN_ALT_NIGHT: 'cloud_rain_alt_moon',
  RAIN_ALT_DAY: 'cloud_rain_alt_sun',
  RAIN_NIGHT: 'cloud_rain_moon',
  RAIN_DAY: 'cloud_rain_sun',
  DRIZZLE_NIGHT: 'cloud_drizzle_moon',
  DRIZZLE_DAY: 'cloud_drizzle_sun',
  LIGHTNING_NIGHT: 'cloud_lighting_moon',
  // :'',
  // :'',
  // :'',
  // :'',
  // :'',
  // :'',
};

const isOperationCode = (code) => {
  return (
    Object.values(WEATHER_ICON_CODES).filter((cde) => cde === code).length > 0
  );
};

export const timeValidateSection = (timeStamp) => {
  return [dateIsNight(timeStamp), Math.ceil(Math.random() * 3)];
};

const dateIsNight = (timeStamp) => {
  if (timeStamp.now && timeStamp.sunrise && timeStamp.sunset) {
    const currentDate = new Date(timeStamp.now * 1000);
    const sunrise = new Date(timeStamp.sunrise * 1000); //Convert a Unix timestamp to time
    const sunset = new Date(timeStamp.sunset * 1000);
    console.log('Current Date :: ', currentDate);
    // console.log('Locat Weather Date :: ', new Date(currentDate).toDateString());
    console.log('Current Sunrise :: ', sunrise);
    console.log('Current Sunset :: ', sunset);
    if (timeStamp.now > timeStamp.sunrise) {
      // console.log('Sunrise :: ', sunrise);
    } else {
    }
    if (timeStamp.now > timeStamp.sunset) {
      // console.log('Sunrise :: ', sunrise);
    } else {
    }
    if (
      currentDate.getHours() >= sunrise.getHours() &&
      currentDate.getHours() < sunset.getHours()
    ) {
      return 'day';
    } else if (
      currentDate.getHours() >= sunset.getHours() ||
      currentDate.getHours() < sunrise.getHours()
    ) {
      return 'night';
    }
  }
  return 'day';
};

export const Temp = ({ value }) => {
  try {
    const number = Number.parseFloat(value);
    return `${number}`; //.toFixed(0)
  } catch (e) {
    return '';
  }
};

export const Visibility = (meters) => {
  const km2mi = Math.round(meters / 1000 / 1.60934);
  if (km2mi <= 0.03) return 'dense fog';
  else if (km2mi > 0.03 && km2mi <= 0.16) return 'moderate fog';
  else if (km2mi > 0.16 && km2mi <= 0.35) return 'light fog';
  else if (km2mi > 0.35 && km2mi <= 1.03) return 'very light fog';
  else if (km2mi > 1.03 && km2mi <= 2.16) return 'light mist';
  else if (km2mi > 2.16 && km2mi <= 5.4) return 'very light mist';
  else if (km2mi > 5.4 && km2mi <= 10.08) return 'very light mist';
  else if (km2mi > 10.08) return 'very clear';
};

const parseIcon = (iconCode, timeStamp) => {
  const IconCode = isOperationCode(iconCode)
    ? iconCode
    : iconDict[iconCode]
    ? iconDict[iconCode][timeStamp] //dateIsNight(timeStamp)
    : null;
  // console.log('Parsed Icon :: ', IconCode);
  switch (IconCode) {
    case WEATHER_ICON_CODES.DISPLAY_WIND:
      return [StaticWind, false];
    case WEATHER_ICON_CODES.DISPLAY_HUMIDITY:
      return [StaticHumidity, false];
    case WEATHER_ICON_CODES.DISPLAY_PRECIPITATION:
      return [StaticPrecipitation, false];
    case WEATHER_ICON_CODES.DISPLAY_PRESSURE:
      return [StaticPressure, false];
    case WEATHER_ICON_CODES.DISPLAY_SOLARRADIATION:
      return [StaticSolarRadiation, false];
    case WEATHER_ICON_CODES.DISPLAY_SUNRISE:
      return [StaticSunrise, false];
    case WEATHER_ICON_CODES.DISPLAY_SUNSET:
      return [StaticSunset, false];
    case WEATHER_ICON_CODES.DISPLAY_TEMPERATURE:
      return [StaticTemperature, false];
    case WEATHER_ICON_CODES.DISPLAY_VISIBILITY:
      return [StaticVisibility, false];
    case WEATHER_ICON_CODES.DISPLAY_WEATHERLOCATION:
      return [StaticWeatherLocation, false];
    case WEATHER_ICON_CODES.DISPLAY_WINDDIRECTION:
      return [StaticWindDirection, false];
    case WEATHER_ICON_CODES.LIGHTNING_DAY:
      return [AnimatedLightningDay, true];
    case WEATHER_ICON_CODES.CLOUD_NIGHT:
      return [AnimatedCloudNight, true];
    case WEATHER_ICON_CODES.CLOUD_DAY:
      return [AnimatedCloudDay, true];
    case WEATHER_ICON_CODES.MOON:
      return [AnimatedMoon, true];
    case WEATHER_ICON_CODES.SUN:
      return [AnimatedSun, true];
    case WEATHER_ICON_CODES.TORNADO:
      return [AnimatedTornado, true];
    case WEATHER_ICON_CODES.SUNRISE:
      return [AnimatedSunrise, true];
    case WEATHER_ICON_CODES.DRIZZLE:
      return [AnimatedDrizzle, true];
    case WEATHER_ICON_CODES.SNOW:
      return [AnimatedCloudSnow, true];
    case WEATHER_ICON_CODES.WIND:
      return [AnimatedWind, true];
    case WEATHER_ICON_CODES.SUNSET:
      return [AnimatedSunset, true];
    case WEATHER_ICON_CODES.FOG_ALT_NIGHT:
      return [AnimatedFogAltNight, true];
    case WEATHER_ICON_CODES.FOG_ALT_DAY:
      return [AnimatedFogAltDay, true];
    case WEATHER_ICON_CODES.FOG_NIGHT:
      return [AnimatedFogNight, true];
    case WEATHER_ICON_CODES.FOG_DAY:
      return [AnimatedFogDay, true];
    case WEATHER_ICON_CODES.HAIL_ALT_NIGHT:
      return [AnimatedHailAltNight, true];
    case WEATHER_ICON_CODES.HAIL_ALT_DAY:
      return [AnimatedHailAltDay, true];
    case WEATHER_ICON_CODES.SNOW_ALT_NIGHT:
      return [AnimatedSnowAltNight, true];
    case WEATHER_ICON_CODES.SNOW_ALT_DAY:
      return [AnimatedSnowAltDay, true];
    case WEATHER_ICON_CODES.SNOW_NIGHT:
      return [AnimatedSnowNight, true];
    case WEATHER_ICON_CODES.SNOW_DAY:
      return [AnimatedSnowDay, true];
    case WEATHER_ICON_CODES.RAIN_ALT_NIGHT:
      return [AnimatedRainAltNight, true];
    case WEATHER_ICON_CODES.RAIN_ALT_DAY:
      return [AnimatedRainAltDay, true];
    case WEATHER_ICON_CODES.RAIN_NIGHT:
      return [AnimatedRainNight, true];
    case WEATHER_ICON_CODES.RAIN_DAY:
      return [AnimatedRainDay, true];
    case WEATHER_ICON_CODES.DRIZZLE_NIGHT:
      return [AnimatedDrizzleNight, true];
    case WEATHER_ICON_CODES.DRIZZLE_DAY:
      return [AnimatedDrizzleDay, true];
    case WEATHER_ICON_CODES.LIGHTNING_NIGHT:
      return [AnimatedLightningNight, true];
    default:
      return [null, false];
  }
};

export default parseIcon;
