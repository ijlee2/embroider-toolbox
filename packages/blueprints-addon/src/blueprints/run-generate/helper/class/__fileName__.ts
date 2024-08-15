import Helper from '@ember/component/helper';

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

export default class <%= data.entity.classifiedName %>Helper extends Helper<<%= data.entity.classifiedName %>Signature> {
  compute(positional: Positional /*, named: Named*/): Return {
    return positional;
  }
}
