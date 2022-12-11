import React from "react";
import project1 from "../../assets/projects/photography.png";
import project2 from "../../assets/projects/phoneBazar.png";
import project3 from "../../assets/projects/english-today.png";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
        <h1 className="text-2xl lg:text-left md:text-left text-center font-semibold text-white">Projects I haave done</h1><hr></hr>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
      {/* my project cards  */}
      <div className="card shadow-xl">
        <div className="w-full h-64 overflow-y-auto">
        <PhotoProvider>
            <PhotoView src={project1}>
                <figure>
                    <img src={project1} style={{ objectFit: "cover", cursor:"pointer" }} alt="" />{" "}
                </figure>
            </PhotoView>
        </PhotoProvider>
        </div>
        <div className="card-body">
          <h2 className="text-2xl text-yellow-400">
            Ph-Photography
            <div className="badge badge-secondary ml-6">
                <a href="https://ph-photography.web.app/">Live</a>
            </div>
          </h2>
          <p>This is a website for Booking Photographer</p>
          <div className="card-actions justify-end">
            <Link to='/projectDetails'>
                    <button className="btn btn-outline btn-warning">Details</button>
            </Link>
            <a href="https://github.com/Porgramming-Hero-web-course/b6a11-service-review-client-side-nasirullahnu">
                <button className="btn btn-outline btn-warning">Client</button>
            </a>
            <a href="https://github.com/Porgramming-Hero-web-course/b6a11-service-review-server-side-nasirullahnu">
                <button className="btn btn-outline btn-warning">Server</button>
            </a>
            <a href="https://ph-photography.web.app/">
                <button className="btn btn-outline btn-warning">Live</button>
            </a>
          </div>
        </div>
      </div>
      {/* my project cards  */}
      <div className="card shadow-xl">
        <div className="w-full h-64 overflow-y-auto">
        <PhotoProvider>
            <PhotoView src={project2}>
                <figure>
                    <img src={project2} style={{ objectFit: "cover", cursor:"pointer" }} alt="" />{" "}
                </figure>
            </PhotoView>
        </PhotoProvider>
        </div>
        <div className="card-body">
          <h2 className="text-2xl text-yellow-400">
            Phone Bazar
            <div className="badge badge-secondary ml-6">
                <a href="https://phone-client-1036f.web.app/">Live</a>
            </div>
          </h2>
          <p>This is a website for buy and sell used phone</p>
          <div className="card-actions justify-end">
                <Link to='/projectDetails'>
                    <button className="btn btn-outline btn-warning">Details</button>
                </Link>
                <a href="https://github.com/programming-hero-web-course-4/b612-used-products-resale-clients-side-nasirullahnu">
                    <button className="btn btn-outline btn-warning">Client</button>
                </a>
                <a href="https://github.com/programming-hero-web-course-4/b612-used-products-resale-server-side-nasirullahnu">
                    <button className="btn btn-outline btn-warning">Server</button>
                </a>
                <a href="https://phone-client-1036f.web.app/">
                    <button className="btn btn-outline btn-warning">Live</button>
                </a>
          </div>
        </div>
      </div>
      {/* my project cards  */}
      <div className="card shadow-xl">
        <div className="w-full h-64 overflow-y-auto">
        <PhotoProvider>
            <PhotoView src={project3}>
                <figure>
                    <img src={project3} style={{ objectFit: "cover", cursor:"pointer" }} alt="" />{" "}
                </figure>
            </PhotoView>
        </PhotoProvider>
        </div>
        <div className="card-body">
          <h2 className="text-2xl text-yellow-400">
            English Today
            <div className="badge badge-secondary ml-6">
                <a href="https://english-today-ca845.web.app/">Live</a>
            </div>
          </h2>
          <p>This is a website for purchase online course</p>
          <div className="card-actions justify-end">
                <Link to='/projectDetails'>
                    <button className="btn btn-outline btn-warning">Details</button>
                </Link>
                <a href="https://github.com/programming-hero-web-course1/b610-learning-platform-client-side-nasirullahnu">
                    <button className="btn btn-outline btn-warning">Client</button>
                </a>
                <a href="https://github.com/programming-hero-web-course1/b610-lerning-platform-server-side-nasirullahnu">
                    <button className="btn btn-outline btn-warning">Server</button>
                </a>
                <a href="https://english-today-ca845.web.app/">
                    <button className="btn btn-outline btn-warning">Live</button>
                </a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;
