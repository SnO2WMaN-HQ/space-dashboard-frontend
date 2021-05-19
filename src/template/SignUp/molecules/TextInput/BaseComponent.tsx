import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';

export type BaseComponentProps = {
  className?: string;
  icon: IconDefinition;
  id: string;
  i18n: Record<'label', string>;
  register: UseFormRegisterReturn;
};

export const BaseComponent: React.VFC<BaseComponentProps> = ({
  className,
  icon,
  id,
  i18n,
  register,
}) => (
  <label className={clsx(className, 'inline-flex', 'flex-col')} htmlFor={id}>
    <div className={clsx('flex', 'items-center')}>
      <FontAwesomeIcon
        className={clsx('text-base', 'text-blue-400')}
        icon={icon}
        fixedWidth
      />
      <span className={clsx('ml-2')}>{i18n.label}</span>
    </div>
    <input
      id={id}
      className={clsx(
        'w-full',
        'mt-3',
        'px-4',
        'py-2',
        'rounded-sm',
        'bg-gray-50',
      )}
      {...register}
    />
  </label>
);
