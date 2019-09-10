import * as React from 'react';
import { Router } from '@reach/router';
import Home from '../pages/home/home';

const NotFound = React.lazy(()=>import('../components/404/404'));

export const AppRouter = () => {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Home path="/"/>
          <NotFound default />
        </Router>
      </React.Suspense>
    </>
  );
};
