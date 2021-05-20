import {
  faCircleNotch,
  faExclamationCircle,
  faLaughBeam,
  faPen,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import {useTranslation} from 'next-i18next';
import React from 'react';

export type ExpectedState =
  | {isUntouched: true}
  | {isValidating: true}
  | {isValid: false}
  | {isValid: true}
  | {isSubmitting: true}
  | {isCompleted: true};
export type ComponentProps = ExpectedState & {className?: string};

export const Disabled: React.VFC<{
  className?: string;
  Icon: React.VFC<{className?: string}>;
  i18n: Record<'text', string>;
}> = ({className, Icon, i18n}) => (
  <div
    className={clsx(
      className,
      'inline-flex',
      'items-center',
      'py-3',
      'px-6',
      'rounded-sm',
      'shadow-sm',
    )}
    aria-label={i18n.text}
  >
    <Icon className={clsx('text-lg')} />
    <span className={clsx('ml-2', 'font-bold', 'tracking-wider')}>
      {i18n.text}
    </span>
  </div>
);

export const Component: React.VFC<ComponentProps> = ({className, ...props}) => {
  const {t} = useTranslation('signup');

  return (
    <>
      {'isUntouched' in props && (
        <Disabled
          className={clsx(className, 'bg-gray-300', 'text-gray-400')}
          Icon={({className}) => (
            <FontAwesomeIcon
              className={clsx(className)}
              icon={faPen}
              fixedWidth
            />
          )}
          i18n={{text: t('signup:require_input')}}
        />
      )}
      {'isValidating' in props && props.isValidating && (
        <Disabled
          className={clsx(className, 'bg-gray-300', 'text-gray-400')}
          Icon={({className}) => (
            <FontAwesomeIcon
              className={clsx(className)}
              icon={faCircleNotch}
              spin
              fixedWidth
            />
          )}
          i18n={{text: t('signup:validating')}}
        />
      )}
      {'isValid' in props && !props.isValid && (
        <Disabled
          className={clsx(className, 'bg-red-400', 'text-white')}
          Icon={({className}) => (
            <FontAwesomeIcon
              className={clsx(className)}
              icon={faExclamationCircle}
              fixedWidth
            />
          )}
          i18n={{text: t('signup:invalid')}}
        />
      )}
      {'isSubmitting' in props && (
        <Disabled
          className={clsx(className, 'bg-purple-400', 'text-white')}
          Icon={({className}) => (
            <FontAwesomeIcon
              className={clsx(className)}
              icon={faCircleNotch}
              spin
              fixedWidth
            />
          )}
          i18n={{text: t('signup:submitting')}}
        />
      )}
      {'isCompleted' in props && (
        <Disabled
          className={clsx(className, 'bg-pink-400', 'text-white')}
          Icon={({className}) => (
            <FontAwesomeIcon
              className={clsx(className)}
              icon={faLaughBeam}
              fixedWidth
            />
          )}
          i18n={{text: t('signup:completed')}}
        />
      )}
      {'isValid' in props && props.isValid && (
        <label className={clsx(className, 'inline-flex')} htmlFor="submit">
          <input
            id="submit"
            className={clsx(
              'py-3',
              'px-6',
              'rounded-sm',
              'shadow-sm',
              'font-bold',
              'tracking-wider',
              'text-white',
              'bg-blue-400',
              'hover:bg-blue-500',
            )}
            type="submit"
            aria-label={t('signup:valid')}
            value={t('signup:valid') as string}
          />
        </label>
      )}
    </>
  );
};
