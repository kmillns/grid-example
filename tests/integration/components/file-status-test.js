import { module, test } from 'qunit';
import { setupRenderingTest } from 'grid-example/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | file-status', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('status', 'scheduled');
    await render(hbs`<FileStatus @currentStatus={{this.status}} />`);

    assert.dom('[data-test-file-status]').hasClass('file-status');
  });

  test('available status icon is not rendered when status is scheduled', async function (assert) {
    this.set('status', 'scheduled');
    await render(hbs`<FileStatus @currentStatus={{this.status}} />`);

    assert.dom('[data-test-file-status-icon]').doesNotExist();
  });

  test('available status icon is rendered when status is available', async function (assert) {
    this.set('status', 'available');
    await render(hbs`<FileStatus @currentStatus={{this.status}} />`);

    assert.dom('[data-test-file-status-icon]').exists();
  });

  test('status is correctly title cased when starting in all lower case', async function (assert) {
    this.set('status', 'available');
    await render(hbs`<FileStatus @currentStatus={{this.status}} />`);

    assert.dom('[datat-test-file-status-name]').hasText('Available');
  });

  test('status is correctly title cased when starting in all upper case', async function (assert) {
    this.set('status', 'SCHEDULED');
    await render(hbs`<FileStatus @currentStatus={{this.status}} />`);

    assert.dom('[datat-test-file-status-name]').hasText('Scheduled');
  });

  test('status is correctly title cased when starting in mixed case', async function (assert) {
    this.set('status', 'mIxEdCaSe');
    await render(hbs`<FileStatus @currentStatus={{this.status}} />`);

    assert.dom('[datat-test-file-status-name]').hasText('Mixedcase');
  });
});
