import { helper } from '@ember/component/helper';

type Named = {};
type Positional = [string];
type Return = string;

interface MyExampleFunctionSignature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Return: Return;
}

export default helper<MyExampleFunctionSignature>(
  function myExampleFunction(positional /*, named*/) {
    return positional[0];
  },
);
