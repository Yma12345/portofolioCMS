import React, { Component } from 'react';
import classes from './GetProjects.module.css';
import axios from 'axios';



class GetProjects extends React.Component {
  state = {
    projects: [],
    show: true,
  }
  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/projects`)
      .then(res => {
        const projects = res.data;
        this.setState({ projects });
      })
    this.setState({
      show: this.state.show
    });
  }

  render() {
    return (
      <ul>
        {
          this.state.show &&
          this.state.projects
            .map(project =>
              <div className={classes.ProjectContainer}>
                <ol key={project.id} >
                  <div className={classes.ProjectName}>
                    <h2>{project.projectName}</h2>
                  </div>
                <br></br>
                  <img
                    className={classes.ProjectImage}
                    src={project.projectImage}
                    key={project.id}
                    alt="project_images"
                  />
                <div className={classes.ProjectDetailContainer}>
                <img
                    className={classes.ProjectImageTwo}
                    src={project.projectImageTwo}
                    key={project.id}
                    alt="project_images"
                  />
                  </div>
                </ol>
              </div>
            )
        }
    </ul>
    );
  }
}

export default GetProjects;