import { MyExampleTemplateTag } from '@my-org-ui/button';
import { render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'test-app/tests/helpers';

module('Integration | Component | my-example/template-tag', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template>
      <MyExampleTemplateTag />
    </template>);

    assert.dom().hasText('');
  });
});
