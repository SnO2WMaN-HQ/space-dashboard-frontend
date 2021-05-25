import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {tw} from 'twind';

export const TextArea: React.VFC<{
  id: string;
  className?: string;
  register: UseFormRegisterReturn;
  rows: number;
}> = ({className, register, ...props}) => (
  <textarea
    className={tw(
      className,
      ['rounded-sm'],
      ['border', 'border-white'],
      ['bg-opacity-80', 'bg-white'],
    )}
    {...register}
    {...props}
  />
);
