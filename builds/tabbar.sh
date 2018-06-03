#!/usr/bin/env bash
ng build --project iwe7-tabbar
cd dist/iwe7-tabbar
npm publish
cd ../
rm -rf dist/iwe7-tabbar
yarn add iwe7-tabbar
