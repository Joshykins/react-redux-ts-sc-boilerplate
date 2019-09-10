export enum CounterExampleActionsEnum {
  COUNTER_EXAMPLE_CHANGENAME = 'COUNTER_EXAMPLE_CHANGENAME',
  COUNTER_EXAMPLE_COUNT = 'COUNTER_EXAMPLE_COUNT',
}

export interface CounterExampleAction {
  type: CounterExampleActionsEnum;
  payload: any;
}

export function counterExampleChangeName(payload: string) {
  return {
    type: CounterExampleActionsEnum.COUNTER_EXAMPLE_CHANGENAME,
    payload,
  };
}

export function counterExampleCount() {
  return {
    type: CounterExampleActionsEnum.COUNTER_EXAMPLE_COUNT,
  };
}
