import Component from '@glimmer/component';

interface MyComponent11Signature {
  Args: {
    name: string;
  };
}

export default class MyComponent11Component extends Component<MyComponent11Signature> {
  <template>
    <div>
      Hello, {{@name}}!
    </div>
  </template>
}
