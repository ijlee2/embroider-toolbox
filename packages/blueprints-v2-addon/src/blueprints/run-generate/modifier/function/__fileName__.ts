import { modifier } from 'ember-modifier';

type Named = {};
type Positional = [];

interface <%= options.entity.pascalizedName %>Signature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Element: Element;
}

export default modifier<<%= options.entity.pascalizedName %>Signature>(
  function <%= options.entity.camelizedName %>(element /*, positional, named*/) {
    console.log(element);
  },
);
