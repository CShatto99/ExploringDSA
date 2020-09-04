import React from "react";
import "../../../css/chpt_13/Project13_1.css";
import project13_1_img from "../../../img/Chpt_13-Img/Project13_1Img.png";

const Project131 = () => {
  return (
    <div className="project-13_1-grid">
      <div className="title-13_1">
        <h2>Project 13.1</h2>
      </div>

      <div className="description-13_1">
        <p>
          In project 13.1 we will see an implementaton of a minimum spanning
          tree algorithm. This project will use a breadth-first search approach
          instead of depth-first search. Only the most important methods to the
          functionality of the project will be covered on this page. You can
          view the complete project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%2013/TestClass13_1.java"
            target="blank"
          >
            <i>Project 13.1</i>
          </a>
          .
        </p>
      </div>

      <div className="image-13_1">
        <img
          style={{ width: "400px" }}
          src={project13_1_img}
          alt="Project 13.1 Visual"
        />
      </div>

      <div className="project-13_1-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Modify the bfs.java program (Listing 13.2) to find the minimum
          spanning tree using a breadth-first search, rather than the
          depth-first search shown in mst.java (Listing 13.3). In main(), create
          a graph with 9 vertices and 12 edges, and find its minimum spanning
          tree.
        </p>
      </div>

      <pre className="project-13_1-minimum-spanning-tree">
        <code>
          {`public void minimumSpanningTree() {

  vertexList[0].wasVisited = true;
  theQueue.insert(0);

  int v2;

  while(!(theQueue.isEmpty())) {

    int v1 = theQueue.remove();

    while((v2=getUnvisitedVert(v1)) != -1) {

      vertexList[v2].wasVisited = true;
      theQueue.insert(v2);

      displayVertex(v1);
      displayVertex(v2);
      System.out.print(" ");

    }

  }

  for(int i = 0; i < nVerts; i++)
    vertexList[i].wasVisited = false;

}`}
        </code>
      </pre>

      <pre className="project-13_1-get-unvisited-vert">
        <code>
          {`public int getUnvisitedVert(int v) {

  for(int i = 0; i < nVerts; i++) {

    if(adjMat[v][i] == 1 && vertexList[i].wasVisited == false)
      return i;

  }

  return -1;

}`}
        </code>
      </pre>

      <div className="project-13_1-minimum-spanning-tree-exp">
        <b>Function:</b> finds the minimum spanning tree of an arbitrary graph.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Visited the initial node and insert it into the queue.</li>
          <li>Declare a second vertex.</li>
          <li>
            While the queue is not empty:
            <ul>
              <li>
                Set the first vertex equal to the result of the queue remove
                method (first in the queue).
              </li>
              <li>
                While there is an unvisited neighboring node of node v1:
                <ul>
                  <li>Visit the neighbor and insert it into the queue.</li>
                  <li>Display the original node and its neighbor.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Set all of the nodes in the graph to unvisited for the next search.
          </li>
        </ul>
      </div>

      <div className="project-13_1-get-unvisited-vert-exp">
        <b>Function:</b> finds the unvisited neighboring vertices of node v.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            For every node in the graph:
            <ul>
              <li>
                If there is an edge between node v and node i ([v][i] == 1) and
                the node has not been visited: return the index of the node.
              </li>
            </ul>
          </li>
          <li>Return -1 if there are no unvisited nodes.</li>
        </ul>
      </div>

      <div className="hr-13_1">
        <hr />
      </div>
    </div>
  );
};

export default Project131;
