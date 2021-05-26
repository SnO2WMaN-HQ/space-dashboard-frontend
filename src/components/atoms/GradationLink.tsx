import React from 'react';
import {tw} from 'twind';

export const GradationLink: React.VFC<{
  className?: string;
  Link: React.FC<{className?: string}>;
  Icon: React.VFC<{className?: string}>;
  i18n: Record<'label', string>;
}> = ({className, Link, Icon, i18n}) => (
  <Link
    className={tw(
      className,
      ['inline-flex', 'items-center', 'justify-center'],
      [
        'bg-gradient-to-r',
        ['from-blue-400', 'via-indigo-400', 'to-purple-400'],
        ['hover:from-blue-500', 'hover:via-indigo-500', 'hover:to-purple-500'],
      ],
      ['rounded-md', 'shadow-sm'],
      ['text-white', 'text-lg'],
    )}
  >
    <Icon className={tw()} />
    <span className={tw('ml-4', ['font-bold', 'tracking-wider'])}>
      {i18n.label}
    </span>
  </Link>
);
