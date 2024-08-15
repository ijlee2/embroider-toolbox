import type MyModifier2 from './modifiers/my/modifier-2.ts';
import type MyModifier1 from './modifiers/my/modifier-1.ts';
import type MyHelper2 from './helpers/my/helper-2.ts';
import type MyHelper1 from './helpers/my/helper-1.ts';
import type MyComponent2 from './components/my/component-2.gts';
import type MyComponent1 from './components/my/component-1.ts';
export default interface MyOrgUiButtonRegistry {
  'my/modifier-2': typeof MyModifier2;
  'my/modifier-1': typeof MyModifier1;
  'my/helper-2': typeof MyHelper2;
  'my/helper-1': typeof MyHelper1;
  'My::Component2': typeof MyComponent2;
  'my/component-2': typeof MyComponent2;
  'My::Component1': typeof MyComponent1;
  'my/component-1': typeof MyComponent1;
}
