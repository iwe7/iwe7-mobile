#!/usr/bin/env bash
ng build --project iwe7-scrolling
cd dist/iwe7-scrolling
npm publish
cd ../
rm -rf dist/iwe7-scrolling
yarn add iwe7-scrolling
