import templateOnlyComponent from '@ember/component/template-only';

interface <%= options.entity.classifiedName %>Signature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

const <%= options.entity.classifiedName %>Component =
  templateOnlyComponent<<%= options.entity.classifiedName %>Signature>();

export default <%= options.entity.classifiedName %>Component;
