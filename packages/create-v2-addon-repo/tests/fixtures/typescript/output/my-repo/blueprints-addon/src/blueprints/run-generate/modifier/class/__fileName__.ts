import Modifier from 'ember-modifier';

type Named = {};
type Positional = [];

interface <%= options.entity.classifiedName %>Signature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Element: Element;
}

export default class <%= options.entity.classifiedName %>Modifier extends Modifier<<%= options.entity.classifiedName %>Signature> {
  modify(element: Element /*, positional: Positional, named: Named */) {
    console.log(element);
  }
}
