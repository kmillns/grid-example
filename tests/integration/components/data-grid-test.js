import { module, test } from 'qunit';
import { setupRenderingTest } from 'grid-example/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | data-grid', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`<DataGrid />`);

    assert.dom('[data-test-grid]').hasClass('data-grid');
  });

  test('row count is 0 when nothing is passed in', async function (assert) {
    await render(hbs`<DataGrid />`);

    assert.dom('[data-test-grid-table-body] > *').exists({ count: 0 });
  });

  test('row count is 3 when 3 items are passed in', async function (assert) {
    const data = [
      { id:0, name: "name 1", device: "device 1", path: "path 1", status: "scheduled" },
      { id:1, name: "name 2", device: "device 2", path: "path 2", status: "available" },
      { id:2, name: "name 3", device: "device 3", path: "path 3", status: "scheduled" },
    ];
  
    this.set('data', data);

    await render(hbs`<DataGrid @content={{this.data}} />`);

    assert.dom('[data-test-grid-table-body] > *').exists({ count: 3 });
  });

  test('select all starts unselected and not indeterminate', async function (assert) {
    const data = [
      { id:0, name: "name 1", device: "device 1", path: "path 1", status: "scheduled" },
      { id:1, name: "name 2", device: "device 2", path: "path 2", status: "available" },
      { id:2, name: "name 3", device: "device 3", path: "path 3", status: "scheduled" },
    ];
  
    this.set('data', data);

    await render(hbs`<DataGrid @content={{this.data}} />`);

    assert.dom('[data-test-grid-select-all]').isNotChecked();
    assert.dom('[data-test-grid-select-all]').hasProperty('indeterminate', false);
  });

  test('select all is indeterminate with only 1 of 3 rows checked', async function (assert) {
    const data = [
      { id:0, name: "name 1", device: "device 1", path: "path 1", status: "scheduled" },
      { id:1, name: "name 2", device: "device 2", path: "path 2", status: "available" },
      { id:2, name: "name 3", device: "device 3", path: "path 3", status: "scheduled" },
    ];
  
    this.set('data', data);

    await render(hbs`<DataGrid @content={{this.data}} />`);

    const rowCheckboxes = this.element.querySelectorAll('[data-test-grid-row-checkbox]');

    await click(rowCheckboxes[0]);

    assert.dom('[data-test-grid-select-all]').isNotChecked();
    assert.dom('[data-test-grid-select-all]').hasProperty('indeterminate', true);
  });

  test('select all is checked and not indeterminate with all 3 of 3 rows checked', async function (assert) {
    const data = [
      { id:0, name: "name 1", device: "device 1", path: "path 1", status: "scheduled" },
      { id:1, name: "name 2", device: "device 2", path: "path 2", status: "available" },
      { id:2, name: "name 3", device: "device 3", path: "path 3", status: "scheduled" },
    ];
  
    this.set('data', data);

    await render(hbs`<DataGrid @content={{this.data}} />`);

    const rowCheckboxes = this.element.querySelectorAll('[data-test-grid-row-checkbox]');

    await click(rowCheckboxes[0]);
    await click(rowCheckboxes[1]);
    await click(rowCheckboxes[2]);

    assert.dom('[data-test-grid-select-all]').isChecked();
    assert.dom('[data-test-grid-select-all]').hasProperty('indeterminate', false);
  });

  test('select all is checked and not indeterminate when starting unchecked and clicked', async function (assert) {
    const data = [
      { id:0, name: "name 1", device: "device 1", path: "path 1", status: "scheduled" },
      { id:1, name: "name 2", device: "device 2", path: "path 2", status: "available" },
      { id:2, name: "name 3", device: "device 3", path: "path 3", status: "scheduled" },
    ];
  
    this.set('data', data);

    await render(hbs`<DataGrid @content={{this.data}} />`);

    assert.dom('[data-test-grid-select-all]').isNotChecked();

    await click('[data-test-grid-select-all]');

    assert.dom('[data-test-grid-select-all]').isChecked();
    assert.dom('[data-test-grid-select-all]').hasProperty('indeterminate', false);
  });

  test('select all is checked and not indeterminate when starting indeterminate and clicked', async function (assert) {
    const data = [
      { id:0, name: "name 1", device: "device 1", path: "path 1", status: "scheduled" },
      { id:1, name: "name 2", device: "device 2", path: "path 2", status: "available" },
      { id:2, name: "name 3", device: "device 3", path: "path 3", status: "scheduled" },
    ];
  
    this.set('data', data);

    await render(hbs`<DataGrid @content={{this.data}} />`);

    const rowCheckboxes = this.element.querySelectorAll('[data-test-grid-row-checkbox]');
    await click(rowCheckboxes[0]);

    assert.dom('[data-test-grid-select-all]').isNotChecked();
    assert.dom('[data-test-grid-select-all]').hasProperty('indeterminate', true);

    await click('[data-test-grid-select-all]');

    assert.dom('[data-test-grid-select-all]').isChecked();
    assert.dom('[data-test-grid-select-all]').hasProperty('indeterminate', false);
  });

  test('select all is unchecked and not indeterminate when starting checked and clicked', async function (assert) {
    const data = [
      { id:0, name: "name 1", device: "device 1", path: "path 1", status: "scheduled" },
      { id:1, name: "name 2", device: "device 2", path: "path 2", status: "available" },
      { id:2, name: "name 3", device: "device 3", path: "path 3", status: "scheduled" },
    ];
  
    this.set('data', data);

    await render(hbs`<DataGrid @content={{this.data}} />`);

    await click('[data-test-grid-select-all]');
    assert.dom('[data-test-grid-select-all]').isChecked();

    await click('[data-test-grid-select-all]');

    assert.dom('[data-test-grid-select-all]').isNotChecked();
    assert.dom('[data-test-grid-select-all]').hasProperty('indeterminate', false);
  });

  test('selected count is 0 when no data is passed in', async function (assert) {
    await render(hbs`<DataGrid />`);

    assert.dom('[data-test-selected-count]').hasText('0');
  });

  test('selected count is 0 with initial data', async function (assert) {
    const data = [
      { id:0, name: "name 1", device: "device 1", path: "path 1", status: "scheduled" },
      { id:1, name: "name 2", device: "device 2", path: "path 2", status: "available" },
      { id:2, name: "name 3", device: "device 3", path: "path 3", status: "scheduled" },
    ];
  
    this.set('data', data);

    await render(hbs`<DataGrid @content={{this.data}} />`);

    assert.dom('[data-test-selected-count]').hasText('0');
  });

  test('selected count changes to match selected rows', async function (assert) {
    const data = [
      { id:0, name: "name 1", device: "device 1", path: "path 1", status: "scheduled" },
      { id:1, name: "name 2", device: "device 2", path: "path 2", status: "available" },
      { id:2, name: "name 3", device: "device 3", path: "path 3", status: "scheduled" },
    ];
  
    this.set('data', data);

    await render(hbs`<DataGrid @content={{this.data}} />`);

    assert.dom('[data-test-selected-count]').hasText('0');

    const rowCheckboxes = this.element.querySelectorAll('[data-test-grid-row-checkbox]');
    await click(rowCheckboxes[0]);

    assert.dom('[data-test-selected-count]').hasText('1');

    await click(rowCheckboxes[1]);

    assert.dom('[data-test-selected-count]').hasText('2');

    await click(rowCheckboxes[0]);
    
    assert.dom('[data-test-selected-count]').hasText('1');
  });

  test('selected count changes bewteen row count and 0 on select all', async function (assert) {
    const data = [
      { id:0, name: "name 1", device: "device 1", path: "path 1", status: "scheduled" },
      { id:1, name: "name 2", device: "device 2", path: "path 2", status: "available" },
      { id:2, name: "name 3", device: "device 3", path: "path 3", status: "scheduled" },
    ];
  
    this.set('data', data);

    await render(hbs`<DataGrid @content={{this.data}} />`);

    assert.dom('[data-test-selected-count]').hasText('0');

    await click('[data-test-grid-select-all]');

    assert.dom('[data-test-selected-count]').hasText('3');

    await click('[data-test-grid-select-all]');

    assert.dom('[data-test-selected-count]').hasText('0');
  });
});
