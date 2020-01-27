import React from 'react';
import './home.scss';
import Test from '../../components/counterExample/CounterExample';
import CounterExample from '../../components/counterExample/CounterExample';

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <section className="homePage">
      <h1>
        Welcome to the homepage of{' '}
        <a className="homePageLink" href="https://github.com/Joshykins">
          Joshykin's
        </a>{' '}
        &{' '}
        <a className="homePageLink" href="https://github.com/hexedcorp">
          hexedcorp's
        </a>{' '}
        react boilerplate.
      </h1>
      <p>
        Github{' '}
        <a
          className="homePageLink"
          href="https://github.com/Joshykins/react-redux-ts-sc-boilerplate"
        >
          react-redux-ts-sc-boilerplate
        </a>
      </p>
      <div className="homePageExample">
        <h2>Example counter component (uses global state management)</h2>
        <p>
          Look at <span className="homePageLink">./CounterExamples</span>{' '}
          directories in reducers, actions, and components for reference.
        </p>
        <CounterExample></CounterExample>
      </div>
    </section>
  );
};

export default Home;
