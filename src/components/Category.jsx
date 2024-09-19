import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategoryApi } from '../services/allApi';
import { toast } from 'react-toastify';
import CategorySet from './CategorySet';
import { getCategoryApi } from '../services/allApi';


function Category() {

  const [show, setShow] = useState(false);
  const [cat,setCat]=useState("")
  const [resp,setResp]=useState({})

  const handleCategory=async()=>{
    if(!cat){
      toast.warning("Enter valid Input!!")
    }
    else{
      const result=await addCategoryApi({category:cat,videos:[]})
      if(result.status==201){
        toast.success("Category Added Successfully!!")
        setCat("")
        handleClose()
        setResp(result)
      }
      else{
        toast.error("Failed to Add Category!!")
        console.log(result)
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='d-grid'>
        <Button className='btn btn-success' onClick={handleShow}>Add Category</Button>{' '}
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <FloatingLabel controlId="floatingInput" label="Category Name" className="mb-3">
              <Form.Control type="text" onChange={(e)=>{setCat(e.target.value)}} placeholder="name@example.com" />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCategory}>Add</Button>
        </Modal.Footer>
      </Modal>
      <CategorySet res={resp}/>
    </>
  )
}

export default Category
