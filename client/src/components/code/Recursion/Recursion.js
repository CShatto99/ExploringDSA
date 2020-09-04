import React from 'react'
import '../../../css/chpt_6/Recursion.css'
import Project61 from './Project61'
import Project63 from './Project63'
import Project64 from './Project64'

class Recursion extends React.Component {
  render() {

    return (
      <div className="recursion-grid">

        <div className="recursion-title">
          <h1>Chapter 6: Recursion</h1>
        </div>

        <Project61 className="project-6_1-grid"/>

        <Project63 className="project-6_3-grid"/>

        <Project64 className="project-6_4-grid"/>

      </div>
    )
  }
}

export default Recursion
