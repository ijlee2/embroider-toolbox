import Component from '@glimmer/component';

import styles from './template-tag.css';

interface MyExampleTemplateTagSignature {
  Args: {};
  Blocks: {
    default: [];
  };
  Element: null;
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class MyExampleTemplateTagComponent extends Component<MyExampleTemplateTagSignature> {
  <template>
    <div class={{styles.container}}>
      {{yield}}
    </div>
  </template>
}
