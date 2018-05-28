#!/usr/bin/env bash
ng build --project iwe7-flex
cd dist/iwe7-flex
npm publish
cd ../
rm -rf dist/iwe7-flex
yarn add iwe7-flex
