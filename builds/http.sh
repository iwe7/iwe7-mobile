#!/usr/bin/env bash
ng build --project iwe7-http
cd dist/iwe7-http
npm publish
cd ../
yarn add iwe7-http
