import React from 'react';
import './Projects.css';

const ProjectCard = ({
    projectName,
    projectDescription,
    imageUrl,
    githubUrl,
    projectUrl,
}) => {
    return (
        <div className='project-card'>
            <div className='image-container'>
                <a href={projectUrl} className='project-external-link'>
                    <img
                        src={imageUrl}
                        alt='project'
                        className='project-image'
                    />
                </a>
            </div>

            <div className='project-details-container'>
                <h2 className='project-heading'>{projectName}</h2>
                <p className='project-details'>{projectDescription}</p>
                <a href={githubUrl} className='project-gh-link'>
                    Learn More!
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;