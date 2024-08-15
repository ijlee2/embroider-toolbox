import fooBar from '<%= options.addon.name %>/utils/foo/bar';
import { module, test } from 'qunit';

module('Unit | Utility | <%= options.entity.name %>', function () {
  test('it works', function (assert) {
    const result = fooBar();

    assert.true(result);
  });
});
