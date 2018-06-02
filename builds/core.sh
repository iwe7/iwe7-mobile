#!/usr/bin/env bash
ng build --project iwe7-core
cd dist/iwe7-core
npm publish
cd ../
rm -rf dist/iwe7-core
yarn add iwe7-core
