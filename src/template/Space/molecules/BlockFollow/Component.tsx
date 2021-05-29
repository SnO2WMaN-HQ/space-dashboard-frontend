import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {Merge} from 'type-fest';
import {GradationLink} from '~/components/atoms/GradationLink';
import {IconTwitter} from '~/components/atoms/Icon';
import {LinkTimeline} from '~/components/atoms/Link';
import {FollowButton} from '../FollowButton';

export type ComponentProps = Merge<
  {
    className?: string;
    id: string;
    // components
    Follow: typeof FollowButton;
  },
  {loading: true} | {loading: false; requireLogin: boolean}
>;
export const Component: React.VFC<ComponentProps> = ({
  className,
  id,
  Follow,
  ...props
}) => {
  const {t} = useTranslation();

  return (
    <div className={tw(className)}>
      <h2
        className={tw(
          ['pl-2', 'md:pl-4'],
          ['text-lg', 'md:text-xl'],
          'font-bold',
        )}
      >
        {t('space:blocks.follow.title')}
      </h2>
      <div
        className={tw(
          ['mt-2', 'md:mt-4'],
          ['bg-white', 'bg-opacity-75'],
          ['px-4'],
          ['py-4'],
          ['rounded-md', 'shadow-md'],
          ['flex', 'items-center'],
        )}
      >
        {!props.loading && props.requireLogin && (
          <GradationLink
            className={tw('w-full', 'py-4')}
            Link={(props) => <LinkTimeline {...props} />}
            Icon={(props) => <IconTwitter {...props} />}
            i18n={{label: t('space:blocks.follow.require_login')}}
          />
        )}
        {!props.loading && !props.requireLogin && (
          <Follow
            className={tw('w-full', 'py-4', ['rounded-md', 'shadow-sm'])}
            {...{spaceId: id}}
          />
        )}
      </div>
    </div>
  );
};
