#!/usr/bin/env bash
ng build --project iwe7-web-storage
cd dist/iwe7-web-storage
npm publish
cd ../
yarn add iwe7-web-storage
