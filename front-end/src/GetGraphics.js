import React, { Component } from 'react';
import classes from './GetProjects.module.css';
import axios from 'axios';



class GetGraphics extends React.Component {
  state = {
    graphics: [],
    show: true,
  }
  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/graphics`)
      .then(res => {
        const graphics = res.data;
        this.setState({ graphics });
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
          this.state.graphics
            .map(graphic =>
              <div className={classes.ProjectContainer}>
                <ol key={graphic.id} >
                <br></br>
                  <img
                    className={classes.GraphicImage}
                    src={graphic.graphicImage}
                    key={graphic.id}
                    alt="graphic_images"
                  />
                </ol>
              </div>
            )
        }
    </ul>
    );
  }
}

export default GetGraphics;