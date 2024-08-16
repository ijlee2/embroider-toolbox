#!/usr/bin/env sh

#----------
#
#  A. Purpose
#
#    Copies `src` and `tests` from the `blueprints-addon` package.
#
#  B. Usage
#
#    ./update-blueprints-addon.sh
#
#---------

# Copy files
rm -r "src/blueprints/blueprints-addon/bin"
rm -r "src/blueprints/blueprints-addon/src"
rm -r "src/blueprints/blueprints-addon/tests"
rm "src/blueprints/blueprints-addon/update-test-fixtures.sh"

cp -r "../blueprints-addon/bin" "src/blueprints/blueprints-addon/bin"
cp -r "../blueprints-addon/src" "src/blueprints/blueprints-addon/src"
cp -r "../blueprints-addon/tests" "src/blueprints/blueprints-addon/tests"
cp "../blueprints-addon/update-test-fixtures.sh" "src/blueprints/blueprints-addon/update-test-fixtures.sh"

# Escape delimiters
find "src/blueprints/blueprints-addon" -type f \
  -exec sed -i '' 's/<%=/\\\\<%=/g' {} \; \
  -exec sed -i '' 's/%>/%\\\\>/g' {} \;

# Update test fixtures
./update-test-fixtures.sh
