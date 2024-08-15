import { modifier } from 'ember-modifier';

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

export default modifier<<%= data.entity.classifiedName %>Signature>(
  function <%= data.entity.camelizedName %>(element /*, positional, named*/) {},
);
