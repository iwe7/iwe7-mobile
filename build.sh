#!/usr/bin/env bash
ng build --project iwe7-square
cd dist/iwe7-square
npm publish
cd ../
rm -rf dist/iwe7-square
yarn add iwe7-square
