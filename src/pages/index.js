import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

const ROUTES = [
  {
    path: '/login',
    comp: React.lazy(() => import('./Login'))
  },
  {
    path: '/dashboard',
    comp: React.lazy(() => import('./Dashboard'))
  }
]

export default function Pages() {
  return (
    <BrowserRouter >
      <Switch>
        {
          ROUTES.map(item => 
            <Route
              key={item.path}
              path={item.path}
              exact={item.exact}
              component={item.comp}
            />)
        }
        <Redirect to="login" />
      </Switch>
    </BrowserRouter>
  );
}
