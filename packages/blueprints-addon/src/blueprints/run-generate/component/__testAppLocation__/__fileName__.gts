import { <%= data.entity.classifiedName %> } from '<%! options.package.name %>';
import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';

module('Integration | Component | <%= data.entity.name %>', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template>
      <<%= data.entity.classifiedName %> />
    </template>);

    assert.dom().hasText('');
  });
});
