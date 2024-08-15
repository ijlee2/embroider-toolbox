import myUtil1 from '@my-org-ui/button/utils/my/util-1';
import { module, test } from 'qunit';

module('Unit | Utility | my/util-1', function () {
  test('it works', function (assert) {
    const result = myUtil1();

    assert.true(result);
  });
});
