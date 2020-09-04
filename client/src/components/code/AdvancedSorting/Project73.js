import React from "react";
import "../../../css/chpt_7/Project7_3.css";

const Project73 = () => {
  return (
    <div className="project-7_3-grid">
      <div className="title-7_3">
        <h2>Project 7.3</h2>
      </div>

      <div className="description-7_3">
        <p>
          In project 7.3 we will be looking at a method that finds the median of
          an array using a partition approach. This page will cover two
          essential methods to the functionality of the project. These methods
          are <b>median</b> and <b>partitonIt</b> You can view the complete
          project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%207/TestClass7_3.java"
            target="blank"
          >
            <i>Project 7.3</i>
          </a>
          .
        </p>
      </div>

      <div className="project-7_3-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Extend Programming Project 7.1 to find the median of an array. You’ll
          make recursive calls somewhat like those in quicksort, but they will
          only partition each subarray, not completely sort it. The process
          stops when the median is found, not when the array is sorted.
        </p>
      </div>

      <pre className="project-7_3-median">
        <code>
          {`public void findMedian() {

    median(0, nElems-1);

}

public void median(int left, int right) {

  int median = partitionIt(left, right);

  System.out.println("Current Median Value: " + arr[median]);

  System.out.println("Array: " + Arrays.toString(arr));

  if(size() == 1)
    return;

  else if(right - (median+1) == left + median && size() % 2 == 0) {

    median(median, right);
    median(left, median);

  }

  else if(median < (size() / 2))
    median(median, right);

  else if(median > (size() / 2))
    median(left, median);

}`}
        </code>
      </pre>

      <pre className="project-7_3-partition">
        <code>
          {`public int partitionIt(int left, int right) {

  int pivot = arr[(left + right) / 2];
  int leftPtr = left - 1;
  int rightPtr = right + 1;

  while(true) {

    while(arr[++leftPtr] < pivot);
    while(arr[--rightPtr] > pivot);

    if(leftPtr >= rightPtr)
      break;

    else
      swap(leftPtr, rightPtr);

  }

  return rightPtr;

}`}
        </code>
      </pre>

      <div className="project-7_3-median-exp">
        <b>Function:</b> find the median of an array using a partition apprach.
        <br />
        <b>Algorithm, part 1</b>
        <br />
        <ul>
          <li>Call the median method with the required intial values.</li>
        </ul>
        <br />
        <b>Algorithm, part 2</b>
        <br />
        <ul>
          <li>Get the temporary median value.</li>
          <li>Print out the median value and the current array.</li>
          <li>If the size of the array is 1, return.</li>
          <li>
            Otherwise, check if the array can be evenly seperated into two parts
            (right - (median+1) == left + median) and the size is evenly
            divisible by 2.
          </li>
          <li>
            If the previous step is true, recursively call median first with a
            new left boundary and then with a new right boundary.
          </li>
          <li>
            Otherwise, if the median index if less than half the size of the
            array, recursively call median using the current median as the left
            boundary.
          </li>
          <li>
            Otherwise, if the median index if greater than half the size of the
            array, recursively call median using the current median as the right
            boundary.
          </li>
        </ul>
      </div>

      <div className="project-7_3-partition-exp">
        <b>Function:</b> partiton an array of inegers of range 'left' to
        'right'.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            Declare the initial pivot, the left pointer and the right pointer.
          </li>
          <li>
            Declare a While Loop to execute until a break statement is
            encountered.
          </li>
          <li>
            While the element of the leftPtr index is less than the pivot,
            increment the left pointer.
          </li>
          <li>
            While the element of the rightPtr index is greater than the pivot,
            decrement the right pointer.
          </li>
          <li>
            If the left pointer is greater than or equal to the right pointer,
            we are done, so break out of the loop.
          </li>
          <li>
            Otherwise, if the previous three steps return false, swap the left
            and right pointers.
          </li>
          <li>Return the right pointer (median).</li>
        </ul>
      </div>

      <div className="hr-7_3">
        <hr />
      </div>
    </div>
  );
};

export default Project73;
