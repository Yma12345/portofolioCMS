import React, { Component } from 'react';
import classes from './GetProjects.module.css';
import axios from 'axios';



class GetProjects extends Component {
  state = {
    projects: [],
    show: true,
  }
  //makes a state for the projects and the show
  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/projects`)
      .then(res => {
        const projects = res.data;
        this.setState({ projects });
      })
    this.setState({
      show: this.state.show
    });
    //if succesfull then it sets the result data into the state
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
              // maps through the graphics and prints the data
            )
        }
    </ul>
    );
  }
}

export default GetProjects;