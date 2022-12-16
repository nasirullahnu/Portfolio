import React from "react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Projects = () => {

  const [projects, setProjects] = useState([])


  useEffect(()=> {
    fetch("projects.json")
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setProjects(data)
    })
  },[])


  return (
    <div id="projects">
        <h1 className="text-2xl lg:text-left md:text-left text-center font-semibold text-white">Projects I haave done</h1><hr></hr>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
      {/* my project cards  */}
      {
        projects.map(project => <div key={project.category_id} className="card shadow-xl">
        <div className="w-full h-64 overflow-y-auto">
        <PhotoProvider>
            <PhotoView src={project.img}>
                <figure>
                    <img src={project.img} style={{ objectFit: "cover", cursor:"pointer" }} alt="" />
                </figure>
            </PhotoView>
        </PhotoProvider>
        </div>
        <div className="card-body">
          <h2 className="text-2xl text-yellow-400">
            {project.title}
            <div className="badge badge-secondary ml-6">
                <a href={project.live}>Live</a>
            </div>
          </h2>
          <p>{project.description}</p>
          <div className="card-actions justify-end">
            <Link to={`/projectsDetails/${project.category_id}`}>
                    <button className="btn btn-outline btn-warning">Details</button>
            </Link>
            <a href={project.client}>
                <button className="btn btn-outline btn-warning">Client</button>
            </a>
            <a href={project.server}>
                <button className="btn btn-outline btn-warning">Server</button>
            </a>
            <a href={project.live}>
                <button className="btn btn-outline btn-warning">Live</button>
            </a>
          </div>
        </div>
      </div> )
      }
    </div>
    </div>
  );
};

export default Projects;