import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | array-to-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.set('inputValue', '1234');

    await render(hbs`{{array-to-list this.inputValue}}`);

    assert.dom(this.element).hasText('1234');
  });

  test('it converts an array to a comma-separated string', async function (assert) {
    this.set('inputValue', ['alpha', 'beta', 'gamma', 'delta']);

    await render(hbs`{{array-to-list this.inputValue}}`);

    assert.dom(this.element).hasText('alpha, beta, gamma, delta');
  });

  test('it returns the argument if it is not an array', async function (assert) {
    this.set('inputValue', 1234);

    await render(hbs`{{array-to-list this.inputValue}}`);

    assert.dom(this.element).hasText('1234');
  });
});
