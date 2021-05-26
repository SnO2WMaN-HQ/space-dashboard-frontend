import React from 'react';
import {tw} from 'twind';
import {LinkSpace} from '~/components/atoms/Link';

export const BlockTitle: React.VFC<{
  className?: string;
  id: string;
  title: string;
}> = ({className, id, title}) => (
  <LinkSpace
    className={tw(className, 'block', 'text-lg', 'font-bold')}
    query={{id}}
  >
    {title}
  </LinkSpace>
);
