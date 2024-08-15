#!/usr/bin/env sh

#----------
#
#  A. Purpose
#
#    Fix the expected output of a test fixture after updating the source code.
#
#  B. Usage
#
#    For named arguments, do not include `=` between the flag and the value.
#    Positional arguments are to appear at the end.
#
#    ./codemod-test-fixture.sh [OPTIONAL-FLAGS] <FIXTURE-NAME>
#
#---------

# Get named arguments for the binary
while getopts ":C:N:" flag
do
  case $flag in
    C) COMMAND=$OPTARG;;
    N) NAMED_ARGUMENTS=$OPTARG;;
  esac
done

# Get fixture name
FIXTURE=${@:$OPTIND:2}

if [ ! $FIXTURE ]
then
  echo "ERROR: Please specify the fixture name.\n"
  exit 1
elif [ ! -d "tests/fixtures/$FIXTURE/input" ]
then
  echo "ERROR: Input folder \`tests/fixtures/$FIXTURE/input\` does not exist.\n"
  exit 1
fi

rm -r "tests/fixtures/$FIXTURE/output"
cp -r "tests/fixtures/$FIXTURE/input" "tests/fixtures/$FIXTURE/output"

if [[ $COMMAND == "destroy" || $COMMAND == "generate" ]]
then
  ./dist/bin/blueprints-addon.js $NAMED_ARGUMENTS --root "tests/fixtures/$FIXTURE/output/packages/ui/button" --test-app-location "../../../test-app"
elif [[ $COMMAND == "new" ]]
then
  ./dist/bin/blueprints-addon.js $NAMED_ARGUMENTS --root "tests/fixtures/$FIXTURE/output"
fi

echo "SUCCESS: Updated the output of $FIXTURE.\n"
