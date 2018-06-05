#!/usr/bin/env bash
ng build --project iwe7-abc
cd dist/iwe7-abc
npm publish
cd ../
rm -rf dist/iwe7-abc
yarn add iwe7-abc
