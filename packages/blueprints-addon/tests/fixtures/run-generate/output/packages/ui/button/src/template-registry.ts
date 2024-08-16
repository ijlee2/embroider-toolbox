import type MyExampleFunctionModifier from './modifiers/my-example/function.ts';
import type MyExampleClassModifier from './modifiers/my-example/class.ts';
import type MyExampleFunctionHelper from './helpers/my-example/function.ts';
import type MyExampleClassHelper from './helpers/my-example/class.ts';
import type MyExampleTemplateTagComponent from './components/my-example/template-tag.gts';
import type MyExampleGlimmerComponent from './components/my-example/glimmer.ts';
export default interface MyOrgUiButtonRegistry {
  'my-example/function': typeof MyExampleFunctionModifier;
  'my-example/class': typeof MyExampleClassModifier;
  'my-example/function': typeof MyExampleFunctionHelper;
  'my-example/class': typeof MyExampleClassHelper;
  'MyExample::TemplateTag': typeof MyExampleTemplateTagComponent;
  'my-example/template-tag': typeof MyExampleTemplateTagComponent;
  'MyExample::Glimmer': typeof MyExampleGlimmerComponent;
  'my-example/glimmer': typeof MyExampleGlimmerComponent;
}
