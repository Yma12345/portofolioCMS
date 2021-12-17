import React, { Component } from "react";
import axios from 'axios';
import ProjectTableRow from './ProjectTableRow';
import classes from './CMS.module.css';


export default class ProjectsList extends Component {

  constructor(props) {
    super(props)
    this.state = {
        projects: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/projects/')
      .then(res => {
        this.setState({
            projects: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.projects.map((res, i) => {
      return <ProjectTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className={classes.tableProject}>
      <table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Image two</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </table>
    </div>);
  }
}