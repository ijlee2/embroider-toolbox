import { myHelper1 } from '@my-org-ui/button';
import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';

module('Integration | Helper | my/helper-1', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template>
      {{myHelper1 '1234'}}
    </template>);

    assert.dom().hasText('1234');
  });
});
