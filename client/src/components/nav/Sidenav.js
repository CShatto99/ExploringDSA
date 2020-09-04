import React from "react";
import { Link } from "react-router-dom";
import SidenavArrow from "./SidenavArrow";
import "../../css/Sidenav.css";

function Sidenav(props) {
  let sidenavClasses = "code_page-sidenav";
  if (props.show) {
    sidenavClasses = "code_page-sidenav open";
  }
  return (
    <div className="sidenav-background">
      <div className={sidenavClasses}>
        <h3 className="sidenav-title">Topics:</h3>
        <nav className="sidenav-topics">
          <ul>
            <Link to="/stacksandqueues">
              <li>Stacks and Queues</li>
              <div className="spacer"></div>
              <SidenavArrow />
            </Link>
            <Link to="/linkedlists">
              <li>Linked Lists</li>
              <div className="spacer"></div>
              <SidenavArrow />
            </Link>
            <Link to="/recursion">
              <li>Recursion</li>
              <div className="spacer"></div>
              <SidenavArrow />
            </Link>
            <Link to="/advancedsorting">
              <li>Advanced Sorting</li>
              <div className="spacer"></div>
              <SidenavArrow />
            </Link>
            <Link to="/trees234">
              <li>2-3-4 Trees</li>
              <div className="spacer"></div>
              <SidenavArrow />
            </Link>
            <Link to="/hashtables">
              <li>Hash Tables</li>
              <div className="spacer"></div>
              <SidenavArrow />
            </Link>
            <Link to="/heaps">
              <li>Heaps</li>
              <div className="spacer"></div>
              <SidenavArrow />
            </Link>
            <Link to="/graphs">
              <li>Graphs</li>
              <div className="spacer"></div>
              <SidenavArrow />
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidenav;
