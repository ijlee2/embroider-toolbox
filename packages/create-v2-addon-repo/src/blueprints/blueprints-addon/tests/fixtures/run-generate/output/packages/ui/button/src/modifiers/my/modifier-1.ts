import Modifier from 'ember-modifier';

type Named = {};
type Positional = [];

interface MyModifier1Signature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Element: Element;
}

export default class MyModifier1Modifier extends Modifier<MyModifier1Signature> {
  modify(element: Element /*, positional: Positional, named: Named */) {
    console.log(element);
  }
}
