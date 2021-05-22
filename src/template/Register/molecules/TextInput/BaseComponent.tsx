import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {tw} from 'twind';

export type BaseComponentProps = {
  className?: string;
  icon: IconDefinition;
  id: string;
  i18n: Record<'label' | 'description', string>;
  register: UseFormRegisterReturn;
  message?: string;
};

export const BaseComponent: React.VFC<BaseComponentProps> = ({
  className,
  icon,
  id,
  i18n,
  register,
  message,
}) => {
  const {t} = useTranslation('register');
  return (
    <label className={tw(className, 'inline-flex', 'flex-col')} htmlFor={id}>
      <div className={tw('flex', 'items-center')}>
        <FontAwesomeIcon
          className={tw('text-base', 'text-blue-400')}
          icon={icon}
          fixedWidth
        />
        <span className={tw('ml-2')}>{i18n.label}</span>
      </div>
      <input
        id={id}
        className={tw(
          'w-full',
          'mt-3',
          'px-4',
          'py-2',
          'rounded-sm',
          'bg-gray-50',
        )}
        {...register}
      />
      <div className={tw('mt-2')}>
        <p className={tw('tracking-wide', 'text-xs')}>{i18n.description}</p>
        {message && (
          <p className={tw('mt-1', 'text-xs', 'text-red-600')}>{t(message)}</p>
        )}
      </div>
    </label>
  );
};
