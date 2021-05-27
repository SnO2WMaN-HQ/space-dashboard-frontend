import NextLink from 'next/link';
import React from 'react';
import {tw} from 'twind';
import {Merge} from 'type-fest';

export type LinkProps = {className?: string};

export type DynamicLInkProps<
  TQuery extends Record<string, string> = Record<string, never>,
> = Merge<LinkProps, {query: TQuery}>;

export const LinkIndex: React.FC<Omit<LinkProps, 'query'>> = ({
  children,
  className,
}) => (
  <NextLink href="/index">
    <a className={tw(className)}>{children}</a>
  </NextLink>
);

export const LinkRegister: React.FC<Omit<LinkProps, 'query'>> = ({
  children,
  className,
}) => (
  <NextLink href="/register">
    <a className={tw(className)}>{children}</a>
  </NextLink>
);

export const LinkNew: React.FC<Omit<LinkProps, 'query'>> = ({
  children,
  className,
}) => (
  <NextLink href="/new">
    <a className={tw(className)}>{children}</a>
  </NextLink>
);

export const LinkTimeline: React.FC<LinkProps> = ({children, className}) => (
  <NextLink href="/timeline">
    <a className={tw(className)}>{children}</a>
  </NextLink>
);

export const LinkSpace: React.FC<DynamicLInkProps<{id: string}>> = ({
  children,
  className,
  query,
}) => (
  <NextLink href={`/spaces/${query.id}`}>
    <a className={tw(className)}>{children}</a>
  </NextLink>
);

export const LinkUser: React.FC<DynamicLInkProps<{unique: string}>> = ({
  children,
  className,
  query,
}) => (
  <NextLink href={`/users/${query.unique}`}>
    <a className={tw(className)}>{children}</a>
  </NextLink>
);
