import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IStore } from '../../store/store';
import { counterExampleChangeName, counterExampleCount } from '../../actions';

import './counterExample.scss';

export interface CounterProps {
  counterExample: { name: string; count: number };
  counterExampleChangeName: (payload: string) => void;
  counterExampleCount: () => void;
} 

const CounterExampleComponent: React.FunctionComponent<CounterProps> = ({
  counterExample,
  counterExampleChangeName,
  counterExampleCount,
}) => {
  let counterOptions = [`Counting to infinity!`, `Professional Adding Machine`, `Subtraction is in development.`]
  React.useEffect(() => {
    setTimeout(() => {
      counterExampleChangeName(counterOptions[Math.floor(counterOptions.length*Math.random())]);
    }, 2000);
    let int = setInterval(() => counterExampleCount(), 2000);
    return () => {
      clearInterval(int);
    };
  }, []);
  return (
    <div className="counterExample">
      <p>{counterExample.name}</p>
      <h1>{counterExample.count}</h1>
      <button className="counterExampleButton" onClick={()=>{counterExampleChangeName(counterOptions[Math.floor(counterOptions.length*Math.random())]);}}>New name!</button>
      <button className="counterExampleButton" onClick={()=>{counterExampleCount()}}>Add!</button>
    </div>
  );
};

const mapStateToProps = (state: IStore) => {
  return {
    counterExample: state.counterExample,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    counterExampleChangeName: (payload: string) => {
      dispatch(counterExampleChangeName(payload));
    },
    counterExampleCount: () => {
      dispatch(counterExampleCount());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterExampleComponent);
