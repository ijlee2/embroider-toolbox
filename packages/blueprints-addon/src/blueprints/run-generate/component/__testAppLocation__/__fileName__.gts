import { <%= options.entity.classifiedName %> } from '<%= options.addon.name %>';
import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';

module('Integration | Component | <%= options.entity.name %>', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template>
      <<%= options.entity.classifiedName %> />
    </template>);

    assert.dom().hasText('');
  });
});
