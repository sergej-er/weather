import React from 'react';
import Head from 'next/head';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className='transition-all duration-700 bg-primary dark:bg-primary-dark font-body'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {/* <div className='flex flex-col items-center justify-center font-light dark:text-primary text-primary-dark'> */}
      {children}
      {/* </div> */}
    </div>
  );
}
