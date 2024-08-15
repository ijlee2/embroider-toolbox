import type MyExample1 from './components/my/example-1.gts';
export default interface MyOrgUiButtonRegistry {
  'My::Example1': typeof MyExample1;
  'my/example-1': typeof MyExample1;
}
