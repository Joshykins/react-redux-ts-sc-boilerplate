export enum TestActionsEnum {
  TEST_ACTION = 'TEST_ACTION',
  TEST_COUNTER = 'TEST_COUNTER',
}

export function testAction(payload: string) {
  return {
    type: TestActionsEnum.TEST_ACTION,
    payload,
  };
}

export function testCounter() {
  return {
    type: TestActionsEnum.TEST_COUNTER,
  };
}
