import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IStore } from '../../store/store';
import { testAction, testCounter } from '../../actions';

export interface TestProps {
  test: { best: string; count: number };
  addTest: (payload: string) => void;
  testCount: () => void;
} 

const TestComponent: React.FunctionComponent<TestProps> = ({
  test,
  addTest,
  testCount,
}) => {
  console.log(test);
  React.useEffect(() => {
    setTimeout(() => {
      addTest('C# > C++');
    }, 2000);
    let int = setInterval(() => testCount(), 2000);
    return () => {
      clearInterval(int);
    };
  }, []);
  return (
    <div>
      <h1>{test.best}</h1>
      <h1>{test.count}</h1>
    </div>
  );
};

const mapStateToProps = (state: IStore) => {
  return {
    test: state.test,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addTest: (payload: string) => {
      dispatch(testAction(payload));
    },
    testCount: () => {
      dispatch(testCounter());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestComponent);
