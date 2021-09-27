import { ComponentType } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export type ILoadComponent = Promise<{ default: ComponentType<RouteComponentProps>}>;

export interface IRouteConfig {
  title: string;
  link?: string;
  code?: string;
  key?: string;
  children?: IRouteConfig[];
  component?: () => ILoadComponent;
  showInHeader?: boolean;
  hideInMenu?: boolean;
  icon?: JSX.Element;
}

export const routes: IRouteConfig[] = [
  {
    title: 'Home',
    code: 'home',
    link: '/',
    showInHeader: true,
    component: () => import('src/components/homepage'),
  },
  {
    title: 'Modules',
    code: 'modules',
    link: '/modules',
    showInHeader: true,
    component: () => import('src/components/modules'),
    children: [
      {
        title: 'Modal',
        code: 'modules/modal',
        link: '/modules/modal',
        component: () => import('src/modules/animations/modal'),
      },
    ],
  },
];
