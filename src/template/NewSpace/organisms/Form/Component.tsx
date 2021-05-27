import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {FieldDescription} from '../../molecules/FieldDescription';
import {FieldMinutesUrl} from '../../molecules/FieldMinutesUrl';
import {FieldOpenDate} from '../../molecules/FieldOpenDate';
import {FieldTitle} from '../../molecules/FieldTitle';
import {SubmitButton} from '../../molecules/SubmitButton';

export type ComponentProps = {
  className?: string;

  onSubmit(): Promise<void>;
  isSubmitting: boolean;
  isSubmitted: boolean;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  onSubmit,
  isSubmitting,
  isSubmitted,
}) => {
  const {t} = useTranslation();
  return (
    <form
      className={tw(
        className,
        ['bg-opacity-60', 'bg-white'],
        ['px-4', 'sm:px-6'],
        ['py-6', 'sm:py-8'],
        ['shadow-sm', 'rounded-sm'],
        [
          'grid',
          ['grid-cols-1', 'md:grid-cols-3'],
          'gap-x-6',
          ['gap-y-6', 'md:gap-y-8'],
        ],
      )}
      onSubmit={onSubmit}
    >
      <FieldTitle className={tw(['col-span-1', 'md:col-span-2'])} />
      <div className={tw(['col-span-1'], ['flex', 'gap-y-4'])}>
        <FieldOpenDate className={tw('w-full')} />
      </div>
      <FieldDescription className={tw(['col-span-1', 'md:col-span-full'])} />
      <FieldMinutesUrl className={tw(['col-span-1', 'md:col-span-full'])} />
      <div
        className={tw('col-span-full', [
          'flex',
          'justify-center',
          'items-center',
        ])}
      >
        <SubmitButton
          className={tw(['py-3', 'px-6'], ['rounded-sm', 'shadow-sm'])}
          {...{
            isSubmitting,
            isSubmitted,
          }}
        />
      </div>
    </form>
  );
};
