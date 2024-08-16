import myExampleFunction from '@my-org-ui/button/utils/my-example/function';
import { module, test } from 'qunit';

module('Unit | Utility | my-example/function', function () {
  test('it works', function (assert) {
    const result = myExampleFunction();

    assert.true(result);
  });
});
