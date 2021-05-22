import clsx from 'clsx';
import React from 'react';

export const SubmitButton: React.VFC<{
  className?: string;
  i18n: Record<'text', string>;
}> = ({className, i18n}) => (
  <input
    id="submit"
    className={clsx(
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
