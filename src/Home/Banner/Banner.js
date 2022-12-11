import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../../assets/profilepsd.png'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Banner = () => {
    return (
        <div className='h-88 flex justify-center items-center'>
            <div className='flex justify-center items-center rounded-full h-64 w-64 bg-stone-700'>
                <div className='flex justify-center items-center rounded-full h-52 w-52 bg-stone-800'>
                    <div class="h-40 w-40 rounded-full">
                        <div className="avatar">
                            <div className="rounded-full ring ring-primary ">
                            <PhotoProvider>
                                <PhotoView src={img2}>
                                <figure>
                                    <img src={img2} style={{ objectFit: "cover", marginTop:"25px", cursor:"pointer" }} alt="" />{" "}
                                </figure>
                                </PhotoView>
                            </PhotoProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;