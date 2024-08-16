import { modifier } from 'ember-modifier';

type Named = {};
type Positional = [];

interface MyExampleFunctionSignature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Element: Element;
}

export default modifier<MyExampleFunctionSignature>(
  function myExampleFunction(element /*, positional, named*/) {
    console.log(element);
  },
);
