import React from 'react';
import ParticlesBG from './ParticlesBG';
import { MdLocationOn } from 'react-icons/md';
import { motion } from 'framer-motion';
import WeatherIcon from './WeatherIcon';

export default function WeatherCard({ today, city }) {
  const currentTemp = Math.round(today.main.temp);
  const currentDescription = today.weather[0].main;

  const colors =
    'bg-secondary-dark dark:bg-secondary text-primary-dark dark:text-primary bg-opacity-10 dark:bg-opacity-10';

  const variants = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={variants}
      transition={{ ease: 'linear', duration: 0.2 }}
      className={`text-center relative flex flex-col lg:flex-row items-center justify-center md:justify-between p-16 rounded-lg shadow-md w-full overflow-hidden ${colors}`}
    >
      <ParticlesBG className='absolute left-0 h-full' />
      <motion.div
        initial='hidden'
        animate='visible'
        variants={variants}
        transition={{ ease: 'linear', duration: 0.2, delay: 0.2 }}
        className='flex-1'
      >
        <span className='inline mr-1 font-medium text-8xl md:text-9xl'>
          {currentTemp}
        </span>
        <span className='text-3xl font-medium align-top md:text-5xl'>°C</span>
      </motion.div>
      <motion.span
        initial='hidden'
        animate='visible'
        variants={variants}
        transition={{ ease: 'linear', duration: 0.2, delay: 0.2 }}
        className='flex items-center justify-center flex-1 my-2 text-2xl uppercase md:text-4xl lg:text-6xl lg:my-0'
      >
        <WeatherIcon weatherCondition={currentDescription} />
        {currentDescription}
      </motion.span>
      <motion.div
        initial='hidden'
        animate='visible'
        variants={variants}
        transition={{ ease: 'linear', duration: 0.2, delay: 0.2 }}
        className='flex-1'
      >
        <span className='flex items-center justify-center mt-8 uppercase'>
          <MdLocationOn className='inline text-lg ' />
          {`${city.name}, ${city.country}`}
        </span>
        <div className='flex items-center justify-center'>
          <span className='my-2 mr-2 text-sm uppercase'>{`${city.coord.lat}° ${
            city.coord.lat > 0 ? 'N' : 'S'
          }`}</span>
          <span className='my-2 ml-2 text-sm uppercase'>{`${city.coord.lon}° ${
            city.coord.lon > 0 ? 'E' : 'W'
          }`}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
