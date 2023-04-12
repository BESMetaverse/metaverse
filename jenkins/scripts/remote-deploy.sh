#!/bin/sh


#=====================================
# HOST_IP  controlled by jenkins env
# HOST_USER controlled by jenkins envs
# PORT controlled by jenkins
#=====================================

# Get current git commit number
LABEL=$(git log -1 --format=%h)

CONTAINER_NAME=besmetaverse-frontend
CONTAINER_CURRENT=rnssolutions/$CONTAINER_NAME:$LABEL
docker stop $CONTAINER_NAME-$BRANCH_NAME
docker rm -f $CONTAINER_NAME-$BRANCH_NAME
docker run -d --restart=always -p $PORT:3000 --name $CONTAINER_NAME-$BRANCH_NAME $CONTAINER_CURRENT
