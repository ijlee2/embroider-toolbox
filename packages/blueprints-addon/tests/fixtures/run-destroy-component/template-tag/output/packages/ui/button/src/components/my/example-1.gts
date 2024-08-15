import Component from '@glimmer/component';

import styles from './example-1.css';

interface MyExample1Signature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

export default class MyExample1Component extends Component<MyExample1Signature> {
  <template>
    <div class={{styles.container}}>
      {{yield}}
    </div>
  </template>
}
