import React from "react";
import "../../../css/chpt_7/Project7_1.css";
import project7_1_img from "../../../img/Chpt_7-Img/Project7_1Img.png";

const Project71 = () => {
  let partitionProb = "https://en.wikipedia.org/wiki/Partition_problem";
  return (
    <div className="project-7_1-grid">
      <div className="title-7_1">
        <h2>Project 7.1</h2>
      </div>

      <div className="description-7_1">
        <p>
          In project 7.1 we will be looking at the implementation of a method
          that performs a{" "}
          <a href={partitionProb} target="blank">
            <i>partition</i>
          </a>{" "}
          on an array of integers. This project will cover the partition method,
          a helper method named <b>manualSort</b> and a helper method named{" "}
          <b>swap</b>. You can view the complete project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%207/TestClass7_1.java"
            target="blank"
          >
            <i>Project 7.1</i>
          </a>
          .
        </p>
      </div>

      <div className="image-7_1">
        <img
          style={{ width: "400px" }}
          src={project7_1_img}
          alt="Project 7.1 Visual"
        />
      </div>

      <div className="project-7_1-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Modify the partition.java program (Listing 7.2) so that the
          partitionIt() method always uses the highest-index (right) element as
          the pivot, rather than an arbitrary number. (This is similar to what
          happens in the quickSort1.java program in Listing 7.3.) Make sure your
          routine will work for arrays of three or fewer elements. To do so, you
          may need a few extra statements.
        </p>
      </div>

      <pre className="project-7_1-partition">
        <code>
          {`public void partitionIt(int left, int right) {

  if(size() <= 3)
    manualSort(left, right);

  int leftPtr = left, pivot = arr[right];


  for(int i = 0; i < nElems-1; i++) {

    if(arr[i] < pivot) {

      swap(i, leftPtr);
      leftPtr++;

    }

  }

  swap(leftPtr, right);

}`}
        </code>
      </pre>

      <pre className="project-7_1-manual-sort">
        <code>
          {`public void manualSort(int left, int right) {

  if(size() == 1)
    return;

  if(size() == 2 && arr[left] > arr[right])
    swap(left, right);

  else {

    if(arr[left] > arr[right-1])
      swap(left, right-1);

    if(arr[left] > arr[right])
      swap(left, right);

    if(arr[right-1] > arr[right])
      swap(right-1, right);

  }

}`}
        </code>
      </pre>

      <pre className="project-7_1-swap">
        <code>
          {`public void swap(int a, int b) {

  int temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;

}`}
        </code>
      </pre>

      <div className="project-7_1-partition-exp">
        <b>Function:</b> partitons an array of integers using the last element
        in the array as the pivot point.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            If the size of the array is less than or equal to 3, call the
            manualSort method with the first and last elements of the array.
          </li>
          <li>Declare the left pointer and the pivot.</li>
          <li>Declare a For Loop that iterates over the entire array.</li>
          <li>
            In each iteration of the loop, check if the current element is less
            than the pivot.
          </li>
          <li>
            If the previous condition is true, swap the index of the current
            element with the left pointer and increment the left pointer.
          </li>
          <li>Swap the left pointer with the right-most element</li>
        </ul>
      </div>

      <div className="project-7_1-manual-sort-exp">
        <b>Function:</b> 'manually' sorts an array of size 3 or less.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>If the array is of size 1, return.</li>
          <li>
            If the array is of size 2 and the left element is greater that the
            right element, swap them.
          </li>
          <li>
            If the previous 2 steps are false and the left element is greater
            than the middle element, swap them.
          </li>
          <li>
            If the previous 2 steps are false and the left element is greater
            than the right element, swap them.
          </li>
          <li>
            If the previous 2 steps are false and the middle element is greater
            than the right element, swap them.
          </li>
        </ul>
      </div>

      <div className="project-7_1-swap-exp">
        <b>Function:</b> performs a basic{" "}
        <a
          href="https://en.wikipedia.org/wiki/Swap_(computer_programming)"
          target="blank"
        >
          <i>swap</i>
        </a>{" "}
        on two elements of an array.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            Set a copy of the first element equal to a temporary variable.
          </li>
          <li>Set the first element equal to the second element .</li>
          <li>
            Set the second element equal to the copy of the first element.
          </li>
        </ul>
      </div>

      <div className="hr-7_1">
        <hr />
      </div>
    </div>
  );
};

export default Project71;
