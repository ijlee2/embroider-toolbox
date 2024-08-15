import Modifier from 'ember-modifier';

type Named = {};
type Positional = [];
type Element = Element;

interface <%= data.entity.classifiedName %>Signature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Element: Element;
}

export default class <%= data.entity.classifiedName %>Modifier extends Modifier<<%= data.entity.classifiedName %>Signature> {
  modify(element: Element /*, positional: Positional, named: Named */) {}
}
