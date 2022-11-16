#!/bin/bash

# cleanup
rm -rf cwec_latest.xml.zip
rm -rf cwec_*.xml

# fetch latest
wget https://cwe.mitre.org/data/xml/cwec_latest.xml.zip

# unzip
unzip cwec_latest.xml.zip

# todo: process
