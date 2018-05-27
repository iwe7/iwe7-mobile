#!/usr/bin/env bash
ng build --project iwe7-dialog
cd dist/iwe7-dialog
npm publish
cd ../
rm -rf dist/iwe7-dialog
yarn add iwe7-dialog
