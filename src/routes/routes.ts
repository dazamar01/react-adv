import React, { lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
  children?: Route[]
}

export const routes: Route[] = [
  {
    path: '/lazy1load',
    Component: lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout')),
    name: 'LazyPage-1'
  },
  {
    path: '/no-lazy',
    Component: NoLazy,
    name: 'No lazy loading'
  },
]