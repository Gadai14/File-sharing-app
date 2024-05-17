import React from 'react';
import Constant from '../_utils/Constant';

function Hero() {
  return (
    <section className="bg-gray-50 h-screen-full">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
          <span className='text-gray-800'>Share Beyond Limits </span> <span className='text-red-700'>Secure Beyond Compare</span>
          </h1>

          <p className="mt-4 text-xl/relaxed text-gray-600">
            {Constant.desc}
            
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/upload"
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-white hover:text-black focus:outline-none focus:ring  sm:w-auto"
            >
              Get Started
            </a>

            <a
              href="#"
              className="block w-full rounded px-12 py-3 text-sm font-medium text-black shadow hover:text-blue-700 focus:outline-none focus:ring active:blue-red-500 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
