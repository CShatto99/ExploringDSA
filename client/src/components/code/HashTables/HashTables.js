import React from 'react'
import '../../../css/chpt_11/HashTables.css'
import Project111 from './Project111'
import Project112 from './Project112'
import Project113 from './Project113'
import Project114 from './Project114'
import Project115 from './Project115'

class HashTables extends React.Component {
  render() {

    return (
      <div className="hash_tables-grid">

        <div className="hash_tables-title">
          <h1>Chapter 11: Hash Tables</h1>
        </div>

        <Project111 className="project-11_1-grid"/>

        <Project112 className="project-11_2-grid"/>

        <Project113 className="project-11_3-grid"/>

        <Project114 className="project-11_4-grid"/>

        <Project115 className="project-11_5-grid"/>

      </div>
    )
  }
}

export default HashTables
