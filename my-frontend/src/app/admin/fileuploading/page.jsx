'use client'
import axios from 'axios'
import React from 'react'
import toast from 'react-hot-toast'

const FileUpload = () => {

    const uploadFile =(e) =>{
        const file = e.target.files[0]
        const fd = new FormData();
        fd.append('file', file);
        fd.append('upload_preset', 'business_incubator')
        fd.append('cloud_name', 'dz62zsfp2')

        axios.post('https://api.cloudinary.com/v1_1/dz62zsfp2/image/upload', fd)
        axios.post('https://api.cloudinary.com/v1_1/dz62zsfp2/image/upload', fd)
        .then((result) => {
            toast.success('File Upload Successfully')
            console.log(result.data);
        }).catch((err) => {
            console.log(err);
            toast.error('Failed to Upload File')
        });

    }
  return (
    <div className='flex justify-center items-center h-[90vh]'>
        <label htmlFor='upload-file' className='block rounded-lg text-2xl border-2 border-dashed p-5 mt-5 cursor-pointer w-1/2 text-blue-600'> Click Here to Upload File</label>
        <input id='upload-file' type='file' onChange={uploadFile} className='hidden'></input>
    </div>
  )
}

export default FileUpload