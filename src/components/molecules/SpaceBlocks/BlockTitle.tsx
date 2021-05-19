import clsx from 'clsx';
import NextLink from 'next/link';
import React from 'react';

export const BlockTitle: React.VFC<{
  className?: string;
  id: string;
  title: string;
}> = ({className, id, title}) => (
  <NextLink href={`/spaces/${id}`}>
    <a className={clsx(className, 'block', 'text-lg', 'font-bold')}>{title}</a>
  </NextLink>
);
