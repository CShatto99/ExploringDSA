import React from "react";
import "../../css/Code.css";

import hashTableVisual from "../../img/code/hashTableVisual.png";
import graphVisual from "../../img/code/graphVisual.png";
import bstVisual from "../../img/code/bstVisual.png";
import linkedListVisual from "../../img/code/linkedListVisual.png";
import stackVisual from "../../img/code/stackVisual.png";

const Code = () => {
  return (
    <div className="code-grid">
      <div className="code-page-title">
        <h1>Introduction</h1>
      </div>
      <div className="code-page-grid">
        <div className="code-page-description">
          <p>
            The code on this website will be covering the project assignments
            that are given at the end of each chapter in the "Data Structures &
            Algorithms in Java, Second Edition" textbook.
          </p>
          <br />
          <br />
          <p>
            The topics that will be covered include: Stacks, Queues, Linked
            Lists, Recursion, Advanced Sorting, Binary Search Trees, 2-3-4
            Trees, Hash Tables, Heaps, Graphs and Weighted Graphs. These topics
            are concurrent with the chapters contained in the textbook
          </p>
          <br />
          <br />
          <p>
            You may start viewing the code through the side navigation bar by
            clicking on the white code icon in the top left of the screen. The
            side navigation can also be collapsed by clicking on the same code
            icon.
          </p>
        </div>
        <div className="code-page-image">
          <img
            style={{ width: "180px" }}
            src={hashTableVisual}
            alt="Hash table visual."
          />
          <img
            style={{ width: "180px" }}
            src={graphVisual}
            alt="Graph visual."
          />
          <img
            style={{ width: "180px" }}
            src={bstVisual}
            alt="Binary search tree visual."
          />
          <img
            style={{ width: "180px" }}
            src={linkedListVisual}
            alt="Linked list visual."
          />
          <img
            style={{ width: "180px" }}
            src={stackVisual}
            alt="Stack visual."
          />
        </div>
        <div className="code-page-hr">
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Code;
