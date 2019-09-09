const initialState = {
  best: 'JAVA > C#',
};

export const testReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'TEST_ACTION': {
      return {
        ...state,
        best: action.payload,
      };
    }
    default:
      return state;
  }
};
