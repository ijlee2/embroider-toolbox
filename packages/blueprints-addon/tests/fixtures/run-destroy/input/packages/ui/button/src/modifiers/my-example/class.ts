import Modifier from 'ember-modifier';

type Named = {};
type Positional = [];

interface MyExampleClassSignature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Element: Element;
}

export default class MyExampleClassModifier extends Modifier<MyExampleClassSignature> {
  modify(element: Element /*, positional: Positional, named: Named */) {
    console.log(element);
  }
}
