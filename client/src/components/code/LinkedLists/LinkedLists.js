import React from 'react'
import '../../../css/chpt_5/LinkedLists.css'
import Project51 from './Project51'
import Project52 from './Project52'
import Project53 from './Project53'
import Project54 from './Project54'

class LinkedLists extends React.Component {
  render() {

    return (
      <div className="linked_lists-grid">

        <div className="linked_lists-title">
          <h1>Chapter 5: Linked Lists</h1>
        </div>

        <Project51 className="project-5_1-grid"/>

        <Project52 className="project-5_2-grid"/>

        <Project53 className="project-5_3-grid"/>

        <Project54 className="project-5_4-grid"/>

      </div>
    )
  }
}

export default LinkedLists
