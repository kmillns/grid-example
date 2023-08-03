import { module, test } from 'qunit';
import { setupRenderingTest } from 'grid-example/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | grid-row', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const selectedFileIds = new Set();
    this.set('selectedFileIds', selectedFileIds);

    const file = { id: 0, name: "name 1", device: "device 1", path: "path 1", status: "scheduled" };
    this.set('file', file);

    const selectFile = () => {

    };
    this.set('selectFile', selectFile);

    await render(hbs`<GridRow @selectedFileIds={{this.selectedFileIds}} @selectFile={{this.selectFile}} @file={{this.file}} />`);

    assert.dom('[data-test-grid-row]').hasClass('data-grid__body-row');
  });

  test('selected should be unchecked when selectedFileIds is empty', async function (assert) {
    const selectedFileIds = new Set();
    this.set('selectedFileIds', selectedFileIds);

    const file = { id: 0, name: "name 1", device: "device 1", path: "path 1", status: "scheduled" };
    this.set('file', file);

    const selectFile = () => {

    };
    this.set('selectFile', selectFile);

    await render(hbs`<GridRow @selectedFileIds={{this.selectedFileIds}} @selectFile={{this.selectFile}} @file={{this.file}} />`);

    assert.dom('[data-test-grid-row-checkbox]').isNotChecked();
  });

  test('selected should be checked when selectedFileIds contains file id', async function (assert) {
    const selectedFileIds = new Set([0]);
    this.set('selectedFileIds', selectedFileIds);

    const file = { id: 0, name: "name 1", device: "device 1", path: "path 1", status: "scheduled" };
    this.set('file', file);

    const selectFile = () => {

    };
    this.set('selectFile', selectFile);

    await render(hbs`<GridRow @selectedFileIds={{this.selectedFileIds}} @selectFile={{this.selectFile}} @file={{this.file}} />`);

    assert.dom('[data-test-grid-row-checkbox]').isChecked();
  });

  test('selected should be unchecked when selectedFileIds contains other ids', async function (assert) {
    const selectedFileIds = new Set([2,3]);
    this.set('selectedFileIds', selectedFileIds);

    const file = { id: 0, name: "name 1", device: "device 1", path: "path 1", status: "scheduled" };
    this.set('file', file);

    const selectFile = () => {

    };
    this.set('selectFile', selectFile);

    await render(hbs`<GridRow @selectedFileIds={{this.selectedFileIds}} @selectFile={{this.selectFile}} @file={{this.file}} />`);

    assert.dom('[data-test-grid-row-checkbox]').isNotChecked();
  });

  test('selectFile should be called with file id and true when initially clicked', async function (assert) {
    const selectedFileIds = new Set();
    this.set('selectedFileIds', selectedFileIds);

    const file = { id: 0, name: "name 1", device: "device 1", path: "path 1", status: "scheduled" };
    this.set('file', file);

    const selectFile = (fileId, value) => {
      assert.equal(fileId, 0, 'selectFile should be called with correct fileId');
      assert.equal(value, true, 'value should be true on initial click');
    };
    this.set('selectFile', selectFile);

    await render(hbs`<GridRow @selectedFileIds={{this.selectedFileIds}} @selectFile={{this.selectFile}} @file={{this.file}} />`);

    await click('[data-test-grid-row-checkbox]');
  });

  test('selectFile should be called with alternating true and false as it is clicked', async function (assert) {
    const selectedFileIds = new Set();
    this.set('selectedFileIds', selectedFileIds);

    const file = { id: 0, name: "name 1", device: "device 1", path: "path 1", status: "scheduled" };
    this.set('file', file);

    let clickCount = 0;

    const selectFile = (fileId, value) => {
      const expectedValue = clickCount % 2 === 0;

      assert.equal(fileId, 0, 'selectFile should be called with correct fileId');
      assert.equal(value, expectedValue, `value should be ${expectedValue} on click number ${clickCount + 1}`);

      clickCount = clickCount + 1;
    };
    this.set('selectFile', selectFile);

    await render(hbs`<GridRow @selectedFileIds={{this.selectedFileIds}} @selectFile={{this.selectFile}} @file={{this.file}} />`);

    await click('[data-test-grid-row-checkbox]');
    await click('[data-test-grid-row-checkbox]');
    await click('[data-test-grid-row-checkbox]');
    await click('[data-test-grid-row-checkbox]');
  });
});
