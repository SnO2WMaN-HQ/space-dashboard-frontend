import NextLink from 'next/link';
import React from 'react';
import {tw} from 'twind';

export const BlockTitle: React.VFC<{
  className?: string;
  id: string;
  title: string;
}> = ({className, id, title}) => (
  <NextLink href={`/spaces/${id}`}>
    <a className={tw(className, 'block', 'text-lg', 'font-bold')}>{title}</a>
  </NextLink>
);
