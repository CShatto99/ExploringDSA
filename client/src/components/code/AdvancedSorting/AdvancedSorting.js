import React from 'react'
import '../../../css/chpt_7/AdvancedSorting.css'
import Project71 from './Project71'
import Project72 from './Project72'
import Project73 from './Project73'
import Project74 from './Project74'
import Project75 from './Project75'

class AdvancedSorting extends React.Component {
  render() {

    return (
      <div className="advanced_sorting-grid">

        <div className="advanced_sorting-title">
          <h1>Chapter 7: Advanced Sorting</h1>
        </div>

        <Project71 className="project-7_1-grid"/>

        <Project72 className="project-7_2-grid"/>

        <Project73 className="project-7_3-grid"/>

        <Project74 className="project-7_4-grid"/>

        <Project75 className="project-7_5-grid"/>

      </div>
    )
  }
}

export default AdvancedSorting
