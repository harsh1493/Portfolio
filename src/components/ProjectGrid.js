import React from 'react';
import '../styles/carousel.css';
import DepthDeckCarousel from './DepthDeckCarousel';

const ProjectGrid = () => {
  return (
    <div className='w-full h-full justify-center py-20'>
      <div className="flow mx-20">
        <div className="team">
          <DepthDeckCarousel />
        </div>
      </div>
    </div>
  )
}

export default ProjectGrid;
