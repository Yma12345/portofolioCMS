import React, { Component } from 'react';
import axios from 'axios';
import ProjectsList from './projects-listing.component';

export default class CreateProject extends Component {
  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeProjectName = this.onChangeProjectName.bind(this);
    this.onChangeProjectImage = this.onChangeProjectImage.bind(this);
    this.onChangeProjectImageTwo = this.onChangeProjectImageTwo.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      projectName: '',
      projectImage: '',
      projectImageTwo: '',
    }
  }
  onChangeProjectName(e) {
    this.setState({ projectName: e.target.value })
  }
  onChangeProjectImage(e) {
    this.setState({ projectImage: e.target.value })
  }
  onChangeProjectImageTwo(e) {
    this.setState({ projectImageTwo: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const project = {
      projectName: this.state.projectName,
      projectImage: this.state.projectImage,
      projectImageTwo: this.state.projectImageTwo,
    };
    axios.post('http://localhost:8000/api/projects/create', project)
      .then(res => console.log(res.data));
    this.setState({ projectName: '', projectImage: '', projectImageTwo: '' })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Name:</label>
          <br></br>
          <input type="text" value={this.state.projectName} onChange={this.onChangeProjectName} placeholder="Zet hier de naam van het project neer"></input>
          <br></br>
          <label>Image:</label>
          <br></br>
          <input type="text" value={this.state.projectImage} onChange={this.onChangeProjectImage} placeholder="Zet hier het pad neer naar de afbeelding"></input>
          <br></br>
          <label>Image2:</label>
          <br></br>
          <input type="text" value={this.state.projectImageTwo} onChange={this.onChangeProjectImageTwo} placeholder="Zet hier het pad neer naar de afbeelding"></input>
          <br></br>
          <br></br>
          <button type="submit">Create Project</button>
        </form>
        <br></br>
        <br></br>

        <ProjectsList> </ProjectsList>
      </div>
    );
  }
}