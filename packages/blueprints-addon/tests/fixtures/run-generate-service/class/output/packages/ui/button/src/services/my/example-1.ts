import Service from '@ember/service';

export default class MyExample1Service extends Service {}

declare module '@ember/service' {
  interface Registry {
    'my/example-1': MyExample1Service;
  }
}
