#!/usr/bin/env bash
rm -rf dist/iwe7-keyboard
ng build --project iwe7-keyboard
mkdir -p ./dist/iwe7-keyboard/themes
cp -fr ./projects/iwe7-keyboard/themes/* ./dist/iwe7-keyboard/themes/
cd dist/iwe7-keyboard
npm publish
cd ../
rm -rf dist/iwe7-keyboard
yarn add iwe7-keyboard
