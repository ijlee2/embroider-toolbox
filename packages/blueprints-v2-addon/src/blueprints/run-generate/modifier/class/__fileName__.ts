import Modifier from 'ember-modifier';

type Named = {};
type Positional = [];

interface <%= options.entity.pascalizedName %>Signature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Element: Element;
}

export default class <%= options.entity.pascalizedName %>Modifier extends Modifier<<%= options.entity.pascalizedName %>Signature> {
  modify(element: Element /*, positional: Positional, named: Named */) {
    console.log(element);
  }
}
