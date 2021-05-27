import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {SectionFrame} from '~/template/User/atoms/SectionFrame';
import {BlockDescription} from '../../molecules/BlockDescription';
import {BlockOpenDate} from '../../molecules/BlockOpenDate';

export type ComponentProps = {
  className?: string;
  description?: string;
  openDate: string;
  finished: boolean;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  openDate,
  description,
  finished,
}) => {
  const {t} = useTranslation();
  return (
    <SectionFrame
      className={tw(
        className,
        ['flex', 'flex-col'],
        ['space-y-4', 'md:space-y-6'],
      )}
    >
      <BlockOpenDate className={tw()} {...{openDate, finished}} />
      <BlockDescription className={tw()} {...{description}} />
    </SectionFrame>
  );
};
