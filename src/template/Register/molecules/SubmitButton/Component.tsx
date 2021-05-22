import {
  faCircleNotch,
  faExclamationCircle,
  faLaughBeam,
  faPen,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';

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
    className={tw(
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
    <Icon className={tw('text-lg')} />
    <span className={tw('ml-2', 'font-bold', 'tracking-wider')}>
      {i18n.text}
    </span>
  </div>
);

export const Component: React.VFC<ComponentProps> = ({className, ...props}) => {
  const {t} = useTranslation();

  return (
    <>
      {'isUntouched' in props && (
        <Disabled
          className={tw(className, 'bg-gray-300', 'text-gray-400')}
          Icon={({className}) => (
            <FontAwesomeIcon
              className={tw(className)}
              icon={faPen}
              fixedWidth
            />
          )}
          i18n={{text: t('register:require_input')}}
        />
      )}
      {'isValidating' in props && props.isValidating && (
        <Disabled
          className={tw(className, 'bg-gray-300', 'text-gray-400')}
          Icon={({className}) => (
            <FontAwesomeIcon
              className={tw(className)}
              icon={faCircleNotch}
              spin
              fixedWidth
            />
          )}
          i18n={{text: t('register:validating')}}
        />
      )}
      {'isValid' in props && !props.isValid && (
        <Disabled
          className={tw(className, 'bg-red-400', 'text-white')}
          Icon={({className}) => (
            <FontAwesomeIcon
              className={tw(className)}
              icon={faExclamationCircle}
              fixedWidth
            />
          )}
          i18n={{text: t('register:invalid')}}
        />
      )}
      {'isSubmitting' in props && (
        <Disabled
          className={tw(className, 'bg-purple-400', 'text-white')}
          Icon={({className}) => (
            <FontAwesomeIcon
              className={tw(className)}
              icon={faCircleNotch}
              spin
              fixedWidth
            />
          )}
          i18n={{text: t('register:submitting')}}
        />
      )}
      {'isCompleted' in props && (
        <Disabled
          className={tw(className, 'bg-pink-400', 'text-white')}
          Icon={({className}) => (
            <FontAwesomeIcon
              className={tw(className)}
              icon={faLaughBeam}
              fixedWidth
            />
          )}
          i18n={{text: t('register:completed')}}
        />
      )}
      {'isValid' in props && props.isValid && (
        <label className={tw(className, 'inline-flex')} htmlFor="submit">
          <input
            id="submit"
            className={tw(
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
            aria-label={t('register:valid')}
            value={t('register:valid') as string}
          />
        </label>
      )}
    </>
  );
};
