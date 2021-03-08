import React from 'react';
import {
  WiCloudy,
  WiDaySunny,
  WiRain,
  WiShowers,
  WiThunderstorm,
  WiSnow,
  WiFog,
} from 'react-icons/wi';

export default function WeatherIcon({ weatherCondition }) {
  const style = '';

  switch (weatherCondition) {
    case 'Clouds':
      return <WiCloudy className={style} />;
      break;
    case 'Clear':
      return <WiDaySunny className={style} />;
      break;
    case 'Rain':
      return <WiRain className={style} />;
      break;
    case 'Drizzle':
      return <WiShowers className={style} />;
      break;
    case 'Thunderstorm':
      return <WiThunderstorm className={style} />;
      break;
    case 'Snow':
      return <WiSnow className={style} />;
      break;
    default:
      return <WiFog className={style} />;
      break;
  }
}
