#!/bin/bash
aws configure set region eu-west-3
aws s3 rm s3://$S3_BUCKET/* --recursive
aws s3 cp --recursive dist s3://$S3_BUCKET/
