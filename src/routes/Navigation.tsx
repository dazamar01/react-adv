import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/';

import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Router>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>
              {
                routes.map(({ path, name }) => (
                  <li key={"li-" + path}>
                    <NavLink to={path} activeClassName="nav-active" exact>{name}</NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <Switch>
            {
              routes.map(({ path, name, Component }) => (
                <Route key={"route-" + name}
                  path={path}
                  render={() => {
                    return <Component />
                  }}
                />
              ))
            }
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}