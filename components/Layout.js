import React from 'react';
import Head from 'next/head';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className='transition-all duration-700 bg-primary dark:bg-primary-dark font-body'>
      <Head>
        <title>Temperator</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {children}
    </div>
  );
}
