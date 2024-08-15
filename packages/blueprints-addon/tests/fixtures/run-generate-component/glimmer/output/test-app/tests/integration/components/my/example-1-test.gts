import { MyExample1 } from '@my-org-ui/button';
import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';

module('Integration | Component | my/example-1', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template>
      <MyExample1 />
    </template>);

    assert.dom().hasText('');
  });
});
