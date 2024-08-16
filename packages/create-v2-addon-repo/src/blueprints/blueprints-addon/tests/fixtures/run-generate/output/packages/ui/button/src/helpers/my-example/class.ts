import Helper from '@ember/component/helper';

type Named = {};
type Positional = [string];
type Return = string;

interface MyExampleClassSignature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Return: Return;
}

export default class MyExampleClassHelper extends Helper<MyExampleClassSignature> {
  compute(positional: Positional /*, named: Named*/): Return {
    return positional[0];
  }
}
