import { <%= data.entity.camelizedName %> } from '<%! options.package.name %>';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';

module('Integration | Modifier | <%= data.entity.name %>', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(hbs`
      <div {{<%= data.entity.camelizedName %>}}></div>
    `);

    assert.ok(true);
  });
});
