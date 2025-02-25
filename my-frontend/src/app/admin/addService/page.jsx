'use client'
import React from 'react'
// import addservice from '../assets/addservice.png'
import MDEditor from '@uiw/react-md-editor';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


const AddServicesSchema = Yup.object().shape({});


const AddServices = () => {
  const router = useRouter();

  // const [selFile, setSelFile] = useState("");

  const [markdownContent, setMarkdownContent] = useState("*Add Services*");

  const addServiceForm = useFormik({
    initialValues: {
      name: '',
      servicecategory: '',
      description: '',
      image: '',
      content: ""
    },
    onSubmit: async (values, action) => {
      // values.simage = selFile;
      values.content = markdownContent;
      console.log(values);


      const res = await fetch('http://localhost:5000/service/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);
      action.resetForm();

      if (res.status === 200) {
        
        toast.success("Login Successfully");
        router.push("/services");
      } else {
        toast.error("Failed to add");
        
      }
    },
    validationSchema: AddServicesSchema
  });



  return (
    <div className="card srv-card mt-5 w-1/2 d-flex mx-auto p-4">
      <h1 className="text-center">Add Services</h1>
      <div className='mt-5' data-color-mode="light">
        <MDEditor value={markdownContent} onChange={(v) => setMarkdownContent(v)} />
      </div>
      <form onSubmit={addServiceForm.handleSubmit}>
        <p className='error-label'> {addServiceForm.touched.name && addServiceForm.errors.name}</p>
        <input type="text" className="form-control mt-4 w-50" placeholder="Service Name" id="name" onChange={addServiceForm.handleChange} value={addServiceForm.values.name} />
        <p className='error-label'> {addServiceForm.touched.servicecategory && addServiceForm.errors.servicecategory}</p>
        <input type="text" className="form-control mt-4 w-50" placeholder="Service Category" id="servicecategory" onChange={addServiceForm.handleChange} value={addServiceForm.values.servicecategory} />
        <p className='error-label'> {addServiceForm.touched.description && addServiceForm.errors.description}</p>
        <input type="text" className="form-control mt-4 w-50" placeholder="Service Description" id="description" onChange={addServiceForm.handleChange} value={addServiceForm.values.description} />
        <label htmlFor="file" className="form-label mt-4">Upload Image</label>
        <input type="text" className="form-control w-50" placeholder="Upload Image" id="image" onChange={addServiceForm.handleChange} value={addServiceForm.values.image}/>
        <button type="submit" className="btn btn-primary mt-4" onChange={addServiceForm.handleChange}>Add Service</button>
      </form>
    </div>
  )
}

export default AddServices