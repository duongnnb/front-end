import React from 'react';

const sizeClasses = {
  height: 'h-32',
  width: 'h-32',
};

export default function DestinationCard({
  city,
  imageUrl,
  imageAlt,
  averagePrice,
  propertyCount,
}) {
  return (
    <div
      key={city}
      className='flex items-center rounded-lg bg-white shadow-lg overflow-hidden'
    >
      <img
        className={`${sizeClasses.height} ${sizeClasses.width} flex-shrink-0`}
        src={imageUrl}
        alt={imageAlt}
      />
      <div className='px-6 py-4'>
        <h3 className='text-lg font-semibold text-gray-800'>Toronto</h3>
        <p className='text-gray-600'>${averagePrice} / night average</p>
        <div className='mt-4'>
          <a
            href='#'
            className='text-brand hover:text-brand-light font-semibold text-sm'
          >
            Explore {propertyCount} properties
          </a>
        </div>
      </div>
    </div>
  );
}
