import React,{useRef,useEffect} from 'react'
// import '../login/login.css'
import '../data/video.css';
import * as faceapi from 'face-api.js'
// import Button from '@mui/material/Button';
// import Webcam
//  from 'react-webcam'
export const Video = () => {
  const videoRef = useRef();
  const canvasRef = useRef();
   
 useEffect(()=>{
     startVideo()
       videoRef && loadModels()
 })

  const startVideo = ()=>{
    navigator.mediaDevices.getUserMedia({video:true})
    .then((currentsStream)=>{
      videoRef.current.srcObject = currentsStream
    }).catch((err)=>{
      console.log(err);
    })
  }

  const loadModels =()=>{
     Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/models'),
      // faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
     ]).then(()=>{
      faceMyDetect()
     })
  }

  const faceMyDetect =()=>{
    setInterval(async()=>{
      const detection = await faceapi.detectAllFaces(videoRef.current,new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks().withFaceExpressions()

    canvasRef.current.innerHtml = faceapi.createCanvasFromMedia(videoRef.current)
    faceapi.matchDimensions(canvasRef.current ,{
       width:940,
       height:650
    })
    const resized = faceapi.resizeResults(detection,{
      width:940,
      height:650
    })

    faceapi.draw.drawDetections(canvasRef.current,resized)
    faceapi.draw.drawFaceLandmarks(canvasRef.current,resized)
    faceapi.draw.drawFaceExpressions(canvasRef.current,resized)

    },1000)
  }
   return (
    <>

    <div className='whole_cnt'>

   
   <div className='myapp'>

    <div className= 'appVide' >
      <video crossOrigin='anonymous'  
      className='vedo'
      ref={videoRef} autoPlay width='500' height='500'></video>
    </div>
   
      <canvas ref={canvasRef}  className="appcanvas" width='240' height='250' ></canvas>
   
   </div>
   </div>
  </>
   )
}


// <div className='whole_cnt'>
//   <div className='cam_css'>
//    <Webcam />
//   </div>
 
//  <div className='btn'>
//  <div className='btn1'>

//   <Button variant="contained">Pause</Button>
//  </div>
//   <div className='btn2'>

//   <Button variant="contained"   >Stop</Button>
//   </div>
//   <div className='btn2'>

//   <Button variant="contained"   >Take photo</Button>
//   </div>
//  </div>
  
//   </div>