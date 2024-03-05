import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from 'react-parallax-tilt';

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
      <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>    
        <div className={styles.port_items}>
            <img src="https://github.com/CodeCompleteYT/react-portfolio/blob/main/assets/projects/project.png?raw=true" alt="" />
            <p>Project Title</p>
        </div>
      </Tilt>
      <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>  
        <div className={styles.port_items}>
            <img src="https://f.ptcdn.info/795/071/000/qkm167r20P0ibjTHXwX-o.jpg" alt="" />
            <p>Project Title</p>
        </div>
        </Tilt>
        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}> 
        <div className={styles.port_items}>
            <img src="https://miro.medium.com/v2/resize:fit:1200/1*MSLb3Qr8unKY4aBlwR-ynQ.jpeg" alt="" />
            <p>Project Title</p>
        </div>
        </Tilt>
      <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>  
        <div className={styles.port_items}>
            <img src="https://www.wewebplus.com//upload/news/real/pic-122-263.jpg" alt="" />
            <p>Project Title</p>
        </div>
        </Tilt>
        <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
        <div className={styles.port_items}>
            <img src="https://www.rockyfurniture.com/uploads/webpage/287/profile/_Software_.jpg" alt="" />
            <p>Project Title</p>
        </div>
        </Tilt>
      <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>  
        <div className={styles.port_items}>
            <img src="https://www.rockyfurniture.com/uploads/webpage/287/files/%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B9%80%E0%B8%A1%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%8B%E0%B8%AD%E0%B8%9F%E0%B8%95%E0%B9%8C%E0%B9%81%E0%B8%A7%E0%B8%A3%E0%B9%8C.jpeg" alt="" />
            <p>Project Title</p>
        </div>
        </Tilt>
      </div>
    </div>
  )
}

export default Portfolio