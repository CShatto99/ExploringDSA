import React from "react";
import "../../../css/chpt_10/Project10_1.css";
import project10_1_img from "../../../img/Chpt_10-Img/Project10_1Img.png";

const Project10_1 = () => {
  return (
    <div className="project-10_1-grid">
      <div className="title-10_1">
        <h2>Project 10.1</h2>
      </div>

      <div className="description-10_1">
        <p>
          In project 10.1 we will look at only one simple method. This method
          will return the smallest value in a 2-3-4 tree. You can view the
          complete project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%2010/TestClass10_1.java"
            target="blank"
          >
            <i>Project 10.1</i>
          </a>
          .
        </p>
      </div>

      <div className="image-10_1">
        <img
          style={{ width: "400px" }}
          src={project10_1_img}
          alt="Project 10.1 Visual"
        />
      </div>

      <div className="project-10_1-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          This project should be easy. Write a method that returns the minimum
          value in a 2-3-4 tree.
        </p>
      </div>

      <pre className="project-10_1-minimum">
        <code>
          {`public int minimum() {

  Node current = root;
  Node last = null;

  while(current != null) {

    last = current;
    current = current.getChild(0);

  }

  return last.getItem(0).data;

}`}
        </code>
      </pre>

      <div className="project-10_1-minimum-exp">
        <b>Function:</b> returns the minimum value in a 2-3-4 tree.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Delcare necessary nodes for the tree traversal.</li>
          <li>Check if the current node exists.</li>
          <li>
            While the previous step is true, update last to current and update
            current to the left-most child of itself.
          </li>
          <li>Return the data attribute of last (left-most node).</li>
        </ul>
      </div>

      <div className="hr-10_1">
        <hr />
      </div>
    </div>
  );
};

export default Project10_1;
