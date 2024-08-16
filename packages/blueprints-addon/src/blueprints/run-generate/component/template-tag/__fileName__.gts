import Component from '@glimmer/component';

import styles from './<%= data.localFileName %>.css';

interface <%= options.entity.classifiedName %>Signature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class <%= options.entity.classifiedName %>Component extends Component<<%= options.entity.classifiedName %>Signature> {
  <template>
    <div class={{styles.container}}>
      {{yield}}
    </div>
  </template>
}
