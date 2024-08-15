import { modifier } from 'ember-modifier';

type Named = {};
type Positional = [];
type Element = Element;

interface MyModifier2Signature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Element: Element;
}

export default modifier<MyModifier2Signature>(
  function myModifier2(element /*, positional, named*/) {},
);
