import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class FilesRoute extends Route {
  @service store;

  async model() {
    return this.store.findAll('file');
  }
}
