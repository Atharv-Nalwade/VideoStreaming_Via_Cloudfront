import './App.css';


function App() {
  return (
    <div className="App">
      <h2>Welcome to my Video Streaming Service</h2>
      <h3>Built using CloudFront, S3 and React</h3>
      <video width='700' height='400' controls>
<source src={process.env.REACT_APP_VIDEO_LINK} type='video/mp4'></source>
      </video>
    </div>
  );
}


export default App;
