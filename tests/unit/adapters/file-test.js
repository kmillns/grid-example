import { module, test } from 'qunit';

import { setupTest } from 'grid-example/tests/helpers';

module('Unit | Adapter | file', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:file');
    assert.ok(adapter);
  });
});
