import NextLink from 'next/link';
import React from 'react';
import {tw} from 'twind';

type LinkProps = {
  className?: string;
};

export const LinkNew: React.FC<LinkProps> = ({children, className}) => (
  <NextLink href="/new">
    <a className={tw(className)}>{children}</a>
  </NextLink>
);

export const LinkTimeline: React.FC<LinkProps> = ({children, className}) => (
  <NextLink href="/timeline">
    <a className={tw(className)}>{children}</a>
  </NextLink>
);
