#!/usr/bin/env bash
ng build --project iwe7-reflect
cd dist/iwe7-reflect
npm publish
cd ../
rm -rf dist/iwe7-reflect
yarn add iwe7-reflect
