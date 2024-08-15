import { module, test } from 'qunit';
import { setupTest } from 'test-app/tests/helpers';

module('Unit | Service | <%= data.entity.name %>', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const service = this.owner.lookup('service:<%= data.entity.name %>');

    assert.ok(service);
  });
});
