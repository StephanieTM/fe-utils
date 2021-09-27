import React from 'react';
import { Link } from 'react-router-dom';
import { useClassName } from 'app/utils';
import { routes } from 'app/routers/routes';

export default function Header(): JSX.Element {
  const c = useClassName();

  return (
    <div className={c('app-header-container')}>
      <div className={c('menu-container')}>
        {routes.map(route => {
          return route.showInHeader ? (
            <Link key={route.code} to={route.link||''} className={c('menu-link')}>{route.title}</Link>
          ) : null;
        })}
      </div>
    </div>
  );
}
