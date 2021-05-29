import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {Merge} from 'type-fest';
import {IconAdd, IconLoading, IconSubmitted} from '~/components/atoms/Icon';

export type ComponentProps = Merge<
  {className?: string},
  | {state: 'following'}
  | {state: 'changing'}
  | {state: 'unfollowing'; handlePressed(): void}
  | {state: 'hostSame'}
>;
export const Component: React.VFC<ComponentProps> = ({className, ...props}) => {
  const {t} = useTranslation();
  return (
    <>
      {props.state === 'unfollowing' && (
        <button
          type="button"
          className={tw(
            className,
            ['inline-flex', 'justify-center', 'items-center'],
            ['disabled:cursor-default'],
            [
              'bg-gradient-to-r',
              ['from-blue-400', 'via-indigo-400', 'to-purple-400'],
            ],
            ['text-white', 'text-lg'],
          )}
          onClick={props.handlePressed}
          onKeyDown={props.handlePressed}
        >
          <IconAdd />
          <span className={tw('ml-2', ['font-bold', 'tracking-wider'])}>
            {t('space:follow.unfollowing')}
          </span>
        </button>
      )}
      {(props.state === 'following' ||
        props.state === 'changing' ||
        props.state === 'hostSame') && (
        <button
          type="button"
          disabled
          className={tw(
            className,
            ['inline-flex', 'justify-center', 'items-center'],
            ['disabled:cursor-default'],
            props.state === 'following'
              ? [
                  'bg-gradient-to-r',
                  ['from-blue-400', 'via-indigo-400', 'to-purple-400'],
                ]
              : [],
            props.state === 'hostSame'
              ? [
                  'bg-gradient-to-r',
                  ['from-blue-400', 'via-indigo-400', 'to-purple-400'],
                ]
              : [],
            props.state === 'changing' ? ['bg-purple-400'] : [],
            ['text-white', 'text-lg'],
          )}
        >
          {props.state === 'following' && (
            <>
              <IconSubmitted />
              <span className={tw('ml-2', ['font-bold', 'tracking-wider'])}>
                {t('space:follow.following')}
              </span>
            </>
          )}
          {props.state === 'hostSame' && (
            <>
              <IconSubmitted />
              <span className={tw('ml-2', ['font-bold', 'tracking-wider'])}>
                {t('space:follow.host_same')}
              </span>
            </>
          )}
          {props.state === 'changing' && (
            <>
              <IconLoading />
              <span className={tw('ml-2', ['font-bold'])}>
                {t('space:follow.changing')}
              </span>
            </>
          )}
        </button>
      )}
    </>
  );
};
