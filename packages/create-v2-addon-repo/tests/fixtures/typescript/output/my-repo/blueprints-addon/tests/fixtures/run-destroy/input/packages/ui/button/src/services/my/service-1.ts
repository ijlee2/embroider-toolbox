import Service from '@ember/service';

export default class MyService1Service extends Service {}

declare module '@ember/service' {
  interface Registry {
    'my/service-1': MyService1Service;
  }
}
