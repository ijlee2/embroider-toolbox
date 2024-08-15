import { helper } from '@ember/component/helper';

type Named = {};
type Positional = [];
type Return = Positional;

interface MyHelper2Signature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Return: Return;
}

export default helper<MyHelper2Signature>(
  (positional /*, named*/) => {
    return positional;
  },
);
