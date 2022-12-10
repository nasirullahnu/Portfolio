import React from 'react';
import { Link } from 'react-router-dom';

const ProjectButtons = () => {
    return (
        <div>
            {/* buttons  */}
            <div>
                <Link to='/projects'>
                    <button className="btn">Projects</button>
                </Link>
            </div>
        </div>
    );
};

export default ProjectButtons;