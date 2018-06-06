#!/usr/bin/env bash
ng build --project iwe7-jd
cd dist/iwe7-jd
npm publish
cd ../
rm -rf dist/iwe7-jd
yarn add iwe7-jd
