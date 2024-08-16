import Service from '@ember/service';

export default class MyExampleClassService extends Service {}

declare module '@ember/service' {
  interface Registry {
    'my-example/class': MyExampleClassService;
  }
}
