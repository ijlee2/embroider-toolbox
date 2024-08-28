import templateOnlyComponent from '@ember/component/template-only';

interface <%= options.entity.pascalizedName %>Signature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

const <%= options.entity.pascalizedName %>Component =
  templateOnlyComponent<<%= options.entity.pascalizedName %>Signature>();

export default <%= options.entity.pascalizedName %>Component;
