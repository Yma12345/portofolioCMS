import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

function EditGraphic() {
  const {id} = useParams();
  let navigate = useNavigate();
  //brings the param from the route

        // Setting up state
        const [graphicImage,setGraphicImage] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/graphics/${id}`)
      .catch((error) => {
        console.log(error);
      })
      //gets the graphics by id
  })

  const onSubmit = (e) => {
    e.preventDefault()

    const graphicObject = {
      graphicImage
    }
    //makes the value into object
    console.log(graphicObject);

    axios.put(`http://localhost:8000/api/graphics/edit/${id}`, graphicObject)
      .then((res) => {
        console.log(res.data)
        console.log('Graphic successfully updated')
        navigate('/');
      }).catch((error) => {
        console.log(error)
      })
      //imports into backend
  }



    return (
      <form onSubmit={onSubmit}>
          <label>Image</label>
          <input type="text" value={graphicImage} onChange={e => setGraphicImage(e.target.value)} />
        <button type="submit">
          Update Graphic
        </button>
      </form>
    );
}
export default EditGraphic;