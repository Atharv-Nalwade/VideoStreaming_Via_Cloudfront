const express = require('express');
const { getSignedUrl } = require('@aws-sdk/cloudfront-signer');
const app = express();
const dotenv=require('dotenv')
const bodyParser = require('body-parser');
dotenv.config()


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.render('index', { signedUrl: null }); // Initial rendering without a signed URL
});

app.post('/', (req, res) => {
  const selectedVideo = req.body.video
  console.log('Selected video:', selectedVideo);
  try {
    
    const signedUrl = getSignedUrl({
      keyPairId: process.env.CLOUDFRONT_KEYPAIR_ID,
      privateKey: process.env.CLOUDFRONT_PRIVATE_KEY,
      url: process.env.DISTRIBUTION_LINK+'/'+selectedVideo,
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
