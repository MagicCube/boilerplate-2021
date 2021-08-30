#!/bin/sh

TMP_DIST=$TMPDIR${PWD##*/}

npm run build:github-pages
mv -f dist $TMP_DIST
mv -f $TMP_DIST/* ./
rm -rf $TMP_DIST
