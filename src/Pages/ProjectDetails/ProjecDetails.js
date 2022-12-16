import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ProjecDetails = () => {

    const projectID = useParams()
    console.log(parseInt(projectID.id))

    const [projectsDetails, setProjectsDetails] = useState([])

    useEffect(()=> {
      fetch("/projectsDetails.json")
      .then(res => res.json())
      .then(datas => {
        console.log(datas)

        if(datas){
            const specificProject = datas.find(data => data.category_id === parseInt(projectID.id))
            console.log(specificProject)
            setProjectsDetails(specificProject)
        }
      })
    },[projectID])


    return (
        <div className='mx-5'>

            {/* head section  */}
            <h1 className='text-3xl'>Project Name: <span className='text-yellow-400 font-semibold'>{projectsDetails.projectTitle}</span> </h1>
            <p>Short Description: <span className='text-yellow-400 text-xl'>{projectsDetails.description}</span></p>
            <div>
              <p className='text-xl text-yellow-400 mt-5'>Project Overview Full Page</p>
              <div>
                <span className="badge badge-secondary mr-2"><a href={projectsDetails.live}>Live View</a></span>
                <span className="badge badge-secondary mr-2"><a href={projectsDetails.client}>Client Code</a></span>
                <span className="badge badge-secondary mr-2"><a href={projectsDetails.server}>Server Code</a></span>
              </div>
              <div className='flex justify-center items-center'>
                <div className="lg:w-3/4 md:w-full w-full h-72 overflow-y-auto mt-2">
                    <PhotoProvider>
                      <PhotoView src={projectsDetails.demo}>
                          <figure>
                              <img src={projectsDetails.demo} style={{ objectFit: "cover", cursor:"pointer" }} alt="" />
                          </figure>
                      </PhotoView>
                    </PhotoProvider>
                </div>
              </div>
            </div>


            {/* tools sections  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-5">
        <div className="lg:text-left md:text-left text-left mt-3 lg:border-r-2 ">
          <h1 className="text-xl text-yellow-400">Front-End Technologies</h1>
          <p className=" mb-2 text-white">
            {projectsDetails.frontend}
          </p>
          <div >
            <h1 className="text-xl text-yellow-400">Features</h1>
            <p className=" mb-2 text-white">1. {projectsDetails.features?.a}</p>
            <p className=" mb-2 text-white">2. {projectsDetails.features?.b}</p>
            <p className=" mb-2 text-white">3. {projectsDetails.features?.c}</p>
            <p className=" mb-2 text-white">4. {projectsDetails.features?.d}</p>
            <p className=" mb-2 text-white">5. {projectsDetails.features?.e}</p>
          </div>
          
        </div>
        <div className="lg:text-right md:text-right text-left mt-3">
          <h1 className="text-xl text-yellow-400">Back-End Technologies</h1>
          <div>
            <p className="text-white">{projectsDetails.backend}</p>
          </div>
          <div>
            <h1 className="text-xl text-yellow-400 mt-3">Tools and Softwares</h1>
            <div>
              <p className="text-white">{projectsDetails.tools}</p>
            </div>
          </div>
        </div>
      </div>








            {/* all photos section */}
            <h1 className='text-white text-3xl mt-5'>Pages Overview</h1><hr></hr>
            <div className='grid gap-4 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mt-5'>
            <div>
              <p className='text-xl text-yellow-400 mt-5'>{projectsDetails.title1}</p>
              <div className='flex justify-center items-center'>
                <div className="w-full h-72 overflow-y-auto mt-2">
                    <PhotoProvider>
                      <PhotoView src={projectsDetails.img1}>
                          <figure>
                              <img src={projectsDetails.img1} style={{ objectFit: "cover", cursor:"pointer" }} alt="" />
                          </figure>
                      </PhotoView>
                    </PhotoProvider>
                </div>
              </div>
            </div>


            <div>
              <p className='text-xl text-yellow-400 mt-5'>{projectsDetails.title2}</p>
              <div className='flex justify-center items-center'>
                <div className="w-full h-72 overflow-y-auto mt-2">
                    <PhotoProvider>
                      <PhotoView src={projectsDetails.img2}>
                          <figure>
                              <img src={projectsDetails.img2} style={{ objectFit: "cover", cursor:"pointer" }} alt="" />
                          </figure>
                      </PhotoView>
                    </PhotoProvider>
                </div>
              </div>
            </div>



            <div>
              <p className='text-xl text-yellow-400 mt-5'>{projectsDetails.title3}</p>
              <div className='flex justify-center items-center'>
                <div className="w-full h-72 overflow-y-auto mt-2">
                    <PhotoProvider>
                      <PhotoView src={projectsDetails.img3}>
                          <figure>
                              <img src={projectsDetails.img3} style={{ objectFit: "cover", cursor:"pointer" }} alt="" />
                          </figure>
                      </PhotoView>
                    </PhotoProvider>
                </div>
              </div>
            </div>
            </div>
        </div>
    );
};

export default ProjecDetails;