import React from 'react';
import { FiSun } from 'react-icons/fi';
import DarkModeToggle from './DarkModeToggle';
import ParticlesBG from './ParticlesBG';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex items-center justify-between w-full h-16 px-8 overflow-hidden transition-colors duration-700 shadow-lg md:px-32 lg:px-64 '>
      <ParticlesBG className='absolute left-0 h-16' />
      <div className='flex items-center h-full text-xl dark:text-primary text-primary-dark'>
        <motion.span
          className='inline'
          animate={{ rotate: 360 }}
          transition={{ ease: 'linear', duration: 10, repeat: Infinity }}
        >
          <FiSun />
        </motion.span>
        <span className='h-8 ml-2 border-l-2 border-pink-600'></span>
        <Link href='/'>
          <a className='z-10 ml-2 font-bold'>Temperator</a>
        </Link>
      </div>
      <DarkModeToggle />
    </header>
  );
}
