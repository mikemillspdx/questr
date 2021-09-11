'use strict';
let aws = require('aws-sdk');
let s3 = new aws.S3({ apiVersion: '2006-03-01' });
aws.config.update({accessKeyId: '', secretAccessKey: ''});

const bucket = 'questr'
const signedUrlExpireSeconds = 60 * 6; // your expiry time in seconds.

exports.handler = (event, context, callback) => {
	var self = {};
	var fileName =  event.queryStringParameters.key;
const url = s3.getSignedUrl('getObject', {
 Bucket: bucket,
 Key: fileName,
 Expires: signedUrlExpireSeconds
});
var urlVal = {"url": url};

callback(null, {
    statusCode: 200,
    body: JSON.stringify(urlVal),
    headers: {'Content-Type': 'application/json'}
});
};
