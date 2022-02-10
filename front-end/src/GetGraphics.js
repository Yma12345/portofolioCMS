import React, { Component } from 'react';
import classes from './GetProjects.module.css';
import axios from 'axios';



class GetGraphics extends Component {
  state = {
    graphics: [],
    show: true,
  }
  //makes a state for the graphics and the show
  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/graphics`)
      .then(res => {
        const graphics = res.data;
        this.setState({ graphics });
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
          this.state.graphics
            .map(graphic =>
                <ol key={graphic.id} >
                <br></br>
                  <img
                    className={classes.GraphicImage}
                    src={graphic.graphicImage}
                    key={graphic.id}
                    alt="graphic_images"
                  />
                </ol>
              // maps through the graphics and prints the data
            )
        }
    </ul>
    );
  }
}

export default GetGraphics;