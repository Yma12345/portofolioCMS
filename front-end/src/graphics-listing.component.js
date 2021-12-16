import React, { Component } from "react";
import axios from 'axios';
import GraphicTableRow from './GraphicTableRow';


export default class GraphicsList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      graphics: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/graphics/')
      .then(res => {
        this.setState({
          graphics: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.graphics.map((res, i) => {
      return <GraphicTableRow obj={res} key={i} />;
    });
  }


  render() {
    return (<div className="table-wrapper">
      <table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </table>
    </div>);
  }
}