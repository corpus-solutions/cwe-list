#!/bin/bash

# cleanup
rm -rf cwec_latest.xml.zip
rm -rf cwec_*.xml
rm -rf cwe2name.json
rm -rf name2cwe.json

# fetch latest
wget https://cwe.mitre.org/data/xml/cwec_latest.xml.zip

# unzip
unzip cwec_latest.xml.zip

# todo: process
node parse.js