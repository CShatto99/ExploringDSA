import React from 'react'
import '../../../css/chpt_12/Heaps.css'
import Project121 from './Project121'
import Project122 from './Project122'
import Project123 from './Project123'
import Project124 from './Project124'

class Heaps extends React.Component {
  render() {

    return (
      <div className="heaps-grid">

        <div className="heaps-title">
          <h1>Chapter 12: Heaps</h1>
        </div>

        <Project121 className="project-12_1-grid"/>

        <Project122 className="project-12_2-grid"/>

        <Project123 className="project-12_3-grid"/>

        <Project124 className="project-12_4-grid"/>

      </div>
    )
  }
}

export default Heaps
