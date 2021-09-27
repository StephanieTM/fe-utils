import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes, IRouteConfig } from 'app/routers/routes';

export default function SideNav(): JSX.Element {
  const location = useLocation();
  const navRoutes = useMemo(() => {
    const rootLink = location.pathname.split('/').slice(0, 2).join('/');
    const route = routes.find(item => item.link === rootLink);

    return route?.children || [];
  }, [location.pathname]);

  function renderLink(route: IRouteConfig): React.ReactNode {
    if (route.link) {
      return <Link key={route.link} to={route.link}>{route.title}</Link>
    }
    if (route.children) {
      return (
        <div >
          {route.children.map((item) => renderLink(item))}
        </div>
      );
    }
    return null;
  }

  return (
    <div>
      <div>Navigation</div>
      <div>
        {navRoutes.map(route => renderLink(route))}
      </div>
    </div>
  );
}
