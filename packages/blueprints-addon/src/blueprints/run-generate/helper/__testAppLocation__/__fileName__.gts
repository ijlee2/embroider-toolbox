import { <%= options.entity.camelizedName %> } from '<%! options.package.name %>';
import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';

module('Integration | Helper | <%= options.entity.name %>', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.inputValue = '1234';

    await render(<template>>
      {{<%= options.entity.camelizedName %> this.inputValue}}
    </template>);

    assert.dom().hasText('1234');
  });
});