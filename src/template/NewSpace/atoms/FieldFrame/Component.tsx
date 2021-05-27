/* eslint jsx-a11y/label-has-for: [2, {allowChildren: true}] */

import React from 'react';
import {tw} from 'twind';
import {FieldFooter} from '../FieldFooter';
import {FieldHeader} from '../FieldHeader';

export type ComponentProps = {
  className?: string;
  required: boolean;
  id: string;
  i18n: {label: string; description?: string};
  Icon: React.VFC<{className?: string}>;
  Input: React.VFC<{className?: string; id: string}>;
  errorMessage?: string;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  id,
  Icon,
  Input,
  errorMessage,
  i18n,
  required,
}) => {
  return (
    <label className={tw(className, 'inline-flex', 'flex-col')} htmlFor={id}>
      <FieldHeader Icon={Icon} i18n={{text: i18n.label}} required={required} />
      <Input id={id} className={tw('mt-4', ['px-4', 'py-2'])} />
      <FieldFooter
        className={tw('mt-2')}
        i18n={{description: i18n.description}}
        {...{errorMessage}}
      />
    </label>
  );
};
