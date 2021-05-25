import React from 'react';
import {tw} from 'twind';

export const SectionFrame: React.FC<{className?: string}> = ({
  className,
  children,
}) => (
  <div
    className={tw(
      className,
      ['px-2', 'md:px-4'],
      ['py-4'],
      ['bg-opacity-50', 'bg-white'],
      ['shadow-sm', 'rounded-sm'],
    )}
  >
    {children}
  </div>
);
