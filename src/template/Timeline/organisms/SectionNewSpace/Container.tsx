import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {SectionFrame} from '~/template/User/atoms/SectionFrame';
import {NewSpaceLink} from '../../molecules/NewSpaceLink';

export type ContainerProps = {
  className?: string;
  uniqueName: string;
  displayName: string;
  picture: string;
};
export const Container: React.VFC<ContainerProps> = ({className}) => {
  const {t} = useTranslation('user');

  return (
    <SectionFrame className={tw(className)}>
      <NewSpaceLink className={tw('w-full', ['py-4'])} />
    </SectionFrame>
  );
};
