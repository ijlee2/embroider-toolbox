import Component from '@glimmer/component';

import styles from './component-2.css';

interface MyComponent2Signature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

export default class MyComponent2Component extends Component<MyComponent2Signature> {
  <template>
    <div class={{styles.container}}>
      {{yield}}
    </div>
  </template>
}
