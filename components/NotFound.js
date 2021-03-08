import Link from 'next/link';
import React from 'react';
import Section from './Section';

export default function NotFound() {
  return (
    <Section>
      <p className='py-16 text-6xl font-light text-primary-dark dark:text-primary'>
        404 | City not found
      </p>
      <Link href='/'>
        <a className='px-8 py-4 font-semibold bg-pink-700 rounded text-primary'>
          Return
        </a>
      </Link>
    </Section>
  );
}
