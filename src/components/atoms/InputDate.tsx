import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {tw} from 'twind';

export const InputDate: React.VFC<{
  id: string;
  className?: string;
  register: UseFormRegisterReturn;
  min: number | string;
  max: number | string;
}> = ({className, register, ...props}) => (
  <input
    className={tw(
      className,
      ['rounded-sm'],
      ['border', 'border-white'],
      ['bg-opacity-80', 'bg-white'],
    )}
    type="date"
    {...register}
    {...props}
  />
);
