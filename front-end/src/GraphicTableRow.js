import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class GraphicTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteGraphic = this.deleteGraphic.bind(this);
    }

    deleteGraphic() {
        axios.post('http://localhost:8000/api/graphics/delete/' + this.props.obj.id)
            .then((res) => {
                console.log('Expense removed deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.graphicImage}</td>
                <td>
                    <Link className="edit-link" to={"/edit-graphic/" + this.props.obj.id}>
                       <button size="sm" variant="info">Edit</button>
                    </Link>
                    <button onClick={this.deleteGraphic} size="sm" variant="danger">Delete</button>
                </td>
            </tr>
        );
    }
}