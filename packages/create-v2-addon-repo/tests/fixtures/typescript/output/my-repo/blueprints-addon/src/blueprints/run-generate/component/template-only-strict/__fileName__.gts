import type { TOC } from '@ember/component/template-only';

import styles from './<%= data.localFileName %>.css';

interface <%= options.entity.pascalizedName %>Signature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

const <%= options.entity.pascalizedName %>Component: TOC<<%= options.entity.pascalizedName %>Signature> =
  <template>
    <div class={{styles.container}}>
      {{yield}}
    </div>
  </template>;

export default <%= options.entity.pascalizedName %>Component;
