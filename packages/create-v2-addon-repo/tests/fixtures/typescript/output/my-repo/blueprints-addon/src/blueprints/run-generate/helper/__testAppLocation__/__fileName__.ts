import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';

module('Integration | Helper | <%= options.entity.name %>', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.inputValue = '1234';

    await render(hbs`
      {{<%= options.entity.name %> this.inputValue}}
    `);

    assert.dom().hasText('1234');
  });
});
