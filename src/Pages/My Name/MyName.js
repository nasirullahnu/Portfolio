import { ArrowDownIcon, LinkIcon } from '@heroicons/react/24/solid';
import React from 'react';

const MyName = () => {
    return (
        <div className="flex justify-center mb-0">
            <div>
                <h1 className="text-4xl text-white font-semibold">
                    MD. <span className="text-yellow-400">Nasir</span> Ullah
                </h1>
                <div className='flex justify-center mt-2'>
                <a className='btn btn-outline btn-warning mr-2' href="Nasir Ullah (1).pdf" download="Nasir Ullah (1).pdf">
                    Resume <ArrowDownIcon className="h-6 w-6 text-white ml-1"/>
                </a>
                <a className='btn btn-outline btn-warning' href="https://www.linkedin.com/in/nasir-u-5399221b0/">
                    Linked In <LinkIcon className="h-6 w-6 text-white ml-1"></LinkIcon>
                </a>
                </div>
            </div>
      </div>
    );
};

export default MyName;