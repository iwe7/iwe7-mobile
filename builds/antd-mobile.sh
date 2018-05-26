#!/usr/bin/env bash
ng build --project iwe7-antd-mobile
cd dist/iwe7-antd-mobile
npm publish
cd ../
rm -rf dist/iwe7-antd-mobile
yarn add iwe7-antd-mobile
