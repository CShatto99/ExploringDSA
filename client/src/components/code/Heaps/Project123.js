import React from "react";
import "../../../css/chpt_12/Project12_3.css";
import project12_1_img from "../../../img/Chpt_12-Img/Project12_3Img.png";

const Project123 = () => {
  return (
    <div className="project-12_3-grid">
      <div className="title-12_3">
        <h2>Project 12.3</h2>
      </div>

      <div className="description-12_3">
        <p>
          In project 12.3 we will see a heap-based priority queue. The bare
          minimum operations such as: inserting, deleting and peeking will be
          detailed on this page. The <b>trickleUp</b> and <b>trickleDown</b>{" "}
          methods will be identical to those in the previous projects. You can
          view the complete project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%2012/TestClass12_3.java"
            target="blank"
          >
            <i>Project 12.3</i>
          </a>
          .
        </p>
      </div>

      <div className="image-12_3">
        <img
          style={{ width: "400px" }}
          src={project12_1_img}
          alt="Project 12.3 Visual"
        />
      </div>

      <div className="project-12_3-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Implement the PriorityQ class in the priorityQ.java program (Listing
          4.6) using a heap instead of an array. You should be able to use the
          Heap class in the heap.java program (Listing 12.1) without
          modification. Make it a descending queue (largest item is removed).
        </p>
      </div>

      <pre className="project-12_3-insert">
        <code className="language-js">
          {`public void insert(int key) {

  PQHeap.heapInsert(key);
  nItems++;

}

public boolean heapInsert(int key) {

  if(currentSize == maxSize)
    return false;

  Node newNode = new Node(key);
  heapArray[currentSize] = newNode;
  trickleUp(currentSize++);

  return true;

}`}
        </code>
      </pre>

      <pre className="project-12_3-remove">
        <code className="language-js">
          {`public int remove() {

  nItems--;
  return PQHeap.heapRemove().getKey();

}

public Node heapRemove() {

  Node root = heapArray[0];
  heapArray[0] = heapArray[--currentSize];
  trickleDown(0);

  return root;

}`}
        </code>
      </pre>

      <pre className="project-12_3-peek">
        <code className="language-js">
          {`public int peek() {

  return PQHeap.heapPeek().getKey();

}

public Node heapPeek() {

  return heapArray[0];

}`}
        </code>
      </pre>

      <div className="project-12_3-insert-exp">
        <b>Function:</b> inserts a new node into the heap.
        <br />
        <b>Algorithm, part 1 (PriorityQ class)</b>
        <br />
        <ul>
          <li>Call the heap insert method using the given key.</li>
          <li>Increment the number of items in the priority queue by 1.</li>
        </ul>
        <b>Algorithm, part 2 (Heap class)</b>
        <br />
        <ul>
          <li>
            If the current size if equal to the max size, the heap array is
            full, so return false.
          </li>
          <li>Create a new node with the given key.</li>
          <li>Insert the new node at the end of the heap array.</li>
          <li>
            Call the trickleUp method using the index of the newly inserted node
            and increment the current size by 1.
          </li>
          <li>The node was successfully inserted, return true.</li>
        </ul>
      </div>

      <div className="project-12_3-remove-exp">
        <b>Function:</b> removes the largest item in the heap (root).
        <br />
        <b>Algorithm, part 1 (PriorityQ class)</b>
        <br />
        <ul>
          <li>Decrement the number of items in the heap by 1.</li>
          <li>
            Call the heap remove method and return the key of the returned node.
          </li>
        </ul>
        <b>Algorithm, part 2 (Heap class)</b>
        <br />
        <ul>
          <li>Save a copy of the root to be returned (index 0).</li>
          <li>
            Set the root equal to the last node in the heap and decrement the
            number of items in the heap.
          </li>
          <li>
            Call the trickleDown method with the index of the replacement root
            (index 0).
          </li>
          <li>Return the original root.</li>
        </ul>
      </div>

      <div className="project-12_3-peek-exp">
        <b>Function:</b> returns the largest item in the heap (root).
        <br />
        <b>Algorithm, part 1 (PriorityQ class)</b>
        <br />
        <ul>
          <li>
            Call the heap peek method and return the key of the returned node.
          </li>
        </ul>
        <b>Algorithm, part 2 (Heap class)</b>
        <br />
        <ul>
          <li>Return the first element of the heap array (root).</li>
        </ul>
      </div>

      <div className="hr-12_3">
        <hr />
      </div>
    </div>
  );
};

export default Project123;
