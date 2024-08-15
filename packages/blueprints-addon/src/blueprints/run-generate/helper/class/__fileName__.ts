import Helper from '@ember/component/helper';

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

export default class <%= options.entity.classifiedName %>Helper extends Helper<<%= options.entity.classifiedName %>Signature> {
  compute(positional: Positional /*, named: Named*/): Return {
    return positional[0];
  }
}
