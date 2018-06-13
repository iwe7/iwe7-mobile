#!/usr/bin/env bash
rm -rf dist/iwe7-voice-entry
ng build --project iwe7-voice-entry
mkdir -p ./dist/iwe7-voice-entry/themes
cp -fr ./projects/iwe7-voice-entry/themes/* ./dist/iwe7-voice-entry/themes/
cd dist/iwe7-voice-entry
npm publish
cd ../
rm -rf dist/iwe7-voice-entry
yarn add iwe7-voice-entry
