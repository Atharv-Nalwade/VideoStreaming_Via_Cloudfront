# Video Streaming Service with CloudFront, S3, and EJS

Welcome to the Video Streaming Service, a web application built using CloudFront, S3, and React. This project provides a simple and effective way to stream videos, utilizing the power of Amazon Web Services (AWS) to deliver a seamless and scalable video streaming experience.

## Architecture Diagram

![Architecture Diagram](assets/Latest%20Arch%20Diagram.png)

## Features

- **CloudFront CDN:** The application leverages CloudFront as a Content Delivery Network (CDN), ensuring low-latency and high-speed delivery of video content to users across the globe.

- **S3 Storage:** Videos are securely stored in Amazon S3, a highly durable and scalable object storage service. S3 provides the backbone for reliable video storage and retrieval.

- **EJS Frontend:** The application uses the EJS templating engine for rendering dynamic content on the server side, providing a responsive and customizable user interface.

- **Video Playback:** Users can enjoy seamless video playback directly in the browser. The built-in HTML5 video player supports common video formats, providing a user-friendly and familiar interface.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the project dependencies.
3. Set up your environment variables. Create a `.env` file in the root directory and provide the necessary configuration, including 
```
VIDEO_LINK='CLOUDFRONT-DISTRIBUTION-KEY/S3-Object-ID'
CLOUDFRONT_KEYPAIR_ID='CLOUDFRONT-KEYPAIRID'
CLOUDFRONT_PRIVATE_KEY='-----BEGIN PRIVATE KEY-----
                           PRIVATE-KEY-GOES-HERE
                        -----END PRIVATE KEY-----'
```
4. Run the server using
```
node server.js
```

## Future Scope

- **Video Transcoding:** Implement video transcoding services to support multiple video formats and resolutions.
- **Multiple Videos Streaming:** Enhance the application to support the streaming of a diverse library of videos. Users should be able to choose and stream their preferred video from the available collection.


## Note
This project is designed for those looking to dive into the world of CloudFront and S3 without the complexity of rocket science — a straightforward, hands-on experience for getting familiar with these AWS services. 🚀