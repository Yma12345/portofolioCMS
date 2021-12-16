import React, { useState, useEffect } from "react";
import axios from 'axios';
import {useParams} from "react-router-dom";

function EditGraphic() {
  const {id} = useParams();
        // Setting up state
        const [graphicImage,setGraphicImage] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/graphics/${id}`)
    .then(res => {
        setGraphicImage(res.data.graphicImage);
      })
      .catch((error) => {
        console.log(error);
      })
  })

  const onChangeGraphicImage = (e) => {
    setGraphicImage(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const graphicObject = graphicImage
    console.log(graphicObject);

    axios.post(`http://localhost:8000/api/graphics/edit/${id}`, graphicObject)
      .then((res) => {
        console.log(res.data)
        console.log('Graphic successfully updated')
      }).catch((error) => {
        console.log(error)
      })
  }



    return (
      <form onSubmit={onSubmit}>
          <label>Image</label>
          <input type="text" value={graphicImage} onChange={onChangeGraphicImage} />
        <button type="submit">
          Update Graphic
        </button>
      </form>
    );
}
export default EditGraphic;