import clsx from 'clsx';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {NewSpaceButton} from '../../molecules/NewSpaceButton';

export type ContainerProps = {
  className?: string;
  uniqueName: string;
  displayName: string;
  picture: string;
};
export const Container: React.VFC<ContainerProps> = ({
  className,
  displayName,
  uniqueName,
  picture,
}) => {
  const {t} = useTranslation('user');

  return (
    <section
      className={clsx(
        className,
        'px-2',
        'py-4',
        'bg-gray-50',
        'shadow-sm',
        'rounded-sm',
      )}
    >
      <NewSpaceButton className={clsx('w-full')} />
    </section>
  );
};
