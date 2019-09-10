import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { AppRouter } from './router';

const App = () => (
  <>
    <AppRouter/>
  </>
);

/* ts complaining over having it directly in the app decl. */
export default hot(App);
