import { myExampleFunction } from '@my-org-ui/button';
import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';

module('Integration | Modifier | my-example/function', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template>
      <div {{myExampleFunction}}></div>
    </template>);

    assert.ok(true);
  });
});
