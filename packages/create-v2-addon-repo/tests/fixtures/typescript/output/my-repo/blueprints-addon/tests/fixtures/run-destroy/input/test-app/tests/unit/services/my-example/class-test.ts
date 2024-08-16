import { module, test } from 'qunit';
import { setupTest } from 'test-app/tests/helpers';

module('Unit | Service | my-example/class', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const service = this.owner.lookup('service:my-example/class');

    assert.ok(service);
  });
});
