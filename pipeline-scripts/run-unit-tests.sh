#!/usr/bin/env sh
set -e

docker-compose run --rm workspace bash -ce '
  npm run test:unit
'
