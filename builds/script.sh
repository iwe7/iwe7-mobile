#!/usr/bin/env bash
ng build --project iwe7-script
cd dist/iwe7-script
npm publish
cd ../
rm -rf dist/iwe7-script
yarn add iwe7-script
