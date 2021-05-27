import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {GradationLink} from '~/components/atoms/GradationLink';
import {IconAdd} from '~/components/atoms/Icon';
import {LinkNew} from '~/components/atoms/Link';

export type ComponentProps = {className?: string};
export const Component: React.VFC<ComponentProps> = ({className}) => {
  const {t} = useTranslation();
  return (
    <GradationLink
      className={tw(className)}
      Link={LinkNew}
      Icon={IconAdd}
      i18n={{label: t('timeline:new_space')}}
    />
  );
};
