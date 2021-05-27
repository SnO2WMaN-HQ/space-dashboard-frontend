import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {tw} from 'twind';

export const InputText: React.VFC<{
  id: string;
  className?: string;
  register: UseFormRegisterReturn;
}> = ({className, register, ...props}) => (
  <input
    className={tw(
      className,
      ['rounded-sm'],
      ['border', 'border-white'],
      ['bg-opacity-80', 'bg-white'],
    )}
    type="text"
    {...register}
    {...props}
  />
);
