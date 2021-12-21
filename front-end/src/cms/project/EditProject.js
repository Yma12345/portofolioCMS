import React, { useState, useEffect } from "react";
import axios from 'axios';
import {useParams} from "react-router-dom";

function EditProject() {
  const {id} = useParams();
        // Setting up state
        const [projectName,setProjectName] = useState('');
        const [projectImage,setProjectImage] = useState('');
        const [projectImageTwo,setProjectImageTwo] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/projects/${id}`)
      .catch((error) => {
        console.log(error);
      })
  })

  const onSubmit = (e) => {
    e.preventDefault()

    const projectObject = {
        projectName, projectImage, projectImageTwo
    }
    console.log(projectObject);

    axios.put(`http://localhost:8000/api/projects/edit/${id}`, projectObject)
      .then((res) => {
        console.log(res.data)
        console.log('Project successfully updated')
      }).catch((error) => {
        console.log(error)
      })
  }



    return (
      <form onSubmit={onSubmit}>
          <label>Name</label>
          <input type="text" value={projectName} onChange={e => setProjectName(e.target.value)} />
          <label>Image</label>
          <input type="text" value={projectImage} onChange={e => setProjectImage(e.target.value)} />
          <label>Image Two</label>
          <input type="text" value={projectImageTwo} onChange={e => setProjectImageTwo(e.target.value)} />
        <button type="submit">
          Update Project
        </button>
      </form>
    );
}
export default EditProject;