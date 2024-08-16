import Component from '@glimmer/component';

import styles from './glimmer.css';

interface MyExampleGlimmerSignature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

export default class MyExampleGlimmerComponent extends Component<MyExampleGlimmerSignature> {
  styles = styles;
}
