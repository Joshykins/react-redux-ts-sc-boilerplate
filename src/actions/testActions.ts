export enum TestActionsEnum {
  TEST_ACTION = 'TEST_ACTION',
}

export function testAction(payload: string) {
  return {
    type: TestActionsEnum.TEST_ACTION,
    payload,
  };
}
