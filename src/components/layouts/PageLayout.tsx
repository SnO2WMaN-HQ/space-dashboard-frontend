import React from 'react';
import {tw} from 'twind';

export const PageLayout: React.FC<{className?: string}> = ({
  children,
  className,
}) => (
  <div
    className={tw(className, 'w-full', [
      'bg-gradient-to-l',
      'from-blue-200',
      'via-indigo-200',
      'to-purple-200',
    ])}
  >
    <div
      className={tw(
        'mx-auto',
        'max-w-screen-lg',
        ['px-2', 'sm:px-3', 'md:px-4'],
        ['py-2', 'sm:py-3', 'md:py-4'],
      )}
    >
      {children}
    </div>
  </div>
);
