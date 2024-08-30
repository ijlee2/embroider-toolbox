import templateOnlyComponent from '@ember/component/template-only';

interface MyComponentTemplateOnlyLooseSignature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

const MyComponentTemplateOnlyLooseComponent =
  templateOnlyComponent<MyComponentTemplateOnlyLooseSignature>();

export default MyComponentTemplateOnlyLooseComponent;
