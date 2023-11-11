# Video Streaming Service with CloudFront, S3, and React

Welcome to the Video Streaming Service, a web application built using CloudFront, S3, and React. This project provides a simple and effective way to stream videos, utilizing the power of Amazon Web Services (AWS) to deliver a seamless and scalable video streaming experience.

## Architecture Diagram

![Architecture Diagram](assets/Arch%20Diagram.jpg)

## Features

- **CloudFront CDN:** The application leverages CloudFront as a Content Delivery Network (CDN), ensuring low-latency and high-speed delivery of video content to users across the globe.

- **S3 Storage:** Videos are securely stored in Amazon S3, a highly durable and scalable object storage service. S3 provides the backbone for reliable video storage and retrieval.

- **React Frontend:** The user interface is built using React, a popular JavaScript library for building user interfaces. The React application ensures a responsive and dynamic user experience.

- **Video Playback:** Users can enjoy seamless video playback directly in the browser. The built-in HTML5 video player supports common video formats, providing a user-friendly and familiar interface.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Install the project dependencies.
3. Set up your environment variables. Create a `.env` file in the root directory and provide the necessary configuration, including the `REACT_APP_VIDEO_LINK` for the video source.

   ```env
   REACT_APP_VIDEO_LINK=https://CLOUDFRONT_DISTRIBUTION_DOMAIN_NAME/S3_OBJECT_KEY
   ```
4. Run the development server.

## Future Scope

- **Enhanced Security:** Implementing signed URLs soon.
- **Temporary Access:** Generate time-limited URLs.
- **Controlled Access:** Useful for restricting video access to paid subscribers or authenticated users.


## Note
This project is designed for those looking to dive into the world of CloudFront and S3 without the complexity of rocket science — a straightforward, hands-on experience for getting familiar with these AWS services. 🚀