import templateOnlyComponent from '@ember/component/template-only';

interface MyComponent04Signature {
  Args: {
    name: string;
  };
}

const MyComponent04Component = templateOnlyComponent<MyComponent04Signature>();

export default MyComponent04Component;
