import React from "react";
import "../../../css/chpt_5/Project5_1.css";
import project5_1_img from "../../../img/Chpt_5-Img/Project5_1Img.png";

const Project51 = () => {
  return (
    <div className="project-5_1-grid">
      <div className="title-5_1">
        <h2>Project 5.1</h2>
      </div>

      <div className="description-5_1">
        <p>
          Project 5.1 is going to cover a minimal implementation of a linked
          list-based priority queue. The code that will be covered on this page
          includes insertion and deletion on a linked list and priority queue.
          You can view the complete project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%205/TestClass5_1.java"
            target="blank"
          >
            <i>Project 5.1</i>
          </a>
          .
        </p>
      </div>

      <div className="image-5_1">
        <img
          style={{ width: "400px" }}
          src={project5_1_img}
          alt="Project 5.1 Visual"
        />
      </div>

      <div className="project-5_1-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Implement a priority queue based on a sorted linked list. The remove
          operation on the priority queue should remove the item with the
          smallest key.
        </p>
      </div>

      <pre className="project-5_1-queue-insert">
        <code className="language-js">
          {`public void insert(int data) {

  list.listInsert(data);

}`}
        </code>
      </pre>

      <pre className="project-5_1-list-insert">
        <code className="language-js">
          {`public void listInsert(int value) {

  Node newNode = new Node(value);
  Node previous = null, current = head;

  while(current != null && newNode.data > current.data) {

    previous = current;
    current = current.next;

  }

  if(previous == null)
    head = newNode;

  else
    previous.next = newNode;

  newNode.next = current;

}`}
        </code>
      </pre>

      <pre className="project-5_1-queue-remove">
        <code className="language-js">
          {`public int remove() {

  Node temp = list.listRemove();
  return temp.data;

}`}
        </code>
      </pre>

      <pre className="project-5_1-list-remove">
        <code className="language-js">
          {`public Node listRemove() {

  Node temp = head;
  head = head.next;

  return temp;

}`}
        </code>
      </pre>

      <div className="project-5_1-queue-insert-exp">
        <b>Function:</b> insert a value into the priority queue.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            Call the linked list insert method and pass the new data to it.
          </li>
        </ul>
      </div>

      <div className="project-5_1-list-insert-exp">
        <b>Function:</b> insert a node into the sorted linked list (ascending
        order).
        <br />
        <b>Algorithm, part 1 (traversal)</b>
        <br />
        <ul>
          <li>
            Declare all nodes required for a linked list insertion at a
            specified position.
          </li>
          <li>
            Check if the current node exists and the new node's data is greater
            than the current node's data.
          </li>
          <li>
            While the previous step is true, update previous to current and
            update current to the next node.
          </li>
        </ul>
        <b>Algorithm, part 2 (insertion)</b>
        <br />
        <ul>
          <li>
            If the previous node remains null (list is empty), set head equal to
            the new node.
          </li>
          <li>Otherwise, set previous.next equal to the new node.</li>
          <li>Set newNode.next equal to current.</li>
        </ul>
      </div>

      <div className="project-5_1-queue-remove-exp">
        <b>Function:</b> remove the smallest value (highest priority) from the
        priority queue.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            Create a temporary copy of the smallest value using the linked list
            remove method.
          </li>
          <li>Return the data attribute of the temp variable.</li>
        </ul>
      </div>

      <div className="project-5_1-list-remove-exp">
        <b>Function:</b> delete and return the head node from the linked list.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Create a temporary copy of the head node.</li>
          <li>Update head to the next node.</li>
          <li>Return the temporary copy.</li>
        </ul>
      </div>

      <div className="hr-5_1">
        <hr />
      </div>
    </div>
  );
};

export default Project51;
