import React from 'react'
import myImg1 from '../images/grp1.jpeg'
import myImg2 from '../images/grp2.jpeg'
import './CorrectnessGraph.css';

export default function CorrectnessGraph() {
  return (
    <div className='image-box'>
       <img className="images" src={myImg1} alt="My Image" />
       <img className="images" src={myImg2} alt="My Image" />
    </div>
  )
}
