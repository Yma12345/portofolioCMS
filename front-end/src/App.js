import React, {Component} from 'react';
import classes from './App.module.css';
import MenuItems from './MenuItems';
import Data from './Data';
import HomeImg from './HomeImg';
class App extends Component {
  state = {
    productData : Data,
    currentSelectedFeature: 0,
  }

  onFeatureItemClick = (pos) => {
    this.setState({currentSelectedFeature: pos});
    console.log(pos);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <MenuItems data={this.state.productData} onFeatureItemClick={this.onFeatureItemClick} currentSelectedFeature={this.state.currentSelectedFeature}/>
        </header>
        <div className={classes.MainContainer}>
        <HomeImg currentSelectedFeature={this.state.currentSelectedFeature}/>
        </div>
        <footer className={classes.Footer}>
          <h1>portfolio</h1>
          <p>Rick van der Zanden</p>
        </footer>
      </div>
    );
  }
}

export default App;
