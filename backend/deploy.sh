#!/bin/bash

docker build -t backend .
docker run -p 3005:3005 backend