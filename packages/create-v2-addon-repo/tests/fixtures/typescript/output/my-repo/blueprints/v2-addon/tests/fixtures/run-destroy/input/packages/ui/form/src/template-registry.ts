import type MyModifierFunctionModifier from './modifiers/my-modifier/function.ts';
import type MyModifierClassModifier from './modifiers/my-modifier/class.ts';
import type MyHelperFunctionHelper from './helpers/my-helper/function.ts';
import type MyHelperClassHelper from './helpers/my-helper/class.ts';
import type MyComponentTemplateOnlyStrictComponent from './components/my-component/template-only-strict.gts';
import type MyComponentTemplateOnlyLooseComponent from './components/my-component/template-only-loose.ts';
import type MyComponentGlimmerStrictComponent from './components/my-component/glimmer-strict.gts';
import type MyComponentGlimmerLooseComponent from './components/my-component/glimmer-loose.ts';
export default interface MyOrgUiFormRegistry {
  'my-modifier/function': typeof MyModifierFunctionModifier;
  'my-modifier/class': typeof MyModifierClassModifier;
  'my-helper/function': typeof MyHelperFunctionHelper;
  'my-helper/class': typeof MyHelperClassHelper;
  'MyComponent::TemplateOnlyStrict': typeof MyComponentTemplateOnlyStrictComponent;
  'my-component/template-only-strict': typeof MyComponentTemplateOnlyStrictComponent;
  'MyComponent::TemplateOnlyLoose': typeof MyComponentTemplateOnlyLooseComponent;
  'my-component/template-only-loose': typeof MyComponentTemplateOnlyLooseComponent;
  'MyComponent::GlimmerStrict': typeof MyComponentGlimmerStrictComponent;
  'my-component/glimmer-strict': typeof MyComponentGlimmerStrictComponent;
  'MyComponent::GlimmerLoose': typeof MyComponentGlimmerLooseComponent;
  'my-component/glimmer-loose': typeof MyComponentGlimmerLooseComponent;
}
