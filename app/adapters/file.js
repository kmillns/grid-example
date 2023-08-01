import RESTAdapter from '@ember-data/adapter/rest';

export default class FileAdapter extends RESTAdapter {
  namespace = 'api/files';

  // see: https://github.com/emberjs/data/blob/main/packages/adapter/src/rest.ts#L592
  findAll() {
    let response = this.ajax('api/files/files.json');
    return response;
  }
}
