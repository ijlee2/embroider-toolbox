import Helper from '@ember/component/helper';

type Named = {};
type Positional = [];
type Return = Positional;

interface MyExample1Signature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Return: Return;
}

export default class MyExample1Helper extends Helper<MyExample1Signature> {
  compute(positional: Positional /*, named: Named*/): Return {
    return positional;
  }
}
