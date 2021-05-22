import {
  faCircleNotch,
  faExclamationCircle,
  faLaughBeam,
  faPen,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';

export const Disabled: React.VFC<{
  className?: string;
  Icon: React.VFC<{className?: string}>;
  i18n: Record<'text', string>;
}> = ({className, Icon, i18n}) => (
  <div
    className={clsx(className, ['inline-flex', 'items-center'])}
    aria-label={i18n.text}
  >
    <Icon className={clsx('text-lg')} />
    <span className={clsx('ml-2', 'font-bold', 'tracking-wider')}>
      {i18n.text}
    </span>
  </div>
);

export const Untouched: React.VFC<{
  className?: string;
  i18n: Record<'text', string>;
}> = ({className, i18n}) => (
  <Disabled
    className={clsx(className, 'bg-gray-300', 'text-gray-400')}
    Icon={({className}) => (
      <FontAwesomeIcon className={clsx(className)} icon={faPen} fixedWidth />
    )}
    i18n={{text: i18n.text}}
  />
);

export const Validating: React.VFC<{
  className?: string;
  i18n: Record<'text', string>;
}> = ({className, i18n}) => (
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
    i18n={{text: i18n.text}}
  />
);

export const Invalid: React.VFC<{
  className?: string;
  i18n: Record<'text', string>;
}> = ({className, i18n}) => (
  <Disabled
    className={clsx(className, 'bg-red-400', 'text-white')}
    Icon={({className}) => (
      <FontAwesomeIcon
        className={clsx(className)}
        icon={faExclamationCircle}
        fixedWidth
      />
    )}
    i18n={{text: i18n.text}}
  />
);

export const Submitting: React.VFC<{
  className?: string;
  i18n: Record<'text', string>;
}> = ({className, i18n}) => (
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
    i18n={{text: i18n.text}}
  />
);

export const Completed: React.VFC<{
  className?: string;
  i18n: Record<'text', string>;
}> = ({className, i18n}) => (
  <Disabled
    className={clsx(className, 'bg-pink-400', 'text-white')}
    Icon={({className}) => (
      <FontAwesomeIcon
        className={clsx(className)}
        icon={faLaughBeam}
        fixedWidth
      />
    )}
    i18n={{text: i18n.text}}
  />
);
