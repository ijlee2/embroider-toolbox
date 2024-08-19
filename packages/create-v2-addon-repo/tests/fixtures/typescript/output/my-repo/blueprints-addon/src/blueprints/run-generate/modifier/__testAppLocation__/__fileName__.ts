import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from '<%= options.testApp.name %>/tests/helpers';

module('Integration | Modifier | <%= options.entity.name %>', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <div {{<%= options.entity.name %>}}></div>
    `);

    assert.ok(true);
  });
});
