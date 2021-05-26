import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {GradationLink} from '~/components/atoms/GradationLink';
import {IconTwitter} from '~/components/atoms/Icon';
import {LinkTimeline} from '~/components/atoms/Link';

export type ComponentProps = {className?: string};
export const Component: React.VFC<ComponentProps> = ({className}) => {
  const {t} = useTranslation('index');
  return (
    <GradationLink
      className={tw(className)}
      Link={LinkTimeline}
      Icon={IconTwitter}
      i18n={{label: t('index:register')}}
    />
  );
};
