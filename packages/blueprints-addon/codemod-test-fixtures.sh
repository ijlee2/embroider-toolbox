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

# Update fixtures for run-destroy
rm -r "tests/fixtures/run-destroy/output"
cp -r "tests/fixtures/run-destroy/input" "tests/fixtures/run-destroy/output"

./dist/bin/blueprints-addon.js \
  destroy component my/component-1 \
  --root "tests/fixtures/run-destroy/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  destroy component my/component-2 \
  --root "tests/fixtures/run-destroy/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  destroy helper my/helper-1 \
  --root "tests/fixtures/run-destroy/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  destroy helper my/helper-2 \
  --root "tests/fixtures/run-destroy/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  destroy modifier my/modifier-1 \
  --root "tests/fixtures/run-destroy/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  destroy modifier my/modifier-2 \
  --root "tests/fixtures/run-destroy/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  destroy service my/service-1 \
  --root "tests/fixtures/run-destroy/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  destroy util my/util-1 \
  --root "tests/fixtures/run-destroy/output/packages/ui/button" \
  --test-app-location "../../../test-app"

# Update fixtures for run-generate
rm -r "tests/fixtures/run-generate/output"
cp -r "tests/fixtures/run-generate/input" "tests/fixtures/run-generate/output"

./dist/bin/blueprints-addon.js \
  generate component my/component-1 \
  --blueprint-type "glimmer" \
  --root "tests/fixtures/run-generate/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  generate component my/component-2 \
  --blueprint-type "template-tag" \
  --root "tests/fixtures/run-generate/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  generate helper my/helper-1 \
  --blueprint-type "class" \
  --root "tests/fixtures/run-generate/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  generate helper my/helper-2 \
  --blueprint-type "function" \
  --root "tests/fixtures/run-generate/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  generate modifier my/modifier-1 \
  --blueprint-type "class" \
  --root "tests/fixtures/run-generate/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  generate modifier my/modifier-2 \
  --blueprint-type "function" \
  --root "tests/fixtures/run-generate/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  generate service my/service-1 \
  --root "tests/fixtures/run-generate/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  generate util my/util-1 \
  --root "tests/fixtures/run-generate/output/packages/ui/button" \
  --test-app-location "../../../test-app"

# Update fixtures for run-new
rm -r "tests/fixtures/run-new/output"
cp -r "tests/fixtures/run-new/input" "tests/fixtures/run-new/output"

./dist/bin/blueprints-addon.js \
  new @my-org-ui/button \
  --location "ui/button" \
  --root "tests/fixtures/run-new/output"
