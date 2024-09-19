import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { delVideosApi,addHistoryApi } from '../services/allApi';
import { toast } from 'react-toastify';

function VideoCard({video,res,cond}) {

    const [show, setShow] = useState(false);

    const handleDelete=async()=>{
        const result=await delVideosApi(video.id)
        if(result.status===200){
            toast.success("Video Removed!!!")
            res(result)
        }
    }

    const handleDrag=(e)=>{
        console.log("dragging...")
        console.log(video)
        e.dataTransfer.setData('video',JSON.stringify(video))
    }

    const handleClose = () => setShow(false);
    const handleShow = async()=>{
        setShow(true)
        const data={
            vid:video.id,title:video.title,url:video.videoUrl,date:new Date()
        }
        const result=await addHistoryApi(data)
        console.log(result)
    };

    return (
        <>
            <Card style={cond?{width:'100%'}:{ width: '18rem'}} draggable onDragStart={(e)=>{handleDrag(e)}}>
                <Card.Img onClick={handleShow} style={{cursor:'pointer' , height:'100%'}} variant="top" src={video.imageUrl} />
                <Card.Body>
                    <Card.Title>{video.title}</Card.Title>
                    {
                        !cond && 
                        <Button variant="" onClick={handleDelete}><i className="fa-solid fa-trash fa-xl" style={{color: "#ff1a1a",}} /></Button>
                    }
                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{video.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe width="100%" height="315" src={video.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default VideoCard
