import React from "react";
import "../../../css/chpt_5/Project5_3.css";
import project5_1_img from "../../../img/Chpt_5-Img/Project5_3Img.png";

const Project53 = () => {
  return (
    <div className="project-5_3-grid">
      <div className="title-5_3">
        <h2>Project 5.3</h2>
      </div>

      <div className="description-5_3">
        <p>
          Project 5.3 is going to show the implementation of a circular linked
          list. It will cover two types of insertion, deletion of the first link
          and deletion with a specified key. You can view the complete project
          here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%205/TestClass5_3.java"
            target="blank"
          >
            {" "}
            <i>Project 5.3</i>
          </a>
          .
        </p>
      </div>

      <div className="image-5_3">
        <img
          style={{ width: "400px" }}
          src={project5_1_img}
          alt="Project 5.3 Visual"
        />
      </div>

      <div className="project-5_3-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Make a class for a singly linked circular list that has no end and no
          beginning. The only access to the list is a single reference, current,
          that can point to any link on the list. This reference can move around
          the list as needed. (See Programming Project 5.5 for a situation in
          which such a circular list is ideally suited.) Your list should handle
          insertion, searching, and deletion. You may find it convenient if
          these operations take place one link downstream of the link pointed to
          by current. (Because the upstream link is singly linked, you can’t get
          at it without going all the way around the circle.) You should also be
          able to display the list (although you’ll need to break the circle at
          some arbitrary point to print it on the screen). A step() method that
          moves current along to the next link might come in handy too.
        </p>
      </div>

      <pre className="project-5_3-insert-first">
        <code className="language-js">
          {`public void insertFirst(int data) {

  Node newNode = new Node(data);

  if(last == null)
    last = newNode;

  else
    newNode.next = last.next;

  last.next = newNode;
  length++;

}`}
        </code>
      </pre>

      <pre className="project-5_3-delete-first">
        <code className="language-js">
          {`public Node deleteFirst() {

  Node first = last.next;

  if(last == null)
    return null;

  else {

    first = first.next;
    last.next = first;

  }

  length--;
  return first;

}`}
        </code>
      </pre>

      <pre className="project-5_3-delete-after">
        <code className="language-js">
          {`public Node deleteAfter(int counter) {

  Node current = last.next, previous = last;

  if(last == null)
    return null;

  for(int i = 0; i < counter; i++) {

    previous = current;
    current = current.next;

  }

  Node temp = current;
  previous.next = current.next;
  current = current.next;

  last = previous;

  length--;
  return temp;

}`}
        </code>
      </pre>

      <pre className="project-5_3-display">
        <code className="language-js">
          {`public void displayCircularList() {

  Node current = last.next;

  while(current != last) {

    current.displayLink();
    current = first.next;

  }

  current.displayLink();
  System.out.println();

}`}
        </code>
      </pre>

      <div className="project-5_3-insert-first-exp">
        <b>Function:</b> insert a node at the arbitrarily selected starting
        point in the circular linked list.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Create a new node with the new data.</li>
          <li>
            If last is null (list is empty), set last equal to the new node.
          </li>
          <li>
            Otherwise, set newNode.next equal to last.next (last.next = first).
          </li>
          <li>Update last.next to the new node.</li>
          <li>Increment the length of the list.</li>
        </ul>
      </div>

      <div className="project-5_3-delete-first-exp">
        <b>Function:</b> delete the arbitrarily selected first node from the
        list.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            Save a copy of the first node to be returned (last.next = first).
          </li>
          <li>If last is null (list is empty), return a null value.</li>
          <li>
            Otherwise, update first to the next node and update last.next to the
            new first node.
          </li>
          <li>
            Decrement the length of the list and return the copy of the first
            node.
          </li>
        </ul>
      </div>

      <div className="project-5_3-delete-after-exp">
        <b>Function:</b> delete a node after a specified counter.
        <br />
        <b>Algorithm, part 1 (traversal)</b>
        <br />
        <ul>
          <li>Delcare the nodes required for a specified deletion.</li>
          <li>If last is null (list is empty), return a null value.</li>
          <li>Declare a For Loop that iterates until the specified counter.</li>
          <li>
            While the loop has not terminated, update previous to current and
            current to the next node.
          </li>
        </ul>
        <b>Algorithm, part 2 (deletion)</b>
        <br />
        <ul>
          <li>Save a copy of current to be returned.</li>
          <li>Skip over current by setting previous.next to current.next.</li>
          <li>Update current to the next node.</li>
          <li>Update last to the previous node.</li>
          <li>Decrement the length of the list and return the deleted node.</li>
        </ul>
      </div>

      <div className="project-5_3-display-exp">
        <b>Function:</b> display the contents of the circular linked list.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Save a copy of the temporary current node to be displayed.</li>
          <li>Check if current is not equal to the last node.</li>
          <li>
            While the previous step is true, display the current node and update
            current to the next node.
          </li>
          <li>Display the last node in the list.</li>
        </ul>
      </div>

      <div className="hr-5_3">
        <hr />
      </div>
    </div>
  );
};

export default Project53;
