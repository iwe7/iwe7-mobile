#!/usr/bin/env bash
ng build --project iwe7-lodash
cd dist/iwe7-lodash
npm publish
cd ../
yarn add iwe7-lodash
