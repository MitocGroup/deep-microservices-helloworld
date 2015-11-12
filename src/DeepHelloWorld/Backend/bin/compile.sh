#!/usr/bin/env bash

path=$1
BABEL_ENV=production
babel=$(which babel)

if [ -z ${babel} ]; then
	echo "Seems like babel is not installed!"
	echo ""
	echo "Run 'npm install babel@5.*.* -g' in order to compile the sources..."
	exit 1
fi

babel_version=$(babel --version)

if [[ ${babel_version} =~ ^\s*[6-9].*$ ]]; then
	echo "Seems like your babel ${babel_version} is not compatible with deepify."
	echo ""
	echo "We'd recommend you using babel@5.*.* (npm install babel@5.*.* -g')..."
	exit 1
fi

echo "Start compiling *.es6 using babel ${babel_version}"

cd ${path}; babel -x ".es6" ./ --out-dir ./
