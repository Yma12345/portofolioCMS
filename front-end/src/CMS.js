import React, { Component } from 'react';
import classes from './CMS.module.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateGraphic from './cms/graphic/CreateGraphic';
import EditGraphic from './cms/graphic/EditGraphic';
import GraphicsList from "./cms/graphic/graphics-listing.component";
import CreateProject from './cms/project/CreateProject';
import EditProject from './cms/project/EditProject';
import ProjectsList from './cms/project/projects-listing.component';


class CMS extends Component {
        render() {
        return (<Router>
            <div className={classes.CMScontainer}>
              <Routes>
                <Route path="/" element={<><CreateGraphic/><CreateProject/></>}/>
                <Route path="/create-graphic" element={<CreateGraphic />} />
                <Route path="/edit-graphic/:id" element={<EditGraphic />} />
                <Route path="/graphics-listing" element={<GraphicsList />} />
                <Route path="/create-project" element={<CreateProject />} />
                <Route path="/edit-project/:id" element={<EditProject />} />
                <Route path="/projects-listing" element={<ProjectsList />} />
              </Routes>
            </div>
            </Router>);
  
    }

}

export default CMS;