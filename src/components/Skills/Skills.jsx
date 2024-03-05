import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaCss3 , FaGitAlt, FaNode} from 'react-icons/fa6'

function Skills() {
  return (
    <div className={styles.skills_container}>
        <h3 className={styles.skills_title}>My Skills Set</h3>
        <ul className={styles.skills_list}>
            <li><FaSquareJs/></li>
            <li><FaReact/></li>
            <li><FaCss3 /></li>
            <li><FaGitAlt/></li>
            <li><FaNode/></li>
        </ul>
      
    </div>
  )
}

export default Skills