import React, { Component } from 'react';
import classes from './App.module.css';
import MenuItems from './MenuItems';
import Data from './Data';
import PageSwitcher from './PageSwitcher';
class App extends Component {
  state = {
    productData: Data,
    currentSelectedFeature: 0,
  }
  //sets the productdata and the currentSelected feature

  onFeatureItemClick = (pos) => {
    this.setState({ currentSelectedFeature: pos });
    console.log(pos);
  }
  //sets the pos to the currentselectedfeature

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MenuItems data={this.state.productData} onFeatureItemClick={this.onFeatureItemClick} currentSelectedFeature={this.state.currentSelectedFeature} />
        </header>
        <div className={classes.MainContainer}>
          <PageSwitcher currentSelectedFeature={this.state.currentSelectedFeature} />
          {/* calls the component with the state*/}
        </div>
      </div>
    );
  }
}

export default App;
