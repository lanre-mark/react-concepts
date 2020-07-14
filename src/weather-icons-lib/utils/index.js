import owmIcons from './icons';

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

export default (id, timing) => {
  if (owmIcons[id]) {
    let prefix = 'wi wi-';
    let icon = owmIcons[id].icon;
    // If we are not in the ranges mentioned above, add a day/night prefix.
    // is ID numeric, then proceed otherwise treat as a default/miscellaneous icon
    if (isNumber(id)) {
      // then icon is a default open weather and not the miscellaneous in the json
      const currentDate = new Date();
      const sunrise = new Date(timing.sunrise * 1000); //Convert a Unix timestamp to time
      const sunset = new Date(timing.sunset * 1000);
      console.log('Current Date :: ', currentDate);
      console.log('Current Sunrise :: ', sunrise);
      console.log('Current Sunset :: ', sunset);
      /* Get suitable icon for weather */
      if (
        currentDate.getHours() >= sunrise.getHours() &&
        currentDate.getHours() < sunset.getHours()
      ) {
        icon = 'day-' + icon;
        console.log('Time is day');
        // icon = `owm-day-${result.data.weather[0].id}`;
      } else if (
        currentDate.getHours() >= sunset.getHours() ||
        currentDate.getHours() < sunrise.getHours()
      ) {
        // icon = icon === 'sunny' ? 'clear' : icon;
        // icon = 'night-' + icon;
        console.log('Time is night');
        icon = icon === 'sunny' ? 'clear' : 'night-' + icon;
        // icon = `owm-night-${result.data.weather[0].id}`;
      }

      // if (!(id > 699 && id < 800) && !(id > 899 && id < 1000)) {
      //   icon = night && icon === 'sunny' ? 'clear' : icon;
      //   icon = (night ? 'night-' : 'day-') + icon;
      // }
    }

    icon = prefix + icon;
    return icon;
  }
  throw new Error('ID passed to component invalid');
};
