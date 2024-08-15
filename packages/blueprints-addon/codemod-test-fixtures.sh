#!/usr/bin/env sh

#----------
#
#  A. Purpose
#
#    Fix all test fixtures after updating the source code.
#
#  B. Usage
#
#    ./codemod-test-fixtures.sh
#
#---------

# Compile TypeScript
pnpm build

./codemod-test-fixture.sh \
  -C "destroy" \
  -N "destroy component my/example-1" \
  run-destroy-component/glimmer

./codemod-test-fixture.sh \
  -C "destroy" \
  -N "destroy component my/example-1" \
  run-destroy-component/template-tag

./codemod-test-fixture.sh \
  -C "destroy" \
  -N "destroy helper my/example-1" \
  run-destroy-helper/class

./codemod-test-fixture.sh \
  -C "destroy" \
  -N "destroy helper my/example-1" \
  run-destroy-helper/function

./codemod-test-fixture.sh \
  -C "destroy" \
  -N "destroy modifier my/example-1" \
  run-destroy-modifier/class

./codemod-test-fixture.sh \
  -C "destroy" \
  -N "destroy modifier my/example-1" \
  run-destroy-modifier/function

./codemod-test-fixture.sh \
  -C "destroy" \
  -N "destroy service my/example-1" \
  run-destroy-service/class

./codemod-test-fixture.sh \
  -C "destroy" \
  -N "destroy util my/example-1" \
  run-destroy-util/function

./codemod-test-fixture.sh \
  -C "generate" \
  -N "generate component my/example-1" \
  run-generate-component/glimmer

./codemod-test-fixture.sh \
  -C "generate" \
  -N "generate component my/example-1 --blueprint-type template-tag" \
  run-generate-component/template-tag

./codemod-test-fixture.sh \
  -C "generate" \
  -N "generate helper my/example-1" \
  run-generate-helper/class

./codemod-test-fixture.sh \
  -C "generate" \
  -N "generate helper my/example-1 --blueprint-type function" \
  run-generate-helper/function

./codemod-test-fixture.sh \
  -C "generate" \
  -N "generate modifier my/example-1" \
  run-generate-modifier/class

./codemod-test-fixture.sh \
  -C "generate" \
  -N "generate modifier my/example-1 --blueprint-type function" \
  run-generate-modifier/function

./codemod-test-fixture.sh \
  -C "generate" \
  -N "generate service my/example-1" \
  run-generate-service/class

./codemod-test-fixture.sh \
  -C "generate" \
  -N "generate util my/example-1" \
  run-generate-util/function

./codemod-test-fixture.sh \
  -C "new" \
  -N "new --location ui/button --name @my-org-ui/button" \
  run-new/typescript
