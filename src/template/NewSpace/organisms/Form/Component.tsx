import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {InputDescription} from '../../molecules/InputDescription';
import {InputMinutesUrl} from '../../molecules/InputMinutesUrl';
import {InputOpenDate} from '../../molecules/InputOpenDate';
import {InputTitle} from '../../molecules/InputTitle';
import {SubmitButton} from '../../molecules/SubmitButton';

export type ComponentProps = {
  className?: string;

  onSubmit(): Promise<void>;
  isSubmitting: boolean;
  isCompleted: boolean;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  onSubmit,
  isSubmitting,
  isCompleted,
}) => {
  const {t} = useTranslation();
  return (
    <form
      className={tw(
        className,
        'bg-white',
        ['px-4', 'sm:px-6'],
        ['py-6', 'sm:py-8'],
        'shadow-md',
        'rounded-md',
        'flex',
        'flex-col',
        'items-center',
      )}
      onSubmit={onSubmit}
    >
      <InputTitle className={tw('w-full')} />
      <InputOpenDate className={tw('w-full', 'mt-4')} />
      <InputDescription className={tw('w-full', 'mt-4')} />
      <InputMinutesUrl className={tw('w-full', 'mt-4')} />
      <SubmitButton
        className={tw('mt-8', ['py-3', 'px-6'], ['rounded-sm', 'shadow-sm'])}
        {...{
          isSubmitting,
          isCompleted,
        }}
      />
    </form>
  );
};
