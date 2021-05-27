import React from 'react';
import {tw} from 'twind';

export type ComponentProps = {
  className?: string;
  user: {uniqueName: string; displayName: string; picture: string};
  UserIcon: React.VFC<{
    className?: string;
    uniqueName: string;
    displayName: string;
    picture: string;
  }>;
  DisplayName: React.FC<{className?: string; displayName: string}>;
  UniqueName: React.VFC<{className?: string; uniqueName: string}>;
};
export const Component: React.VFC<ComponentProps> = ({
  className,
  user: {displayName, uniqueName, picture},
  UserIcon,
  DisplayName,
  UniqueName,
}) => {
  return (
    <div className={tw(className, ['flex', 'items-center'])}>
      <UserIcon className={tw()} {...{displayName, uniqueName, picture}} />
      <div
        className={tw(['ml-4'], 'flex-grow', [
          'flex',
          'flex-col',
          'justify-center',
        ])}
      >
        <DisplayName className={tw('font-bold')} displayName={displayName} />
        <UniqueName className={tw('text-gray-700')} uniqueName={uniqueName} />
      </div>
    </div>
  );
};
