#!/usr/bin/env bash
ng build --project iwe7-router
cd dist/iwe7-router
npm publish
cd ../
yarn add iwe7-router
