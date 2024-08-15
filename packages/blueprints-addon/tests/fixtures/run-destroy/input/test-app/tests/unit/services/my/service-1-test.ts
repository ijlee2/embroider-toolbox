import { module, test } from 'qunit';
import { setupTest } from 'test-app/tests/helpers';

module('Unit | Service | my/service-1', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const service = this.owner.lookup('service:my/service-1');

    assert.ok(service);
  });
});
