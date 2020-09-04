import React from 'react'
import '../../../css/chpt_4/StacksAndQueues.css'
import Project41 from './Project41'
import Project42 from './Project42'
import Project43 from './Project43'
import Project44 from './Project44'

class StacksAndQueues extends React.Component {
  render() {

    return (
      <div className="stacks_and_queues-grid">

        <div className="stacks_and_queues-title">
          <h1>Chapter 4: Stacks and Queues</h1>
        </div>

        <Project41 className="project-4_1-grid"/>

        <Project42 className="project-4_2-grid"/>

        <Project43 className="project-4_3-grid"/>

        <Project44 className="project-4_4-grid"/>

      </div>
    )
  }
}

export default StacksAndQueues
