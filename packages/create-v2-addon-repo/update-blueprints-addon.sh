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
rm -r "src/blueprints/blueprints-addon"
mkdir "src/blueprints/blueprints-addon"

cp -r "../blueprints-addon/bin" "src/blueprints/blueprints-addon/bin"
cp -r "../blueprints-addon/src" "src/blueprints/blueprints-addon/src"
cp -r "../blueprints-addon/tests" "src/blueprints/blueprints-addon/tests"

cp "../blueprints-addon/.eslintignore" "src/blueprints/blueprints-addon/.eslintignore"
cp "../blueprints-addon/.eslintrc.cjs" "src/blueprints/blueprints-addon/.eslintrc.cjs"
cp "../blueprints-addon/.gitignore" "src/blueprints/blueprints-addon/__gitignore__"
cp "../blueprints-addon/.npmignore" "src/blueprints/blueprints-addon/__npmignore__"
cp "../blueprints-addon/.prettierrc.cjs" "src/blueprints/blueprints-addon/.prettierrc.cjs"
cp "../blueprints-addon/build.sh" "src/blueprints/blueprints-addon/build.sh"
cp "../blueprints-addon/CHANGELOG.md" "src/blueprints/blueprints-addon/CHANGELOG.md"
touch "src/blueprints/blueprints-addon/CHANGELOG.md"; echo "# blueprints-addon" > "src/blueprints/blueprints-addon/CHANGELOG.md"
cp "../blueprints-addon/LICENSE.md" "src/blueprints/blueprints-addon/LICENSE.md"
cp "../blueprints-addon/package.json" "src/blueprints/blueprints-addon/package.json"
cp "../blueprints-addon/README.md" "src/blueprints/blueprints-addon/README.md"
cp "../blueprints-addon/tsconfig.build.json" "src/blueprints/blueprints-addon/tsconfig.build.json"
cp "../blueprints-addon/tsconfig.json" "src/blueprints/blueprints-addon/tsconfig.json"
cp "../blueprints-addon/update-test-fixtures.sh" "src/blueprints/blueprints-addon/update-test-fixtures.sh"

# Escape delimiters
find "src/blueprints/blueprints-addon" -type f \
  -exec sed -i '' 's/<%=/\\\\<%=/g' {} \; \
  -exec sed -i '' 's/%>/%\\\\>/g' {} \;

# Update test fixtures
./update-test-fixtures.sh
