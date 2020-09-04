import React from "react";
import "../../../css/chpt_7/Project7_4.css";

const Project74 = () => {
  return (
    <div className="project-7_4-grid">
      <div className="title-7_4">
        <h2>Project 7.4</h2>
      </div>

      <div className="description-7_4">
        <p>
          In project 7.4 we will see an implementation of a method that allows
          for the selection of an arbitrary element in an array using a
          partition method. This page will cover the solution method and the
          partition method. A basic swap method will also be necessary but will
          not be showcased on this page. You can view the complete project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%207/TestClass7_4.java"
            target="blank"
          >
            <i>Project 7.4</i>
          </a>
          .
        </p>
      </div>

      <div className="project-7_4-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Selection means finding the kth largest or kth smallest element from
          an array. For example, you might want to select the 7th largest
          element. Finding the median (as in Programming Project 7.2) is a
          special case of selection. The same partitioning process can be used,
          but you look for an element with a specified index number rather than
          the middle element. Modify the program from Programming Project 7.2 to
          allow the selection of an arbitrary element. How small an array can
          your program handle?
        </p>
      </div>

      <pre className="project-7_4-randon-element">
        <code>
          {`public int randomPartition(int left, int right) {

  int range = right - left + 1;
  int randomIndex = (int)(Math.random()*range);

  System.out.println("Random Index: " + randomIndex);
  System.out.println("Random Index Value: " + arr[randomIndex]);

  swap(right, randomIndex);

  return partition(left, right);

}`}
        </code>
      </pre>

      <pre className="project-7_4-partiton">
        <code>
          {`public int partition(int left, int right) {

  int pivotValue = arr[right];
  int pivotIndex = left;

  for(int i = left; i < right; i++) {

    if(arr[i] <= pivotValue) {

      swap(pivotIndex, i);
      pivotIndex++;

    }

  }

  swap(pivotIndex, right);

  return pivotIndex;

}`}
        </code>
      </pre>

      <div className="project-7_4-randon-element-exp">
        <b>Function:</b> selects and returns a specified indexed value.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Declare the arbitrary index and the range of the array.</li>
          <li>Print out the arbitrary value and the index.</li>
          <li>Swap the right-most index with the random index.</li>
          <li>
            Return the result of the partiton method (specified indexed value).
          </li>
        </ul>
      </div>

      <div className="project-7_4-partiton-exp">
        <b>Function:</b> partiton an array of integers using the arbitrary value
        as the pivot value.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Declare the initial pivot value and pivot index.</li>
          <li>Declare a For Loop that iterates over the entire given range.</li>
          <li>
            In each iteration, check if the current element of the array is less
            than or equal to the pivot value.
          </li>
          <li>
            While the loop has not terminated and the previous condition is
            true, swap the pivot index with the current loop index and increment
            the pivot index.
          </li>
          <li>
            Finish the partitoning by swapping the pivot index with the
            right-most index.
          </li>
          <li>Return the pivot index</li>
        </ul>
      </div>

      <div className="hr-7_4">
        <hr />
      </div>
    </div>
  );
};

export default Project74;
