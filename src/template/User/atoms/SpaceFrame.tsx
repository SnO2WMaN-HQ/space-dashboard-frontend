import React from 'react';
import {tw} from 'twind';

export const SpaceFrame: React.FC<{className?: string}> = ({
  className,
  children,
}) => (
  <div
    className={tw(
      className,
      ['bg-white'],
      ['bg-opacity-70', 'hover:bg-opacity-90'],
      ['transition-color', 'duration-200'],
      ['px-4', 'py-2'],
      ['rounded-md', 'shadow-md'],
    )}
  >
    {children}
  </div>
);
