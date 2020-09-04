import React from "react";
import "../../../css/chpt_10/Project10_3.css";
import project10_1_img from "../../../img/Chpt_10-Img/Project10_3Img.png";

const Project10_3 = () => {
  return (
    <div className="project-10_3-grid">
      <div className="title-10_3">
        <h2>Project 10.3</h2>
      </div>

      <div className="description-10_3">
        <p>
          In project 10.3 one method of a 2-3-4 tree will be covered. This
          method, <b>sort</b>, will take in an array of unsorted values and
          return the sorted version using a selection sort. You can view the
          complete project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%2010/TestClass10_3.java"
            target="blank"
          >
            <i>Project 10.3</i>
          </a>
          .
        </p>
      </div>

      <div className="image-10_3">
        <img
          style={{ width: "400px" }}
          src={project10_1_img}
          alt="Project 10.3 Visual"
        />
      </div>

      <div className="project-10_3-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          A 2-3-4 tree can be used as a sorting machine. Write a sort() method
          that’s passed an array of key values from main() and writes them back
          to the array in sorted order.
        </p>
      </div>

      <pre className="project-10_3-sort">
        <code>
          {`public void sort(int dataItems[], int size) {

  int in, out, min;

  for(out = 0; out < size-1; out++) {

    min = out;

    for(in = out+1; in < size; in++)
      if(dataItems[in] < dataItems[min])
        min = in;

    swap(dataItems, out, min);

  }

}`}
        </code>
      </pre>

      <div className="project-10_3-sort-exp">
        <b>Function:</b> sorts an array of unsorted values using selection sort.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            Delcare the inner index, the outer index and the min variable.
          </li>
          <li>
            Declare a For Loop that iterates over the entire array and perform
            the following in each iteration:
            <ul>
              <li>Set min equal to the starting element (out).</li>
              <li>
                Declare a For Loop that finds the minimum value of the remaining
                unsorted elements.
              </li>
              <li>Swap the starting element with the minimum value.</li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="hr-10_3">
        <hr />
      </div>
    </div>
  );
};

export default Project10_3;
