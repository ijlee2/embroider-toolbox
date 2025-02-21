import Component from '@glimmer/component';

import styles from './my-component-07.css';

interface MyComponent07Signature {
  Args: {
    name: string;
  };
}

export default class MyComponent07Component extends Component<MyComponent07Signature> {
  styles = styles;
}
