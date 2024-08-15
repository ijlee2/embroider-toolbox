import <%= options.entity.camelizedName %> from '<%= options.addon.name %>/utils/<%= options.entity.name %>';
import { module, test } from 'qunit';

module('Unit | Utility | <%= options.entity.name %>', function () {
  test('it works', function (assert) {
    const result = <%= options.entity.camelizedName %>();

    assert.true(result);
  });
});
