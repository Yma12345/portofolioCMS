import React, { Component } from 'react';
import axios from 'axios';
import GraphicsList from './graphics-listing.component';

export default class CreateGraphic extends React.Component {
    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeGraphicImage = this.onChangeGraphicImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          graphicImage: '',
        }
      }
      onChangeGraphicImage(e) {
        this.setState({graphicImage: e.target.value})
      }
      onSubmit(e) {
        e.preventDefault()
         const graphic = {
          graphicImage: this.state.graphicImage,
        };
        axios.post('http://localhost:8000/api/graphics/create', graphic)
          .then(res => console.log(res.data));
          this.setState({graphicImage: ''})
 }
 render() {
    return (
        <div>
            <form onSubmit={this.onSubmit}>
                <label>Image:</label>
                <input type="text" value={this.state.graphicImage} onChange={this.onChangeGraphicImage} placeholder="Zet hier het pad neer naar de afbeelding"></input>
                <button type="submit">Create Graphic</button>
            </form>
            <br></br>
              <br></br>
        
              <GraphicsList> </GraphicsList>
        </div>
    );
}
}