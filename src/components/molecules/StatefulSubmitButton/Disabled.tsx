import {
  faCircleNotch,
  faExclamationCircle,
  faLaughBeam,
  faPen,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {tw} from 'twind';

export const Disabled: React.VFC<{
  className?: string;
  Icon: React.VFC<{className?: string}>;
  i18n: Record<'text', string>;
}> = ({className, Icon, i18n}) => (
  <div
    className={tw(className, ['inline-flex', 'items-center'])}
    aria-label={i18n.text}
  >
    <Icon className={tw('text-lg')} />
    <span className={tw('ml-2', 'font-bold', 'tracking-wider')}>
      {i18n.text}
    </span>
  </div>
);

export const Untouched: React.VFC<{
  className?: string;
  i18n: Record<'text', string>;
}> = ({className, i18n}) => (
  <Disabled
    className={tw(className, 'bg-gray-300', 'text-gray-400')}
    Icon={({className}) => (
      <FontAwesomeIcon className={tw(className)} icon={faPen} fixedWidth />
    )}
    i18n={{text: i18n.text}}
  />
);

export const Validating: React.VFC<{
  className?: string;
  i18n: Record<'text', string>;
}> = ({className, i18n}) => (
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
    i18n={{text: i18n.text}}
  />
);

export const Invalid: React.VFC<{
  className?: string;
  i18n: Record<'text', string>;
}> = ({className, i18n}) => (
  <Disabled
    className={tw(className, 'bg-red-400', 'text-white')}
    Icon={({className}) => (
      <FontAwesomeIcon
        className={tw(className)}
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
    className={tw(className, 'bg-purple-400', 'text-white')}
    Icon={({className}) => (
      <FontAwesomeIcon
        className={tw(className)}
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
    className={tw(className, 'bg-pink-400', 'text-white')}
    Icon={({className}) => (
      <FontAwesomeIcon
        className={tw(className)}
        icon={faLaughBeam}
        fixedWidth
      />
    )}
    i18n={{text: i18n.text}}
  />
);
