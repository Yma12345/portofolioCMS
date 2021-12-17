import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ProjectTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteProject = this.deleteProject.bind(this);
    }

    deleteProject() {
        axios.post('http://localhost:8000/api/projects/delete/' + this.props.obj.id)
            .then((res) => {
                console.log('Expense removed deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.projectName}</td>
                <td>{this.props.obj.projectImage}</td>
                <td>{this.props.obj.projectImageTwo}</td>
                <td>
                    <Link className="edit-link" to={"/edit-project/" + this.props.obj.id}>
                       <button size="sm" variant="info">Edit</button>
                    </Link>
                    <button onClick={this.deleteProject} size="sm" variant="danger">Delete</button>
                </td>
            </tr>
        );
    }
}