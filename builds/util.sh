#!/usr/bin/env bash
ng build --project iwe7-util
cd dist/iwe7-util
npm publish
cd ../
rm -rf dist/iwe7-util
yarn add iwe7-util
