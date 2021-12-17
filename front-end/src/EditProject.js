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
    .then(res => {
        setProjectName(res.data.projectName);
        setProjectImage(res.data.projectImage);
        setProjectImageTwo(res.data.projectImageTwo);
      })
      .catch((error) => {
        console.log(error);
      })
  })

  const onChangeProjectName = (e) => {
    setProjectName(e.target.value);
  }
  const onChangeProjectImage = (e) => {
    setProjectImage(e.target.value);
  }
  const onChangeProjectImageTwo = (e) => {
    setProjectImageTwo(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const projectObject = {
        projectName, projectImage, projectImageTwo
    }
    console.log(projectObject);

    axios.post(`http://localhost:8000/api/projects/edit/${id}`, projectObject)
      .then((res) => {
        console.log(res.data)
        console.log('Graphic successfully updated')
      }).catch((error) => {
        console.log(error)
      })
  }



    return (
      <form onSubmit={onSubmit}>
          <label>Name</label>
          <input type="text" value={projectName} onChange={onChangeProjectName} />
          <label>Image</label>
          <input type="text" value={projectImage} onChange={onChangeProjectImage} />
          <label>Image Two</label>
          <input type="text" value={projectImageTwo} onChange={onChangeProjectImageTwo} />
        <button type="submit">
          Update Project
        </button>
      </form>
    );
}
export default EditProject;