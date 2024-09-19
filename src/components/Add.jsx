import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideoApi } from '../services/allApi';
import { toast } from 'react-toastify';


function Add({setresult}) {

  const [video,setVideo]=useState({
    title:"",imageUrl:"",videoUrl:""
  })

  const handleAdd=async()=>{
    console.log(video);
    const{title,imageUrl,videoUrl}=video
    if(!title || !imageUrl || !videoUrl){
      toast.warning("Please fill all the fields")
    }
    else{

      const watchUrl=video.videoUrl
      const urls=watchUrl.split("v=")[1]
      const embedUrl=`https://www.youtube.com/embed/${urls}?si=RWW3Yi1hWyE_caJN&autoplay=1`
      video.videoUrl=embedUrl

      const result=await addVideoApi(video)
      if(result.status ==201){
      toast.success("Video uploaded successfully!!")
      setVideo({title:"",imageUrl:"",videoUrl:""})
      handleClose()
      setresult(result)
      }
      else{
        toast.error("Failed to upload video!!")
        console.log(result)
      }
    }

  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button className='btn' onClick={handleShow}>
        <i className='fa-solid fa-square-plus fa-2xl' style={{ color: "#63E6BE" }} />
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <FloatingLabel controlId="floatingInput" label="Video Title" className="mb-3">
              <Form.Control type="text" placeholder="name@example.com" onChange={(e)=>{setVideo({...video,title:e.target.value})}} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingimg" label="Video Thumbnail URL" className="mb-3">
              <Form.Control type="text" placeholder="name@example.com" onChange={(e)=>{setVideo({...video,imageUrl:e.target.value})}} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingvideo" label="Youtube Video URL">
              <Form.Control type="text" placeholder="Password" onChange={(e)=>{setVideo({...video,videoUrl:e.target.value})}} />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add
