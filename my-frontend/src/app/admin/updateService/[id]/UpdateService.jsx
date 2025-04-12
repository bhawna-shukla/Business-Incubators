import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import MDEditor from '@uiw/react-md-editor';

const UpdateService = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [markdownContent, setMarkdownContent] = useState("**Add Services**");
  const [selFile, setSelFile] = useState("");

  const navigate = useNavigate();

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:3000/services/getbyid/" + id);
    const data = await res.json();

    console.log(data);
    setUserData(data);
    setMarkdownContent(data.content);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const submitForm = async (values) => {
    console.log(values);
    values.simage = selFile;
    const data = typeof values === 'string' ? { content: markdownContent } : { ...values, content: markdownContent };
    const res = await fetch('http://localhost:3000/services/update/' + id, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log(res.status);

    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Service Updated'
      });
      navigate('/services');
    }
  };

  const uploadFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelFile(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch("http://localhost:3000/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  return (
    <div>
      <div className="col-md-3 mx-auto pt-5">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center my-5">Update Service</h3>
            {userData !== null ? (
              <Formik initialValues={userData} onSubmit={submitForm}>

                {(addServiceForm) => (

                  <form onSubmit={addServiceForm.handleSubmit}>
                    <label>Service Name</label>

                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {addServiceForm.errors.sname}
                    </span>
                    <input
                      id="sname"
                      onChange={addServiceForm.handleChange}
                      value={addServiceForm.values.sname}
                      type="text"
                      className="form-control mb-4"
                    />

                    <label>Service Category</label>
                    <span
                      style={{ color: "red", fontSize: 10, marginLeft: 10 }}
                    >
                      {addServiceForm.errors.scategory}
                    </span>
                    <input
                      id="scategory"
                      onChange={addServiceForm.handleChange}
                      value={addServiceForm.values.scategory}
                      type="text"
                      className="form-control mb-4"
                    />

                    <label>Service Description</label>
                    <input
                      id="sdescription"
                      onChange={addServiceForm.handleChange}
                      value={addServiceForm.values.sdescription}
                      type="text"
                      className="form-control mb-4"
                    />

                    <label>Upload Image</label>
                    <input
                      type="file"
                      id="simage"
                      className="form-control mb-4"
                      placeholder="Upload Image"
                      onChange={uploadFile} />

                    <div className='mt-5'>
                      <MDEditor value={markdownContent} onChange={(v) => setMarkdownContent(v)} />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                      Submit
                    </button>
                  </form>
                )}
              </Formik>
            ) : (
              <h1 className="text-center my-5">Loading ... </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;