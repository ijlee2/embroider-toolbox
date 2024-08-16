#!/usr/bin/env sh

#----------
#
#  A. Purpose
#
#    Fix all test fixtures after updating the source code.
#
#  B. Usage
#
#    ./update-test-fixtures.sh
#
#---------

# Compile TypeScript
pnpm build

# Update fixtures
rm -r "tests/fixtures/typescript/output"
cp -r "tests/fixtures/typescript/input" "tests/fixtures/typescript/output"

./dist/bin/create-v2-addon-repo.js \
  --name "my-repo" \
  --root "tests/fixtures/typescript/output"
