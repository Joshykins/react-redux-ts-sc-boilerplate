import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { IStore } from '../../store/store';
import {
  counterExampleChangeName,
  counterExampleCount,
  CounterExampleActionPayload,
} from '../../actions';

import './counterExample.scss';

export interface CounterProps {
  counterExample: { name: string; count: number };
  counterExampleChangeName: (payload: string) => void;
  counterExampleCount: (payload: CounterExampleActionPayload) => void;
}

const CounterExampleComponent: React.FunctionComponent<CounterProps> = ({
  counterExample,
  counterExampleChangeName,
  counterExampleCount,
}) => {
  let counterOptions = [
    `Counting to infinity!`,
    `Professional Adding Machine`,
    `Subtraction is developed!.`,
  ];
  const [state, setState] = React.useState<CounterExampleActionPayload>('add');
  React.useEffect(() => {
    let int = setInterval(() => counterExampleCount(state), 1000);
    return () => {
      clearInterval(int);
    };
  }, [state]);

  return (
    <div className="counterExample">
      <p>{counterExample.name}</p>
      <h1>{counterExample.count}</h1>
      <button
        className="counterExampleButton"
        onClick={() => {
          counterExampleChangeName(
            counterOptions[Math.floor(counterOptions.length * Math.random())]
          );
        }}
      >
        New name!
      </button>
      {state === 'add' ? (
        <button
          className="counterExampleButton"
          onClick={() => {
            setState('subtract');
          }}
        >
          Subtract!
        </button>
      ) : (
        <button
          className="counterExampleButton"
          onClick={() => {
            setState('add');
          }}
        >
          Add!
        </button>
      )}
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
    counterExampleCount: (payload: CounterExampleActionPayload) => {
      dispatch(counterExampleCount(payload));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterExampleComponent);
