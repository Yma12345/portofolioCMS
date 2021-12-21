import React, { Component } from 'react';
import classes from './CMS.module.css';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CreateGraphic from './CreateGraphic';
import EditGraphic from './EditGraphic';
import GraphicsList from "./graphics-listing.component";
import CreateProject from './CreateProject';
import EditProject from './EditProject';
import ProjectsList from './projects-listing.component';


class CMS extends React.Component {
        render() {
        return (
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
  );
  
    }

}

export default CMS;