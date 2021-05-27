import {zodResolver} from '@hookform/resolvers/zod';
import {useForm, useFormContext} from 'react-hook-form';
import * as z from 'zod';

export const zodSchema = z.object({
  uniqueName: z
    .string()
    .min(4, 'register:form.unique_name.error.min')
    .max(15, 'register:form.unique_name.error.max')
    .regex(/[A-Za-z0-9_]+/, 'register:form.unique_name.error.regex'),
  displayName: z.string().max(50, 'register:form.display_name.error.max'),
  picture: z.string().url(),
});

export type FormValues = z.infer<typeof zodSchema>;

export function useRegisterForm({
  initialValues,
}: {
  initialValues: Partial<
    Record<'uniqueName' | 'displayName' | 'picture', string>
  >;
}) {
  return useForm<FormValues>({
    mode: 'onBlur',
    resolver: zodResolver(zodSchema),
    defaultValues: initialValues,
  });
}

export function useRegisterFormContext() {
  return useFormContext<FormValues>();
}
