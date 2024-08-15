import { helper } from '@ember/component/helper';

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

export default helper<MyExample1Signature>(
  (positional /*, named*/) => {
    return positional;
  },
);
