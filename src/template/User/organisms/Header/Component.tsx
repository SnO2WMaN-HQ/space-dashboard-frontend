import {useTranslation} from 'next-i18next';
import React from 'react';
import {tw} from 'twind';
import {DisplayName} from '~/components/atoms/DisplayName';
import {UniqueName} from '~/components/atoms/UniqueName';
import {UserPictureLink} from '~/components/atoms/UserPictureLink';
import {ProfileSet} from '~/components/molecules/ProfileSet';

export type ComponentProps = {
  className?: string;
  uniqueName: string;
  displayName: string;
  picture: string;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  displayName,
  uniqueName,
  picture,
}) => {
  const {t} = useTranslation();

  return (
    <header
      className={tw(
        className,
        ['shadow-sm', 'rounded-sm'],
        ['py-4', 'md:py-8'],
        ['bg-opacity-60', 'bg-white'],
      )}
    >
      <ProfileSet
        className={tw(className, 'mx-auto', 'max-w-screen-sm', [
          'px-4',
          'md:px-0',
        ])}
        user={{
          displayName,
          uniqueName,
          picture,
        }}
        UserIcon={({className, ...props}) => (
          <UserPictureLink
            className={tw(className, ['w-16', 'h-16'], ['md:w-20', 'md:h-20'])}
            {...props}
          />
        )}
        DisplayName={({className, ...props}) => (
          <DisplayName
            className={tw(className, ['text-xl', 'md:text-2xl'])}
            {...props}
          />
        )}
        UniqueName={({className, ...props}) => (
          <UniqueName
            className={tw(className, ['text-sm', 'md:text-base'])}
            {...props}
          />
        )}
      />
    </header>
  );
};
