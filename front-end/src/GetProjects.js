import React, { Component } from 'react';
import classes from './GetProjects.module.css';
import axios from 'axios';



class GetProjects extends React.Component {
  state = {
    projects: [],
    show: true
  }
  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/projects`)
      .then(res => {
        const projects = res.data;
        this.setState({ projects });
      })
      this.setState({
        show: this.state.show,
        showDetails: !this.state.showDetails
      });
  }

  handleClick = (selectedButton) => {
    const projectId = selectedButton.target.getAttribute("id");
    axios.get("http://127.0.0.1:8000/api/projects/"+projectId)
      .then(res => {
        console.log(res);
        const projectDetails = res.data;
        this.setState({ projectDetails });
      })
      .catch(err => console.log(err));
    this.setState({
      showDetails: this.state.showDetails,
      show: !this.state.show
    });
  };
  render() {
    return (
      <ul>
        {
          this.state.show &&
          this.state.projects
            .map(project =>
              <div className={classes.ProjectContainer}>
                <ol key={project.id} >
                  <img
                    className={classes.ProjectImage}
                    src={project.projectImage}
                    key={project.id}
                    alt="project_images"
                  />
                  <button id={project.id} className={classes.ProjectBtn} onClick={this.handleClick}>{project.projectName}</button>
                </ol>
              </div>
            )
        }
</ul>
    );
  }
}

export default GetProjects;