import React from 'react';
import {tw} from 'twind';

export const SubmitButton: React.VFC<{
  className?: string;
  i18n: Record<'text', string>;
}> = ({className, i18n}) => (
  <input
    id="submit"
    className={tw(
      className,
      'inline-flex',
      ['font-bold', 'tracking-wider'],
      ['bg-blue-400', 'hover:bg-blue-500'],
      'text-white',
    )}
    type="submit"
    aria-label={i18n.text}
    value={i18n.text}
  />
);
