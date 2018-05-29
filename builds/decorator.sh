#!/usr/bin/env bash
ng build --project iwe7-decorator
cd dist/iwe7-decorator
npm publish
cd ../
rm -rf dist/iwe7-decorator
yarn add iwe7-decorator
