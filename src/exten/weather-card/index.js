import React, { memo } from 'react';

import RenderIcon from './icons';
import {
  timeValidateSection,
  Temp,
  Visibility,
  WEATHER_ICON_CODES,
} from './icons/parse';
import './trial.css';
import {
  RealTimeBlocks,
  RealTimeBlockDescription,
  RealTimeDescription,
  RealTimeIcon,
  RealTimeSection,
  RealTimeTemp,
  RealTimeTempDegrees,
  WeatherBlocks,
  WeatherCardBase,
  WeatherCardDivider,
  WeatherCardFrame,
  WeatherCardLocalTime,
  WeatherCardLocation,
  WindDirectionComponent,
} from './icon-component';

import './replicated-fxn';

// import owmIcons from '../../weather-icons-lib/utils/icons';
// import styled from 'styled-components';

// const readIcons = Object.entries(owmIcons)
//   .filter((elt) => elt[1].night && elt[1].day)
//   .reduce((uniqueItems, eachSet) => {
//     if (uniqueItems.filter((elt) => elt === eachSet[1].day).length === 0) {
//       uniqueItems.push(eachSet[1].day);
//     }
//     if (uniqueItems.filter((elt) => elt === eachSet[1].night).length === 0) {
//       uniqueItems.push(eachSet[1].night);
//     }
//     return uniqueItems;
//   }, []);
// console.log(readIcons);

const netAnimatedIcons = [];
netAnimatedIcons.push(['cloud_lighting_sun', 'cloudLightningSun']); //DONE
netAnimatedIcons.push(['cloud_lighting_moon', 'cloudLightningMoon']); //DONE
netAnimatedIcons.push(['cloud_drizzle_sun', 'cloudDrizzleSun']); //DONE
netAnimatedIcons.push(['cloud_drizzle_moon', 'cloudDrizzleMoon']); //DONE
netAnimatedIcons.push(['cloud_rain_sun', 'cloudRainSun']); //DONE
netAnimatedIcons.push(['cloud_rain_moon', 'cloudRainMoon']); //DONE
netAnimatedIcons.push(['cloud_rain_alt_sun', 'cloudRainSunAlt']); //DONE
netAnimatedIcons.push(['cloud_rain_alt_moon', 'cloudRainMoonAlt']); //DONE
netAnimatedIcons.push(['cloud_snow_sun', 'cloudSnowSun']); //DONE
netAnimatedIcons.push(['cloud_snow_moon', 'cloudSnowMoon']); //DONE
netAnimatedIcons.push(['cloud_snow_alt_sun', 'cloudSnowSunAlt']); //DONE
netAnimatedIcons.push(['cloud_snow_alt_moon', 'cloudSnowMoonAlt']); //DONE
netAnimatedIcons.push(['cloud_hail_alt_sun', 'cloudHailAltSun']); //DONE
netAnimatedIcons.push(['cloud_hail_alt_moon', 'cloudHailAltMoon']); //DONE
netAnimatedIcons.push(['cloud_fog_sun', 'cloudFogSun']); //DONE
netAnimatedIcons.push(['cloud_fog_moon', 'cloudFogMoon']); //DONE
netAnimatedIcons.push(['cloud_fog_alt_sun', 'cloudFogSunAlt']); //DONE
netAnimatedIcons.push(['cloud_fog_alt_moon', 'cloudFogMoonAlt']); //DONE
netAnimatedIcons.push(['', '']);
netAnimatedIcons.push(['', '']);
netAnimatedIcons.push(['', '']);
netAnimatedIcons.push(['cloud_drizzle', 'cloudDrizzle']); // DONE
netAnimatedIcons.push(['cloud_snow', 'cloudSnow']); // DONE
netAnimatedIcons.push(['', '']);
netAnimatedIcons.push(['', '']);
netAnimatedIcons.push(['wind', 'wind']);
netAnimatedIcons.push(['sunset', 'sunset']);
netAnimatedIcons.push(['sunrise', 'sunrise']);
netAnimatedIcons.push(['tornado', 'tornado']);
netAnimatedIcons.push(['sun', 'sun']);
netAnimatedIcons.push(['moon', 'moon']);
netAnimatedIcons.push(['cloud_sun', 'cloudSun']); // DONE
netAnimatedIcons.push(['cloud_moon', 'cloudMoon']); // DONE

export const RealtimeUpdates = (realtime) => {
  return (
    <>
      <WeatherCardDivider />
      <RealTimeBlocks align='center' type='update'>
        <WeatherBlocks type='update'>
          {RenderIcon({
            iconCode: WEATHER_ICON_CODES.SUNRISE,
            timeStamp: realtime.timeStamp,
            randomStyle: realtime.randomStyle,
          })}
          {'was 12hrs 10mins ago'}
        </WeatherBlocks>
        <WeatherBlocks type='update'>
          {RenderIcon({
            iconCode: WEATHER_ICON_CODES.SUNSET,
            timeStamp: realtime.timeStamp,
            randomStyle: realtime.randomStyle,
          })}
          {'in 6hrs 10mins'}
        </WeatherBlocks>
      </RealTimeBlocks>
    </>
  );
};

