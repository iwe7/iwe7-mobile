#!/usr/bin/env bash
rm -rf dist/iwe7-car-brand
ng build --project iwe7-car-brand
mkdir -p ./dist/iwe7-car-brand/themes
cp -fr ./projects/iwe7-car-brand/themes/* ./dist/iwe7-car-brand/themes/
cd dist/iwe7-car-brand
npm publish
cd ../
rm -rf dist/iwe7-car-brand
yarn add iwe7-car-brand
