import { helper } from '@ember/component/helper';

type Named = {};
type Positional = [string];
type Return = string;

interface <%= options.entity.pascalizedName %>Signature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Return: Return;
}

export default helper<<%= options.entity.pascalizedName %>Signature>(
  function <%= options.entity.camelizedName %>(positional /*, named*/) {
    return positional[0];
  },
);
