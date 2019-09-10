import React from 'react';
import { RouteComponentProps } from '@reach/router';
import './home.scss';

export interface HomeProps extends RouteComponentProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <section className="homePage">
      <h1>
        Welcome to the homepage of <a className="homePageLink" href="https://github.com/Joshykins">Joshykin's</a> &{' '}
        <a className="homePageLink" href="https://github.com/hexedcorp">hexedcorp's</a> react boilerplate.
      </h1>
      <p>Github <a className="homePageLink" href="https://github.com/Joshykins/react-redux-ts-sc-boilerplate">react-redux-ts-sc-boilerplate</a></p>
    </section>
  );
};

export default Home;