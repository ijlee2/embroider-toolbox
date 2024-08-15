import Component from '@glimmer/component';

import styles from './<%= data.localFileName %>.css';

interface <%= data.entity.classifiedName %>Signature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

export default class <%= data.entity.classifiedName %>Component extends Component<<%= data.entity.classifiedName %>Signature> {
  <template>
    <div class={{styles.container}}>
      {{yield}}
    </div>
  </template>
}
