import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import Home from '../pages/home/home';

const App = () => (
  <>
    <Home />
  </>
);

/* ts complaining over having it directly in the app decl. */
export default hot(App);
