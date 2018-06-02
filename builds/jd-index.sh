#!/usr/bin/env bash
ng build --project iwe7-jd-index
cd dist/iwe7-jd-index
npm publish
cd ../
rm -rf dist/iwe7-jd-index
yarn add iwe7-jd-index
