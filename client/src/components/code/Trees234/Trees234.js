import React from 'react'
import '../../../css/chpt_10/Trees234.css'
import Project101 from './Project101'
import Project103 from './Project103'

class Trees234 extends React.Component {
  render() {

    return (
      <div className="trees_234-grid">

        <div className="trees_234-title">
          <h1>Chapter 10: 2-3-4 Trees and External Storage</h1>
        </div>

        <Project101 className="project-10_1-grid"/>

        <Project103 className="project-10_3-grid"/>

      </div>
    )
  }
}

export default Trees234
