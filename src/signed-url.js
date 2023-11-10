const AWS = require('aws-sdk');
const cloudfront = new AWS.CloudFront();
const dotenv=require('dotenv');
dotenv.config();

// Set your AWS credentials (Access Key and Secret Key)
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const params = {
  DistributionId: process.env.CLOUDFRONT_DISTRIBUTION_ID,
  KeyPairId: 'your-key-pair-id',
  PrivateKey: 'your-private-key',
  Url: '',
  Expires: Math.floor((Date.now() + 60 * 60 * 1000) / 1000), // Expiration time in seconds
};

const signedUrl = cloudfront.getSignedUrl(params);


console.log('Signed URL:', signedUrl);
