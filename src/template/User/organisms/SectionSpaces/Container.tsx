import React from 'react';
import {Component} from './Component';

export const Hosting: React.VFC<{
  className?: string;
  pageInfo: {hasMore: false} | {hasMore: true; endCursor: string};
  spaces: {
    id: string;
    title: string;
    openDate: string;
    followingUsers: {
      hasMore: boolean;
      users: {uniqueName: string; displayName: string; picture: string}[];
    };
  }[];
}> = ({...props}) => {
  return <Component {...props} i18n={{title: `ホストする予定のスペース`}} />;
};

export const Following: React.VFC<{
  className?: string;
  pageInfo: {hasMore: false} | {hasMore: true; endCursor: string};
  spaces: {
    id: string;
    title: string;
    openDate: string;
    followingUsers: {
      hasMore: boolean;
      users: {uniqueName: string; displayName: string; picture: string}[];
    };
  }[];
}> = ({...props}) => {
  return <Component {...props} i18n={{title: `気になっているスペース`}} />;
};
