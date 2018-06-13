#!/usr/bin/env bash
rm -rf dist/iwe7-car-plate
ng build --project iwe7-car-plate
mkdir -p ./dist/iwe7-car-plate/themes
cp -fr ./projects/iwe7-car-plate/themes/* ./dist/iwe7-car-plate/themes/
cd dist/iwe7-car-plate
npm publish
cd ../
rm -rf dist/iwe7-car-plate
yarn add iwe7-car-plate
