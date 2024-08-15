import { helper } from '@ember/component/helper';

type Named = {};
type Positional = [string];
type Return = string;

interface MyHelper2Signature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Return: Return;
}

export default helper<MyHelper2Signature>(
  (positional /*, named*/) => {
    return positional[0];
  },
);
