#!/bin/bash
#
# Build the production container and attach it
#
# Run the prod_logs.sh script to see the output
#

docker build -t discordium_prod -f Docker/Dockerfile.prod .

docker run --rm -d -p 5000:80 -p 5001:443 --name discordium_prod discordium_prod

