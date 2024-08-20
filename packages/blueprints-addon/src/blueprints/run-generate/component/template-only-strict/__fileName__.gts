import type { TOC } from '@ember/component/template-only';

import styles from './<%= data.localFileName %>.css';

interface <%= options.entity.classifiedName %>Signature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

const <%= options.entity.classifiedName %>Component: TOC<<%= options.entity.classifiedName %>Signature> =
  <template>
    <div class={{styles.container}}>
      {{yield}}
    </div>
  </template>;

export default <%= options.entity.classifiedName %>Component;
