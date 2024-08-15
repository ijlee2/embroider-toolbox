import { MyComponent2 } from '@my-org-ui/button';
import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';

module('Integration | Component | my/component-2', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template>
      <MyComponent2 />
    </template>);

    assert.dom().hasText('');
  });
});
