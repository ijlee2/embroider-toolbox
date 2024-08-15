import { helper } from '@ember/component/helper';

type Named = {};
type Positional = [];
type Return = Positional;

interface <%= data.entity.classifiedName %>Signature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Return: Return;
}

export default helper<<%= data.entity.classifiedName %>Signature>(
  (positional /*, named*/) => {
    return positional;
  },
);
