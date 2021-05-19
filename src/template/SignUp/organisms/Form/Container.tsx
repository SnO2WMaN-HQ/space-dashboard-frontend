import clsx from 'clsx';
import React from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {SubmitButton} from '../../molecules/SubmitButton';
import {DisplayNameInput, UniqueNameInput} from '../../molecules/TextInput';

export type FormInput = {
  uniqueName: string;
  displayName: string;
  picture: string;
};

export type ContainerProps = {
  className?: string;
  onSubmit: SubmitHandler<FormInput>;
};
export const Container: React.VFC<ContainerProps> = ({className, onSubmit}) => {
  const {register, handleSubmit} = useForm<FormInput>();

  return (
    <form
      className={clsx(
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
      onSubmit={handleSubmit(onSubmit)}
    >
      <UniqueNameInput
        className={clsx('w-full')}
        register={register('uniqueName')}
      />
      <DisplayNameInput
        className={clsx('w-full', 'mt-8')}
        register={register('displayName')}
      />
      <SubmitButton className={clsx('mt-8')} />
    </form>
  );
};
