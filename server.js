const express = require('express');
const { getSignedUrl } = require('@aws-sdk/cloudfront-signer');
const app = express();
const dotenv=require('dotenv')
dotenv.config()


app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
  try {
    const signedUrl = getSignedUrl({
      keyPairId: process.env.CLOUDFRONT_KEYPAIR_ID,
      privateKey: process.env.CLOUDFRONT_PRIVATE_KEY,
      url: process.env.VIDEO_LINK,
      dateLessThan: new Date(Date.now() + 1000 * 60),
    });

    res.render('index', { signedUrl });
  } catch (error) {
    console.error('Error generating signed URL:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
