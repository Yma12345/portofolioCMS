import React, { Component } from 'react';
import classes from './GetProjects.module.css';
import axios from 'axios';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CreateGraphic from './CreateGraphic';
import CreateProject from './CreateProject';


class CMS extends React.Component {
    state = {
        graphics: [],
        projects: [],
        show: true,
    }
    componentDidMount() {
        axios.get(`http://127.0.0.1:8000/api/graphics`)
            .then(res => {
                const graphics = res.data;
                this.setState({ graphics });
            })
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
        return (<Router>
            <ul>
                <div className={classes.CMSContainer}>
                    <CreateGraphic />
                    <table>
                        <tr>
                            <th>Graphic id</th>
                            <th>Graphic image</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {
                            this.state.show &&
                            this.state.graphics
                                .map(graphic =>
                                    <tr>
                                        <td>{graphic.id}</td>
                                        <td>{graphic.graphicImage}</td>
                                        {/* <Route path="/edit-graphic" component={EditGraphic}><td><button key={graphic.id}>Edit</button></td></Route>
                                        <Route path="/delete-graphic" component={DeleteGraphic}><td><button key={graphic.id}>Delete</button></td></Route> */}
                                    </tr>
                                )
                        }
                    </table>
                    <br></br>
                    <CreateProject />
                    <table>
                        <tr>
                            <th>Project id</th>
                            <th>Project name</th>
                            <th>Project image</th>
                            <th>Project image two</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {
                            this.state.show &&
                            this.state.projects
                                .map(project =>
                                    <tr>
                                        <td>{project.id}</td>
                                        <td>{project.projectName}</td>
                                        <td>{project.projectImage}</td>
                                        <td>{project.projectImageTwo}</td>
                                        <td><button key={project.id}>Edit</button></td>
                                        <td><button key={project.id}>Delete</button></td>
                                    </tr>
                                )
                        }
                    </table>
                </div>
            </ul>
            </Router>);
    }
}

export default CMS;