import {
  faCheckSquare,
  faCircleNotch,
  faExclamationCircle,
  faLaughBeam,
  faPen,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {tw} from 'twind';

export type IconProps = {className?: string};

export const IconLoading: React.VFC<IconProps> = ({className}) => (
  <FontAwesomeIcon
    className={tw(className)}
    icon={faCircleNotch}
    spin
    fixedWidth
  />
);

export const IconUntouched: React.VFC<IconProps> = ({className}) => (
  <FontAwesomeIcon className={tw(className)} icon={faPen} fixedWidth />
);

export const IconSubmitted: React.VFC<IconProps> = ({className}) => (
  <FontAwesomeIcon className={tw(className)} icon={faLaughBeam} fixedWidth />
);

export const IconInvalid: React.VFC<IconProps> = ({className}) => (
  <FontAwesomeIcon
    className={tw(className)}
    icon={faExclamationCircle}
    fixedWidth
  />
);

export const IconValid: React.VFC<IconProps> = ({className}) => (
  <FontAwesomeIcon className={tw(className)} icon={faCheckSquare} fixedWidth />
);
