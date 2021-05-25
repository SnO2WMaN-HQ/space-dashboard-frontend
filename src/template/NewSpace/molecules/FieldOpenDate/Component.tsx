import {faCalendarDay} from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from 'next-i18next';
import React from 'react';
import {UseFormRegisterReturn} from 'react-hook-form';
import {tw} from 'twind';
import {InputDate} from '~/components/atoms/InputDate';
import {FieldFrame} from '../../atoms/FieldFrame';

export type ComponentProps = {
  className?: string;
  register: UseFormRegisterReturn;
  errorMessage?: string;

  minDate: string;
  maxDate: string;
};

export const Component: React.VFC<ComponentProps> = ({
  className,
  register,
  errorMessage,
  minDate,
  maxDate,
}) => {
  const {t} = useTranslation();
  return (
    <FieldFrame
      {...{errorMessage}}
      id="open-date"
      className={tw(className)}
      icon={faCalendarDay}
      i18n={{header: t('new:form.open_date.label')}}
      Input={({className, ...props}) => (
        <InputDate
          className={tw(className)}
          min={minDate}
          max={maxDate}
          register={register}
          {...props}
        />
      )}
      required
    />
  );
};
