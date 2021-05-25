import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {
  faAt,
  faCalendarDay,
  faCheckSquare,
  faCircleNotch,
  faEllipsisH,
  faExclamationCircle,
  faFileSignature,
  faLaughBeam,
  faPen,
  faPlus,
  faQuestion,
  faSignature,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {tw} from 'twind';

export type IconProps = {className?: string};

export const IconTwiss: React.VFC<IconProps> = ({className}) => (
  <FontAwesomeIcon
    className={tw(className)}
    icon={faUserAstronaut}
    fixedWidth
  />
);

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

export const IconWarning: React.VFC<IconProps> = ({className}) => (
  <FontAwesomeIcon
    className={tw(className)}
    icon={faExclamationCircle}
    fixedWidth
  />
);

export const IconValid: React.VFC<IconProps> = ({className}) => (
  <FontAwesomeIcon className={tw(className)} icon={faCheckSquare} fixedWidth />
);

export const IconTwitter: React.VFC<IconProps> = ({className}) => (
  <FontAwesomeIcon className={tw(className)} icon={faTwitter} fixedWidth />
);

export const IconMore: React.VFC<IconProps> = ({className}) => (
  <FontAwesomeIcon className={tw(className)} icon={faEllipsisH} fixedWidth />
);

export const IconOpenDate: React.VFC<IconProps> = ({className}) => (
  <FontAwesomeIcon className={tw(className)} icon={faCalendarDay} fixedWidth />
);

export const IconAdd: React.VFC<IconProps> = ({className}) => (
  <FontAwesomeIcon className={tw(className)} icon={faPlus} fixedWidth />
);

export const IconUniqueName: React.VFC<IconProps> = ({className}) => (
  <FontAwesomeIcon className={tw(className)} icon={faAt} fixedWidth />
);

export const IconDisplayName: React.VFC<IconProps> = ({className}) => (
  <FontAwesomeIcon className={tw(className)} icon={faAt} fixedWidth />
);

export const IconTitle: React.VFC<IconProps> = ({className}) => (
  <FontAwesomeIcon className={tw(className)} icon={faSignature} fixedWidth />
);

export const IconDescription: React.VFC<IconProps> = ({className}) => (
  <FontAwesomeIcon className={tw(className)} icon={faQuestion} fixedWidth />
);

export const IconMinutes: React.VFC<IconProps> = ({className}) => (
  <FontAwesomeIcon
    className={tw(className)}
    icon={faFileSignature}
    fixedWidth
  />
);
