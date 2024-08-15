import Service from '@ember/service';

export default class <%= data.entity.classifiedName %>Service extends Service {}

declare module '@ember/service' {
  interface Registry {
    '<%= data.entity.name %>': <%= data.entity.classifiedName %>Service;
  }
}
