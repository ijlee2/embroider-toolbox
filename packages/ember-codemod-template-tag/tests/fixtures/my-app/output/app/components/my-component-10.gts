import type { TOC } from '@ember/component/template-only';

interface MyComponent10Signature {
  Args: {
    name: string;
  };
}

const MyComponent10Component: TOC<MyComponent10Signature> = <template>
  <div>
    Hello, {{@name}}!
  </div>
</template>;

export default MyComponent10Component;
