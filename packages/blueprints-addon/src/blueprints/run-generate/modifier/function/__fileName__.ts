import { modifier } from 'ember-modifier';

type Named = {};
type Positional = [];
type Element = Element;

interface <%= options.entity.classifiedName %>Signature {
  Args: {
    Named: Named;
    Positional: Positional;
  };
  Element: Element;
}

export default modifier<<%= options.entity.classifiedName %>Signature>(
  function <%= options.entity.camelizedName %>(element /*, positional, named*/) {},
);
