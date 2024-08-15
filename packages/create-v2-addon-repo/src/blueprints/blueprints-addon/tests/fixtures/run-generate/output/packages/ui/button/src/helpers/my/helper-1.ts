import Helper from '@ember/component/helper';

type Named = {};
type Positional = [string];
type Return = string;

interface MyHelper1Signature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Return: Return;
}

export default class MyHelper1Helper extends Helper<MyHelper1Signature> {
  compute(positional: Positional /*, named: Named*/): Return {
    return positional[0];
  }
}
