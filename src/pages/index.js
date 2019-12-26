import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
// import Dashboard from './Dashboard'

export const ROUTES = [
  {
    path: '/login',
    comp: React.lazy(() => import('./Login'))
  },
  {
    path: '/dashboard',
    comp: React.lazy(() => import('./Dashboard')),
    child: [
      {
        path: '/querying',
        comp: React.lazy(() => import('./Querying'))
      },
      {
        path: '/traversal',
        comp: React.lazy(() => import('./Traversal'))
      },
      {
        path: '/actions',
        comp: React.lazy(() => import('./Actions'))
      },
      {
        path: '/command',
        comp: React.lazy(() => import('./Commands'))
      },
      {
        path: '/assertion',
        comp: React.lazy(() => import('./Assertion'))
      },
      {
        path: '/storage',
        comp: React.lazy(() => import('./Storage'))
      },
      {
        path: '/networks',
        comp: React.lazy(() => import('./Networks'))
      },
    ]
  }
]

export default function Pages() {
  return (
    <HashRouter >
      <Switch>
        {
          ROUTES.map(({ path, exact, comp: Comp, child: ChildComp }) => 
            <Route
              key={path}
              path={path}
              exact={!ChildComp && exact}
              render={props => <Comp {...props} ChildComp={ChildComp && ChildComp.map(v => ({ ...v, path: path + v.path }))} />}
            />)
        }
        <Redirect to="login" />
      </Switch>
    </HashRouter>
  );
}
