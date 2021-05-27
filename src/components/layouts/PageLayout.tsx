import React from 'react';
import {tw} from 'twind';

export const PageLayout: React.FC<{className?: string}> = ({
  children,
  className,
}) => (
  <div
    className={tw(className, [
      'bg-gradient-to-r',
      ['from-blue-200', 'via-indigo-200', 'to-purple-300'],
    ])}
  >
    <div
      className={tw(
        'max-w-screen-lg',
        'h-full',
        'mx-auto',
        ['px-2', 'sm:px-3', 'md:px-4'],
        ['py-2', 'sm:py-3', 'md:py-4', 'lg:py-8'],
      )}
    >
      {children}
    </div>
  </div>
);
