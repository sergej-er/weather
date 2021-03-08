import React from 'react';

export default function Section({ children }) {
  return (
    <div className='flex flex-col items-center justify-center px-8 py-8 md:px-32 lg:px-64 md:py-16 h-full-no-header'>
      {children}
    </div>
  );
}
