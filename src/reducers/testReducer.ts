const initialState = {
  best: 'JAVA > C#',
  count: 0,
};

export const testReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'TEST_ACTION': {
      return {
        ...state,
        best: action.payload,
      };
    }
    case 'TEST_COUNTER': {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    default:
      return state;
  }
};
