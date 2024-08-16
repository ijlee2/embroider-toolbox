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

# Update fixtures for run-destroy
rm -r "tests/fixtures/run-destroy/output"
cp -r "tests/fixtures/run-destroy/input" "tests/fixtures/run-destroy/output"

./dist/bin/blueprints-addon.js \
  destroy component my-example/glimmer \
  --root "tests/fixtures/run-destroy/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  destroy component my-example/template-tag \
  --root "tests/fixtures/run-destroy/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  destroy helper my-example/class \
  --root "tests/fixtures/run-destroy/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  destroy helper my-example/function \
  --root "tests/fixtures/run-destroy/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  destroy modifier my-example/class \
  --root "tests/fixtures/run-destroy/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  destroy modifier my-example/function \
  --root "tests/fixtures/run-destroy/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  destroy service my-example/class \
  --root "tests/fixtures/run-destroy/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  destroy util my-example/function \
  --root "tests/fixtures/run-destroy/output/packages/ui/button" \
  --test-app-location "../../../test-app"

# Update fixtures for run-generate
rm -r "tests/fixtures/run-generate/output"
cp -r "tests/fixtures/run-generate/input" "tests/fixtures/run-generate/output"

./dist/bin/blueprints-addon.js \
  generate component my-example/glimmer \
  --blueprint "glimmer" \
  --root "tests/fixtures/run-generate/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  generate component my-example/template-tag \
  --blueprint "template-tag" \
  --root "tests/fixtures/run-generate/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  generate helper my-example/class \
  --blueprint "class" \
  --root "tests/fixtures/run-generate/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  generate helper my-example/function \
  --blueprint "function" \
  --root "tests/fixtures/run-generate/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  generate modifier my-example/class \
  --blueprint "class" \
  --root "tests/fixtures/run-generate/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  generate modifier my-example/function \
  --blueprint "function" \
  --root "tests/fixtures/run-generate/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  generate service my-example/class \
  --root "tests/fixtures/run-generate/output/packages/ui/button" \
  --test-app-location "../../../test-app"

./dist/bin/blueprints-addon.js \
  generate util my-example/function \
  --root "tests/fixtures/run-generate/output/packages/ui/button" \
  --test-app-location "../../../test-app"

# Update fixtures for run-new
rm -r "tests/fixtures/run-new/output"
cp -r "tests/fixtures/run-new/input" "tests/fixtures/run-new/output"

./dist/bin/blueprints-addon.js \
  new @my-org-ui/button \
  --location "ui/button" \
  --root "tests/fixtures/run-new/output"
