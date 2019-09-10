import * as React from 'react';
import { RouteComponentProps, Link } from '@reach/router';



const NotFound: React.FunctionComponent<RouteComponentProps> = () => {
  return (
    <div>
      <h1>404, Page not found!</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFound;
