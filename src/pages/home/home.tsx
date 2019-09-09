import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IStore } from '../../store/store';
import { testAction } from '../../actions';

export interface TestProps {
  test: { best: string };
  addTest: (payload: string) => void;
}

const Home = ({ test, addTest }: TestProps) => {
  React.useEffect(() => {
    setTimeout(() => {
      addTest('C++ > C#');
    }, 2000);
  }, []);
  return (
    <div>
      <h1>{test.best}</h1>
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
