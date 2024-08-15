import Component from '@glimmer/component';

import styles from './<%= data.localFileName %>.css';

interface <%= options.entity.classifiedName %>Signature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

export default class <%= options.entity.classifiedName %>Component extends Component<<%= options.entity.classifiedName %>Signature> {
  styles = styles;
}
