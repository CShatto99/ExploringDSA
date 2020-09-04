import React from "react";
import "../../../css/chpt_7/Project7_2.css";

const Project72 = () => {
  return (
    <div className="project-7_2-grid">
      <div className="title-7_2">
        <h2>Project 7.2</h2>
      </div>

      <div className="description-7_2">
        <p>
          In project 7.2 we will be modifying a quicksort algorithm to count the
          number of copies and comparisons it makes. This project will look at
          the quicksort method, a partiton method, a method for determining the
          pivot of the partiton method, a basic{" "}
          <a
            href="https://en.wikipedia.org/wiki/Swap_(computer_programming)"
            target="blank"
          >
            <i>swap</i>
          </a>{" "}
          method and a method that displays the number of copies and comparisons
          made by the algorithms. You can view the complete project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%207/TestClass7_2.java"
            target="blank"
          >
            <i>Project 7.2</i>
          </a>
          .
        </p>
      </div>

      <div className="project-7_2-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Modify the quickSort2.java program (Listing 7.4) to count the number
          of copies and comparisons it makes during a sort and then display the
          totals. This program should duplicate the performance of the
          QuickSort2 Workshop applet, so the copies and comparisons for
          inversely sorted data should agree. (Remember that a swap is three
          copies.)
        </p>
      </div>

      <pre className="project-7_2-quicksort">
        <code>
          {`public void quickSortCall(int left, int right) {

  int size = right-left+1;

  if(size <= 3)
    manualSort(left, right);

  else {

    int median = medianOf3(left, right);
    int pivot = partitionIt(left, right, median);

    quickSortCall(left, pivot-1);
    quickSortCall(pivot+1, right);

  }

}`}
        </code>
      </pre>

      <pre className="project-7_2-partition">
        <code>
          {`public int partitionIt(int left, int right, int pivot) {

  int leftPtr = left;
  int rightPtr = right - 1;

  while(true) {

    while(arr[++leftPtr] < pivot) {
      copies++; 
    };

    while(arr[--rightPtr] > pivot) {
      copies++; 
    };

    if(leftPtr >= rightPtr)
      break;

    else
      swap(leftPtr, rightPtr);

  }

  swap(leftPtr ,right-1);

  return leftPtr;

}`}
        </code>
      </pre>

      <pre className="project-7_2-median">
        <code>
          {`public int 
medianOf3(int left, int right) {

  int center = (left+right) / 2;

  if(arr[left] > arr[center])
    swap(left, center);

  if(arr[left] > arr[right])
    swap(left, right);

  if(arr[center] > arr[right])
    swap(center, right);

  swap(center, right-1);

  return arr[right-1];

}`}
        </code>
      </pre>

      <pre className="project-7_2-swap">
        <code>
          {`public void swap(int a, int b) {

  comparisons+=3;

  int temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;

}`}
        </code>
      </pre>

      <pre className="project-7_2-display">
        <code>
          {`public void algoInfo() {

  System.out.println("Elements: " + nItems);
  System.out.println("Comparisons: " + comparisons);
  System.out.println("Copies: " + copies);

}`}
        </code>
      </pre>

      <div className="project-7_2-quicksort-exp">
        <b>Function:</b> sorts an array of integers using a quicksort algorithm.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Get the size of the array.</li>
          <li>
            If the size is less than or equal to 3, call the manual sort method
            (same algorithm in project 7.1).
          </li>
          <li>
            Otherwise, get the median of the array (pivot for partiton method )
            and the pivot for the quicksort method.
          </li>
          <li>
            While the size of the array is greater than 3, make 2 recursive
            calls to the quicksort method using the new right and left pointers.
          </li>
        </ul>
      </div>

      <div className="project-7_2-partition-exp">
        <b>Function:</b> performs a partiton on an array of integers.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Declare the left and right pointers.</li>
          <li>
            Declare a While Loop to execute until a break statement is
            encocuntered.
          </li>
          <li>
            While the element of the leftPtr index is less than the pivot,
            increment the left pointer and copies by 1.
          </li>
          <li>
            While the element of the rightPtr index is greater than the pivot,
            decrement the right pointer and increment the copies.
          </li>
          <li>
            If the left pointer is greater than or equal to the right pointer,
            we are done, so break out of the While Loop.
          </li>
          <li>
            Otherwise, if the previous three steps return false, swap the left
            and right pointers.
          </li>
          <li>
            Swap the left pointer with the right-most index and return the left
            pointer.
          </li>
        </ul>
      </div>

      <div className="project-7_2-median-exp">
        <b>Function:</b> returns the median of the first, last and middle
        elements of the array.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Delcare the center index.</li>
          <li>
            If the left-most element is greater than the center element, swap
            them.
          </li>
          <li>
            If the left-most element is greater than the right-most element,
            swap them.
          </li>
          <li>
            If the center element if greater than the right-most element, swap
            them.
          </li>
          <li>
            Put the median on the right by swapping the center with the
            right-most element.
          </li>
          <li>Return the median value.</li>
        </ul>
      </div>

      <div className="project-7_2-swap-exp">
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

      <div className="project-7_2-display-exp">
        <b>Function:</b> display the number of copies and comparisons used in
        the quicksort algorithm.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Display the length of the arrary.</li>
          <li>Display the number of comparisons.</li>
          <li>Display the number of copies.</li>
        </ul>
      </div>

      <div className="hr-7_2">
        <hr />
      </div>
    </div>
  );
};

export default Project72;
