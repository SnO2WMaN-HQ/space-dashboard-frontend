import {IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';

export type ComponentProps = {
  className?: string;
  icon: IconDefinition;
  i18n: Record<'text', string>;
  required: boolean;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  icon,
  i18n,
  required,
}) => {
  const {t} = useTranslation();
  return (
    <div className={tw(className, 'flex', 'items-center', 'select-none')}>
      <FontAwesomeIcon
        className={tw('text-base', 'text-blue-400')}
        icon={icon}
        fixedWidth
      />
      <span className={tw('ml-2')}>{i18n.text}</span>{' '}
      {required && (
        <span className={tw('ml-1', 'text-xs', 'font-bold', 'text-gray-700')}>
          {t('common:form.required')}
        </span>
      )}
      {!required && (
        <span className={tw('ml-1', 'text-xs', 'text-gray-500')}>
          {t('common:form.optional')}
        </span>
      )}
    </div>
  );
};
