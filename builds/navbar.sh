#!/usr/bin/env bash
ng build --project iwe7-navbar
cd dist/iwe7-navbar
npm publish
cd ../
rm -rf dist/iwe7-navbar
yarn add iwe7-navbar
