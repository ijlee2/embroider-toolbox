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
  -N "destroy component my/example-1" \
  run-destroy-component/typescript

./codemod-test-fixture.sh \
  -N "destroy helper my/example-1" \
  run-destroy-helper/typescript

./codemod-test-fixture.sh \
  -N "destroy modifier my/example-1" \
  run-destroy-modifier/typescript

./codemod-test-fixture.sh \
  -N "destroy service my/example-1" \
  run-destroy-service/typescript

./codemod-test-fixture.sh \
  -N "destroy util my/example-1" \
  run-destroy-util/typescript

./codemod-test-fixture.sh \
  -N "generate component my/example-1" \
  run-generate-component/typescript

./codemod-test-fixture.sh \
  -N "generate helper my/example-1" \
  run-generate-helper/typescript

./codemod-test-fixture.sh \
  -N "generate modifier my/example-1" \
  run-generate-modifier/typescript

./codemod-test-fixture.sh \
  -N "generate service my/example-1" \
  run-generate-service/typescript

./codemod-test-fixture.sh \
  -N "generate util my/example-1" \
  run-generate-util/typescript

./codemod-test-fixture.sh \
  -N "new --location ui/button --name @my-org-ui/button" \
  run-new/typescript
