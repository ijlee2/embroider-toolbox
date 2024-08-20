import type { TOC } from '@ember/component/template-only';

import styles from './template-only-strict.css';

interface MyComponentTemplateOnlyStrictSignature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

const MyComponentTemplateOnlyStrictComponent: TOC<MyComponentTemplateOnlyStrictSignature> =
  <template>
    <div class={{styles.container}}>
      {{yield}}
    </div>
  </template>;

export default MyComponentTemplateOnlyStrictComponent;
