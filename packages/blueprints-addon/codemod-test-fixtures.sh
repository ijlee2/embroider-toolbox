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
  -N "new --location ui/button --name @my-org-ui/button" \
  run-new/typescript
