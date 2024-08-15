import myExample1 from '@my-org-ui/button/utils/my/example-1';
import { module, test } from 'qunit';

module('Unit | Utility | my/example-1', function () {
  test('it works', function (assert) {
    const result = myExample1();

    assert.true(result);
  });
});
