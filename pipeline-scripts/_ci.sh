#!/usr/bin/env sh
set -ex

./pipeline-scripts/run-vulnerabilities-scanning.sh
./pipeline-scripts/build.sh
./pipeline-scripts/run-format-check.sh
./pipeline-scripts/run-lint-check.sh
./pipeline-scripts/run-unit-tests.sh
./pipeline-scripts/run-integration-tests.sh
./pipeline-scripts/publish.sh
