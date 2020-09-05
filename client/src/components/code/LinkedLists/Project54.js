import React from "react";
import "../../../css/chpt_5/Project5_4.css";
import project5_1_img from "../../../img/Chpt_5-Img/Project5_4Img.png";

const Project54 = () => {
  return (
    <div className="project-5_4-grid">
      <div className="title-5_4">
        <h2>Project 5.4</h2>
      </div>

      <div className="description-5_4">
        <p>
          In project 5.4 we will be covering the implementation of a circular
          linked list-based stack. The code on this page will only expain
          insertion and deletion on a stack and a circular linked list. You can
          view the complete project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%205/TestClass5_4.java"
            target="blank"
          >
            {" "}
            <i>Project 5.4</i>
          </a>
          .
        </p>
      </div>

      <div className="image-5_4">
        <img
          style={{ width: "400px" }}
          src={project5_1_img}
          alt="Project 5.4 Visual"
        />
      </div>

      <div className="project-5_4-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Implement a stack class based on the circular list of Programming
          Project 5.3. This exercise is not too difficult. (However,
          implementing a queue can be harder, unless you make the circular list
          doubly linked.)
        </p>
      </div>

      <pre className="project-5_4-push">
        <code className="language-js">
          {`public void push(int data) {

  list.insertFirst(data);

}`}
        </code>
      </pre>

      <pre className="project-5_4-insert-first">
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

      <pre className="project-5_4-pop">
        <code className="language-js">
          {`public int pop() {

  return (list.deleteFirst().data)

}`}
        </code>
      </pre>

      <pre className="project-5_4-delete-first">
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

      <div className="project-5_4-push-exp">
        <b>Function:</b> insert an item to the top of the stack.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            Call the circular linked list insertFirst method using the new data.
          </li>
        </ul>
      </div>

      <div className="project-5_4-insert-first-exp">
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

      <div className="project-5_4-pop-exp">
        <b>Function:</b> remove an item from the top of the stack.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            Return the data attribute of the linked list deleteFirst method
            return type.
          </li>
        </ul>
      </div>

      <div className="project-5_4-delete-first-exp">
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

      <div className="hr-5_4">
        <hr />
      </div>
    </div>
  );
};

export default Project54;
