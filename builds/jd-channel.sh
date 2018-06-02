#!/usr/bin/env bash
ng build --project iwe7-jd-channel
cd dist/iwe7-jd-channel
npm publish
cd ../
rm -rf dist/iwe7-jd-channel
yarn add iwe7-jd-channel
