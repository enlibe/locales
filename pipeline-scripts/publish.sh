#!/usr/bin/env sh
set -e

docker-compose run --rm workspace bash -ce '
  npm pack --dry-run
  #TODO npm publish
'
