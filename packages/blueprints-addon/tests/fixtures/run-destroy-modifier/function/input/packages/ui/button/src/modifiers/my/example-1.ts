import { modifier } from 'ember-modifier';

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

export default modifier<MyExample1Signature>(
  function myExample1(element /*, positional, named*/) {},
);
