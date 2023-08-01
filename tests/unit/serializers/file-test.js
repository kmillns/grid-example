import { module, test } from 'qunit';

import { setupTest } from 'grid-example/tests/helpers';

module('Unit | Serializer | file', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('file');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('file', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
