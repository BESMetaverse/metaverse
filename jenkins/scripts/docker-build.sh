#!/bin/sh

# Default git commit number
GIT_COMMIT=unspecified

# Get current get commit number
LABEL=$(git log -1 --format=%h) 
echo "Build docker image with label "$LABEL

echo $NEXT_PUBLIC_API_KEY
echo $NEXT_PUBLIC_PROJECT_ID
# Build docker of current directory
docker build  --build-arg NEXT_PUBLIC_API_KEY=$NEXT_PUBLIC_API_KEY --build-arg NEXT_PUBLIC_PROJECT_ID=$NEXT_PUBLIC_PROJECT_ID -t rnssolutions/besmetaverse-frontend:$LABEL .
