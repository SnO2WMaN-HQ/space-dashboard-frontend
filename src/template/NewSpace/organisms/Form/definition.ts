import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import * as z from 'zod';

dayjs.extend(isBetween);

export const getMinDate = (now: Date) => dayjs(now);
export const getMaxDate = (now: Date) => dayjs(now).add(1, 'month');
export const validOpenDate = (value: string, now: Date) =>
  dayjs(value).isBetween(getMinDate(now), getMaxDate(now), 'day', '[]');

export const schema = z.object({
  title: z
    .string()
    .min(1, 'new:form.title.error.min')
    .max(40, 'new:form.title.error.max'),
  description: z.string().max(200, 'new:form.description.error.max').nullable(),
  minutesUrl: z.union([
    z.string().url('new:form.minutes_url.error.url'),
    z.literal(''),
  ]),
  openDate: z
    .string()
    .regex(/\d{4}-\d{2}-\d{2}/)
    .refine(
      (value) => validOpenDate(value, new Date()),
      () => ({message: 'new:form.minutes_url.error.out_of_range'}),
    ),
});

export type FormInput = z.infer<typeof schema>;
