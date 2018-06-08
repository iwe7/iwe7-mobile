#!/usr/bin/env bash
ng build --project iwe7-better-scroll
cd dist/iwe7-better-scroll
npm publish
cd ../
rm -rf dist/iwe7-better-scroll
yarn add iwe7-better-scroll

