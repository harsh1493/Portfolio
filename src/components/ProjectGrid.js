import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import "../styles/projectGrid.css";
import GridItem from "./GridItem.js";
const ProjectGrid = () => {
  return (
    <div className='w-full h-full justify-center'>
      <article className="flow  mx-20">
        <div className="team">
          <ul className="auto-grid" role="list">
          <GridItem link="http://gentle-reaches-98479.herokuapp.com/home" title="OneBlood web" desc="Blood donation web app in MERN" imgUrl="https://www.oneblood.org/_resources/images/ob-metaog.jpg"/>
          <GridItem link="https://github.com/harsh1493/iKeep" title="IKeep" desc="Minimal google keep clone in MERN" imgUrl="https://i.pcmag.com/imagery/articles/03t5awzhDYxo5Qf3EUytp21-15.fit_lim.size_1600x900.v1569488338.jpg"/>
          <GridItem link="https://github.com/harsh1493/oneBlood" title="OneBlood hybrid" desc="Blood donation flutter app" imgUrl="https://cdn.dribbble.com/users/4017506/screenshots/10727029/media/0ba03ca6c3ae4e5c2436e267d8740d01.png?compress=1&resize=1200x900&vertical=top"/>
          <GridItem link="https://github.com/harsh1493/LeChat" title="LeChat" desc="WhatsApp Clone flutter app" imgUrl="https://cdn.dribbble.com/users/1907987/screenshots/16103207/whatsapp-dribble-post-new_4x.jpg"/>
          {/* <GridItem link="" title="Adrian Flux" desc="Vehicle insurance web app in Reactjs" imgUrl="https://jacekjeznach.com/wp-content/uploads/2019/01/unnamed.jpg"/> */}
          <GridItem link="" title="Fresineus Kabi Centerium" desc="web app in angular 12" imgUrl="https://www.medicaldesignandoutsourcing.com/wp-content/uploads/2019/02/fresenius-kabi-logo.png"/>
          {/* <GridItem link="" title="ProjectSet" desc="Virtual learning/metoring web app in reactjs" imgUrl="https://jacekjeznach.com/wp-content/uploads/2019/11/ttelo.png"/> */}
          {/* <GridItem link="" title="Aspect Property" desc="Property Management web app in reactjs" imgUrl="https://jacekjeznach.com/wp-content/uploads/2019/08/London-Block-Management-Services-Aspect-Property-Management-1-e1567256441746.jpg"/> */}
          {/* <GridItem link="" title="Flux Posure" desc="Virtual learning web app in react" imgUrl="https://jacekjeznach.com/wp-content/uploads/2019/01/Bez-nazwy-2.png"/> */}
          <GridItem link="#" title="My Portfolio" desc="My portfolio is a web app in reactjs,threejs" imgUrl="/images/landing.PNG"/>
         
          </ul>
        </div>
      </article>
    </div>
  )
}

export default ProjectGrid;