export const RealtimeWeather = ({ realtime }) => {
  return (
    <>
      <RealTimeBlocks align='center' type='weather'>
        <WeatherBlocks type='weather'>
          <RealTimeDescription>
            {RenderIcon({
              iconCode: WEATHER_ICON_CODES.DISPLAY_HUMIDITY,
              timeStamp: realtime.timeStamp,
              randomStyle: realtime.randomStyle,
            })}
          </RealTimeDescription>
          <RealTimeBlockDescription delimit='false'>
            {realtime.main.humidity}%
          </RealTimeBlockDescription>
        </WeatherBlocks>
        <WeatherBlocks type='weather'>
          <RealTimeDescription delimit='false'>
            {RenderIcon({
              iconCode: WEATHER_ICON_CODES.DISPLAY_PRECIPITATION,
              timeStamp: realtime.timeStamp,
              randomStyle: realtime.randomStyle,
            })}
          </RealTimeDescription>
          <RealTimeBlockDescription>
            {realtime.main.precipitation}km/hr
          </RealTimeBlockDescription>
        </WeatherBlocks>
        <WeatherBlocks type='weather'>
          <RealTimeDescription delimit='false'>
            {RenderIcon({
              iconCode: WEATHER_ICON_CODES.DISPLAY_PRESSURE,
              timeStamp: realtime.timeStamp,
              randomStyle: realtime.randomStyle,
            })}
          </RealTimeDescription>
          <RealTimeBlockDescription>
            {realtime.main.pressure}
          </RealTimeBlockDescription>
        </WeatherBlocks>
        <WeatherBlocks type='weather'>
          <RealTimeDescription delimit='false'>
            {RenderIcon({
              iconCode: WEATHER_ICON_CODES.DISPLAY_VISIBILITY,
              timeStamp: realtime.timeStamp,
              randomStyle: realtime.randomStyle,
            })}
          </RealTimeDescription>
          <RealTimeBlockDescription>
            {Visibility(realtime.visibility).toTitleCase()}
          </RealTimeBlockDescription>
        </WeatherBlocks>
        <WeatherBlocks type='weather'>
          <RealTimeDescription delimit='false'>
            {RenderIcon({
              iconCode: WEATHER_ICON_CODES.DISPLAY_WIND,
              timeStamp: realtime.timeStamp,
              randomStyle: realtime.randomStyle,
            })}
            {RenderIcon({
              iconCode: WEATHER_ICON_CODES.DISPLAY_WINDDIRECTION,
              timeStamp: realtime.timeStamp,
              randomStyle: realtime.randomStyle,
              Styled: WindDirectionComponent(realtime.wind.deg + 90),
            })}
          </RealTimeDescription>
          <RealTimeBlockDescription>
            {realtime.wind.speed}mps
          </RealTimeBlockDescription>
        </WeatherBlocks>
      </RealTimeBlocks>
      <RealtimeUpdates {...realtime} />
    </>
  );
};

export const RealtimeComponent = ({ realtime, timeStamp, randomStyle }) => {
  return (
    <RealTimeSection align='left'>
      <RealTimeTemp>
        <Temp value={realtime.main.temp} />
      </RealTimeTemp>
      <RealTimeTempDegrees>°C</RealTimeTempDegrees>
      <WeatherBlocks>
        <RealTimeDescription delimit='true'>
          {realtime.weather[0].description.toTitleCase()}
        </RealTimeDescription>
        <RealTimeDescription delimit='false'>
          Feels Like <Temp value={realtime.main.feels_like} />°
        </RealTimeDescription>
      </WeatherBlocks>
      <RealTimeIcon>
        {RenderIcon({
          iconCode: realtime.weather[0].id,
          timeStamp,
          randomStyle,
        })}
      </RealTimeIcon>
    </RealTimeSection>
  );
};

export const WeatherCard = memo(({ realtimeResponse, location }) => {
  // get date returned from hook in top-level component

  const { humidity, pressure, precipitation = 181 } = realtimeResponse.main;
  const [timeStamp, randomStyle, timeSpread] = timeValidateSection({
    now: realtimeResponse.dt,
    sunrise: realtimeResponse.sys.sunrise,
    sunset: realtimeResponse.sys.sunset,
  });

  return (
    <WeatherCardBase>
      <WeatherCardFrame>
        <WeatherCardLocalTime>
          {new Date(realtimeResponse.dt * 1000).toDateString()}
        </WeatherCardLocalTime>
        <WeatherCardLocation>
          {RenderIcon({
            iconCode: WEATHER_ICON_CODES.DISPLAY_WEATHERLOCATION,
            timeStamp,
            randomStyle,
          })}
          {location}
        </WeatherCardLocation>
        <WeatherCardDivider />
        <RealtimeComponent
          {...{ realtime: realtimeResponse, timeStamp, randomStyle }}
        />
        <WeatherCardDivider />
        <RealtimeWeather
          realtime={{
            visibility: realtimeResponse.visibility,
            wind: realtimeResponse.wind,
            main: { humidity, pressure, precipitation },
            timeStamp,
            randomStyle,
            timeSpread,
          }}
        />
      </WeatherCardFrame>
    </WeatherCardBase>
  );
});
