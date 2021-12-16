import React, { Component } from 'react';
import classes from './CMS.module.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CreateGraphic from './CreateGraphic';
import EditGraphic from './EditGraphic';
import CreateProject from './CreateProject';
import GraphicsList from "./graphics-listing.component";


class CMS extends React.Component {
        render() {
        return (
            <div className={classes.CMScontainer}>
              <Routes>
                <Route exact path='/' element={<CreateGraphic />} />
                <Route path="/create-graphic" element={<CreateGraphic />} />
                <Route path="/edit-graphic/:id" element={<EditGraphic />} />
                <Route path="/graphics-listing" element={<GraphicsList />} />
              </Routes>
            </div>
  );
  
    }

}

export default CMS;