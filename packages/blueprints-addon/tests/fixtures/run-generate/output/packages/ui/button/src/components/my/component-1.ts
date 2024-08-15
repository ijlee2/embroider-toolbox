import Component from '@glimmer/component';

import styles from './component-1.css';

interface MyComponent1Signature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

export default class MyComponent1Component extends Component<MyComponent1Signature> {
  styles = styles;
}
