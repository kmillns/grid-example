import { module, test } from 'qunit';
import { setupRenderingTest } from 'grid-example/tests/helpers';
import { click, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | button-download', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const testClick = () => {

    };

    this.set('testClick', testClick);

    await render(hbs`<ButtonDownload @onClick={{this.testClick}}>Test Button</ButtonDownload>`);

    assert.dom('[data-test-button-download]').hasClass('button--primary');
  });

  test('on click it calls onClick', async function (assert) {
    assert.expect(1, 'one call in onClick should have been asserted');

    const testClick = () => {
      assert.ok(true, 'onClick is called');
    };

    this.set('testClick', testClick);

    await render(hbs`<ButtonDownload @onClick={{this.testClick}}>Test Button</ButtonDownload>`);

    await click('[data-test-button-download]');
  });
});
