import type { TOC } from '@ember/component/template-only';

import styles from './template-tag.css';

interface MyExampleTemplateTagSignature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

const MyExampleTemplateTagComponent: TOC<MyExampleTemplateTagSignature> =
  <template>
    <div class={{styles.container}}>
      {{yield}}
    </div>
  </template>;

export default MyExampleTemplateTagComponent;
