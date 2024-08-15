import { helper } from '@ember/component/helper';

type Named = {};
type Positional = [];
type Return = Positional;

interface \\<%= options.entity.classifiedName %\\>Signature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Return: Return;
}

export default helper<\\<%= options.entity.classifiedName %\\>Signature>(
  (positional /*, named*/) => {
    return positional;
  },
);
