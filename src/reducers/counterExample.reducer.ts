import { CounterExampleActionsEnum, CounterExampleAction } from "../actions";

const initialState = {
  name: 'Counting to infinity!',
  count: 0,
};

export const counterExampleReducer = (state = initialState, action: CounterExampleAction) => {
  switch (action.type) {
    case CounterExampleActionsEnum.COUNTER_EXAMPLE_CHANGENAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case CounterExampleActionsEnum.COUNTER_EXAMPLE_COUNT: {
      console.log("ran");
      return {
        ...state,
        count: state.count + 1,
      };
    }
    default:
      return state;
  }
};
