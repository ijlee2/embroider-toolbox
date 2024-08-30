import Helper from '@ember/component/helper';

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

export default class <%= options.entity.pascalizedName %>Helper extends Helper<<%= options.entity.pascalizedName %>Signature> {
  compute(positional: Positional /*, named: Named*/): Return {
    return positional[0];
  }
}
