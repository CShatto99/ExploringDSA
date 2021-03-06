import React, { useState, useEffect } from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Prism from 'prismjs'
import Toolbar from "./components/nav/Toolbar"
import Sidenav from './components/nav/Sidenav'
import Home from "./components/layout/Home"
import Code from "./components/code/Code"
import Contact from "./components/layout/Contact"
import StacksAndQueues from './components/code/StacksAndQueues/StacksAndQueues'
import LinkedLists from './components/code/LinkedLists/LinkedLists'
import Recursion from './components/code/Recursion/Recursion'
import AdvancedSorting from './components/code/AdvancedSorting/AdvancedSorting'
import Trees234 from './components/code/Trees234/Trees234'
import HashTables from './components/code/HashTables/HashTables'
import Heaps from './components/code/Heaps/Heaps'
import Graphs from './components/code/Graphs/Graphs'

const App = () => {
  useEffect(() => {
    Prism.highlightAll()
  })

  const [sidenavOpen, setSidenavOpen] = useState(false)

  const toggle = () => setSidenavOpen(!sidenavOpen)

  return (
    <Router>
      <div>
        <Toolbar toggleButtonClickHandler={toggle}/>
        <Sidenav show={sidenavOpen}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/code" render={(props) => <Code showSidenav={sidenavOpen} />}/>
          <Route path="/contact" component={Contact} />
          <Route path="/stacksandqueues" component={StacksAndQueues} />
          <Route path="/linkedlists" component={LinkedLists} />
          <Route path="/recursion" component={Recursion} />
          <Route path="/advancedsorting" component={AdvancedSorting} />
          <Route path="/trees234" component={Trees234} />
          <Route path="/hashtables" component={HashTables} />
          <Route path="/heaps" component={Heaps} />
          <Route path="/graphs" component={Graphs} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
