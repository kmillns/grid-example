import { module, test } from 'qunit';
import { setupTest } from 'grid-example/tests/helpers';

module('Unit | Route | files', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:files');
    assert.ok(route);
  });
});
