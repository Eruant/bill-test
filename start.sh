#!/bin/bash

echo 'Building image'
docker build -t bill-test .

echo 'Running image'
docker run -i -p 8080:8080 -t bill-test
