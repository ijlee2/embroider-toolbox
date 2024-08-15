import { helper } from '@ember/component/helper';

type Named = {};
type Positional = [string];
type Return = string;

interface <%= options.entity.classifiedName %>Signature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Return: Return;
}

export default helper<<%= options.entity.classifiedName %>Signature>(
  (positional /*, named*/) => {
    return positional[0];
  },
);
