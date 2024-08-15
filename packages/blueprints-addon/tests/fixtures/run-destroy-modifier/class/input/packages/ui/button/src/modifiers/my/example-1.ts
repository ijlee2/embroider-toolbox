import Modifier from 'ember-modifier';

type Named = {};
type Positional = [];
type Element = Element;

interface MyExample1Signature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Element: Element;
}

export default class MyExample1Modifier extends Modifier<MyExample1Signature> {
  modify(element: Element /*, positional: Positional, named: Named */) {}
}
