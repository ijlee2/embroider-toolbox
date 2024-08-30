import { module, test } from 'qunit';
import { setupTest } from '<%= options.testApp.name %>/tests/helpers';

module('Unit | Service | <%= options.entity.name %>', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const service = this.owner.lookup('service:<%= options.entity.name %>');

    assert.ok(service);
  });
});
