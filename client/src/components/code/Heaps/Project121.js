import React from "react";
import "../../../css/chpt_12/Project12_1.css";
import project12_1_img from "../../../img/Chpt_12-Img/Project12_1Img.png";

const Project121 = () => {
  return (
    <div className="project-12_1-grid">
      <div className="title-12_1">
        <h2>Project 12.1</h2>
      </div>

      <div className="description-12_1">
        <p>
          In project 12.1 we will look at an implementation of a minimum heap.
          The code on this page will cover insertion, deletion and two methods
          that are required for the functionality of the heap (trickleUp and
          trickleDown). You can view the complete project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%2012/TestClass12_1.java"
            target="blank"
          >
            <i>Project 12.1</i>
          </a>
          .
        </p>
      </div>

      <div className="image-12_1">
        <img
          style={{ width: "400px" }}
          src={project12_1_img}
          alt="Project 12.1 Visual"
        />
      </div>

      <div className="project-12_1-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Convert the heap.java program (Listing 12.1) so the heap is an
          ascending, rather than a descending, heap. (That is, the node at the
          root is the smallest rather than the largest.) Make sure all
          operations work correctly.
        </p>
      </div>

      <pre className="project-12_1-insert">
        <code className="language-js">
          {`public boolean insert(int key) {

  if(currentSize == maxSize)
    return false;

  Node newNode = new Node(key);
  heapArray[currentSize] = newNode;

  trickleUp(currentSize++);

  return true;

}`}
        </code>
      </pre>

      <pre className="project-12_1-trickle-up">
        <code className="language-js">
          {`public void trickleUp(int index) {

  int parent = (index - 1) / 2;
  Node bottom = heapArray[index];

  while(index > 0 && heapArray[parent].getKey() < bottom.getKey()) {

    heapArray[index] = heapArray[parent];
    index = parent;
    parent = (parent - 1) / 2;

  }

  heapArray[index] = bottom;

}`}
        </code>
      </pre>

      <pre className="project-12_1-remove">
        <code className="language-js">
          {`public Node remove() {

  Node root = heapArray[0];
  heapArray[0] = heapArray[--currentSize];

  trickleDown(0);

  return root;

}`}
        </code>
      </pre>

      <pre className="project-12_1-trickle-down">
        <code className="language-js">
          {`public void trickleDown(int index) {

  int largerChild;
  Node top = heapArray[index];

  while(index < currentSize / 2) {

    int leftChild = 2 * index + 1;
    int rightChild = leftChild + 1;

    if(rightChild < currentSize && heapArray[leftChild].getKey() < heapArray[rightChild].getKey())
      largerChild = rightChild;

    else
      largerChild = leftChild;

    if(top.getKey() >=
       heapArray[largerChild].getKey())

      break;

    heapArray[index] = heapArray[largerChild];
    index = largerChild;

  }

  heapArray[index] = top;

}`}
        </code>
      </pre>

      <div className="project-12_1-insert-exp">
        <b>Function:</b> inserts a new node into the heap.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            If the current size is equal to the max size (heap is full), return
            false.
          </li>
          <li>Create a new node with the given key.</li>
          <li>
            Add the new node to the heap array using the current size as the
            index.
          </li>
          <li>
            Call the trickleUp method with the currentSize index and increment
            the currentSize index.
          </li>
          <li>The node was successfully inserted, return true.</li>
        </ul>
      </div>

      <div className="project-12_1-trickle-up-exp">
        <b>Function:</b> inserts a new node into the heap and trickles it up to
        the correct position.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            Declare the initial parent index and save a copy of the newly
            inserted node.
          </li>
          <li>
            While index exists (greater than 0) and the parent node is less than
            the bottom node:
            <ul>
              <li>Move the bottom node into the position of its parent.</li>
              <li>Update the index to its parent.</li>
              <li>Update parent to its parent (index's grandparent).</li>
            </ul>
          </li>
          <li>Update the "bottom" node to its correct position.</li>
        </ul>
      </div>

      <div className="project-12_1-remove-exp">
        <b>Function:</b> removes and returns the root (index 0) of a heap.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Save a copy of the root to be returned.</li>
          <li>
            Replace the root with the last node in the heap and decrement the
            size of the heap.
          </li>
          <li>Call the trickeDown method with the new root.</li>
          <li>Return the copy of the original root.</li>
        </ul>
      </div>

      <div className="project-12_1-trickle-down-exp">
        <b>Function:</b> replaces the root node with the last node in the heap
        and trickles it down to its correct position.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            Declare the larger child variable and save a copy of the new top
            node.
          </li>
          <li>
            While the node has at least one child:
            <ul>
              <li>Initialize the indices of the left and right children.</li>
              <li>
                If the right child exists and the left child is less than the
                right child: set the right child to the larger child.
              </li>
              <li>Otherwise, set the left child to the larger child.</li>
              <li>
                If the value of the top node is greater than or equal to larger
                child: exit the While Loop.
              </li>
              <li>
                Move the new top node down by setting it equal to the larger
                child.
              </li>
              <li>Update the index to the larger child's index.</li>
            </ul>
          </li>
          <li>
            Update the original top node to its correct position in the heap.
          </li>
        </ul>
      </div>

      <div className="hr-12_1">
        <hr />
      </div>
    </div>
  );
};

export default Project121;
