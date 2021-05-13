import React from 'react';
import {Component} from './Component';

export const Hosting: React.VFC<{
  className?: string;
  spaces: {
    className?: string;
    id: string;
    title: string;
    openDate: string;
    followingUsers: {
      nodes: {uniqueName: string; displayName: string; picture: string}[];
      count: number;
      hasMore: boolean;
    };
  }[];
  spacesCount: number;
}> = ({...props}) => {
  return (
    <Component
      {...props}
      i18n={{
        title: `ホストする予定のスペースが${props.spacesCount}件あります`,
      }}
    />
  );
};

export const Following: React.VFC<{
  className?: string;
  spaces: {
    className?: string;
    id: string;
    title: string;
    openDate: string;
    followingUsers: {
      nodes: {uniqueName: string; displayName: string; picture: string}[];
      count: number;
      hasMore: boolean;
    };
  }[];
  spacesCount: number;
}> = ({...props}) => {
  return (
    <Component
      {...props}
      i18n={{
        title: `入る予定のスペースが${props.spacesCount}件あります`,
      }}
    />
  );
};
