import React from "react";
import Thumbnail from './Thumbnail';
import './App.css'
 
function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <Thumbnail
        link="https://hub-crawler.herokuapp.com/"
        image="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        title="Hub Crawler"
        catagory="User and Repo Seach Tool"
        />
        <Thumbnail
        link="https://quiet-bayou-05607.herokuapp.com/"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1cBEKKHK5lrpKPMMIUNRmZqCzwh77Eun0PK02Zinl__UjyGCn&s"
        title="DM Rater"
        catagory="Crowd Sourced Review Application"
        />
    </div>
  )
};
 
export default Projects;