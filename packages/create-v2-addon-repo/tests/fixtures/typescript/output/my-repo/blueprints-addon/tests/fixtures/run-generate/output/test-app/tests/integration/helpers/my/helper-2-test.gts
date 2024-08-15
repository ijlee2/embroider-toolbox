import { myHelper2 } from '@my-org-ui/button';
import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';

module('Integration | Helper | my/helper-2', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    this.inputValue = '1234';

    await render(<template>
      {{myHelper2 this.inputValue}}
    </template>);

    assert.dom().hasText('1234');
  });
});
