import React from 'react';
import { Cairo } from 'next/font/google';

const cairo = Cairo({
  weight: ['400', '700'], // Specify the weights you need
  subsets: ['latin'], // Specify subsets if needed
});

export default function articles() {

  return (
    <div
      className={`mt-10 py-4 shadow-lg mx-2 ${cairo.className}`}
      style={{ backgroundColor: "black", color: "white", height: "100vh" }}
    >
        
    مقالات
    </div>
  );
}
