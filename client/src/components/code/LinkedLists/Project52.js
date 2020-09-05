import React from "react";
import "../../../css/chpt_5/Project5_2.css";
import project4_1_img from "../../../img/Chpt_5-Img/Project5_2Img.png";

const Project52 = () => {
  return (
    <div className="project-5_2-grid">
      <div className="title-5_2">
        <h2>Project 5.2</h2>
      </div>

      <div className="description-5_2">
        <p>
          Project 5.2 will be covering the implementation of a deque using a
          double-ended linked list. This project will show and explain insertion
          and deletion on both ends of the deque. You can view the complete
          project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%205/TestClass5_2.java"
            target="blank"
          >
            {" "}
            <i>Project 5.2</i>
          </a>
          .
        </p>
      </div>

      <div className="image-5_2">
        <img
          style={{ width: "400px" }}
          src={project4_1_img}
          alt="Project 5.2 Visual"
        />
      </div>

      <div className="project-5_2-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Implement a deque based on a doubly linked list. (See Programming
          Project 4.2 in the preceding chapter.) The user should be able to
          carry out the normal operations on the deque.
        </p>
      </div>

      <pre className="project-5_2-insert-head">
        <code className="language-js">
          {`// DEQUE CLASS
public void insertFront(int data) {

  list.insertHead(data);

}

// LINKED LIST CLASS
public void insertHead(int data) {

  Node newNode = new Node(data);

  if(isEmpty())
    tail = newNode;

  else
    head.previous = newNode;

  newNode.next = head;
  head = newNode;

}`}
        </code>
      </pre>

      <pre className="project-5_2-insert-tail">
        <code className="language-js">
          {`// DEQUE CLASS
public void insertBack(int data) {

  list.insertTail(data);

}

// LINKED LIST CLASS
public void insertTail(int data) {

  Node newNode = new Node(data);

  if(isEmpty())
    head = newNode;

  else {

    tail.next = newNode;
    newNode.previous = tail;

  }

  tail = newNode;

}`}
        </code>
      </pre>

      <pre className="project-5_2-delete-head">
        <code className="language-js">
          {`// DEQUE CLASS
public Node removeFront() {

  Node temp = list.deleteHead();
  return temp;

}

// LINKED LIST CLASS
public Node deleteHead() {

  Node temp = head;

  if(head.next == null)
    tail = null;

  else
    head.next.previous = null;

  head = head.next;
  return temp;

}`}
        </code>
      </pre>

      <pre className="project-5_2-delete-tail">
        <code className="language-js">
          {`// DEQUE CLASS
public Node removeBack() {

  Node temp = list.deleteTail();
  return temp;

}

// LINKED LIST CLASS
public Node deleteTail() {

  Node temp = tail;

  if(tail.previous == null)
    head = null;

  else
    tail.previous.next = null;

  tail = tail.previous;
  return temp;

}`}
        </code>
      </pre>

      <div className="project-5_2-insert-head-exp">
        <b>Function:</b> insert a value into the front of the deque.
        <br />
        <b>Algorithm (Deque class)</b>
        <br />
        <ul>
          <li>Call the linked list insertHead method using the new data.</li>
        </ul>
        <br />
        <b>Function:</b> insert a new head node into the linked list.
        <br />
        <b>Algorithm (DoublyLinkedList class)</b>
        <br />
        <ul>
          <li>Create a new node with the new data.</li>
          <li>If the list is empty, set the tail equal to the new node.</li>
          <li>Otherwise, set head.previous to the new node.</li>
          <li>Set newNode.next equal to the head node.</li>
          <li>Update head to the new node.</li>
        </ul>
      </div>

      <div className="project-5_2-insert-tail-exp">
        <b>Function:</b> insert a value into the back of the deque.
        <br />
        <b>Algorithm (Deque class)</b>
        <br />
        <ul>
          <li>Call the linked list insertTail method using the new data.</li>
        </ul>
        <br />
        <b>Function:</b> insert a new tail node into the linked list.
        <br />
        <b>Algorithm (DoublyLinkedList class)</b>
        <br />
        <ul>
          <li>Create a new node with the new data.</li>
          <li>If the list is empty, set the head equal to the new node.</li>
          <li>
            Otherwise, set tail.next equal to the new node and newNode.previous
            to the tail node.
          </li>
          <li>Set tail equal to the new node.</li>
        </ul>
      </div>

      <div className="project-5_2-delete-head-exp">
        <b>Function:</b> remove the front value of the deque.
        <br />
        <b>Algorithm (Deque class)</b>
        <br />
        <ul>
          <li>
            Save a copy of the node containing the front value by calling the
            deleteHead method of the linked list class.
          </li>
          <li>Return the saved node.</li>
        </ul>
        <br />
        <b>Function:</b> delete and return the head node of the linked list.
        <br />
        <b>Algorithm (DoublyLinkedList class)</b>
        <br />
        <ul>
          <li>Save a copy of the head node to be returned.</li>
          <li>
            If head.next is null (head is the only node), set the tail node to
            null.
          </li>
          <li>
            Otherwise, set head.next.previous to null (head.next.previous =
            head).
          </li>
          <li>Update head to the next node.</li>
          <li>Return the copy of the head node.</li>
        </ul>
      </div>

      <div className="project-5_2-delete-tail-exp">
        <b>Function:</b> remove the last value of the deque.
        <br />
        <b>Algorithm (Deque class)</b>
        <br />
        <ul>
          <li>
            Save a copy of the node containing the last value by calling the
            deleteTail method of the linked list class.
          </li>
          <li>Return the saved node.</li>
        </ul>
        <br />
        <b>Function:</b> delete and return the tail node of the linked list.
        <br />
        <b>Algorithm (DoublyLinkedList class)</b>
        <br />
        <ul>
          <li>Save a copy of the tail node to be returned.</li>
          <li>
            If tail.previous is null (tail is the only node), set the head node
            to null.
          </li>
          <li>
            Otherwise, set tail.previous.next to null (tail.previous.next =
            tail).
          </li>
          <li>Update tail to the previous node.</li>
          <li>Return the copy of the tail node.</li>
        </ul>
      </div>

      <div className="hr-5_2">
        <hr />
      </div>
    </div>
  );
};

export default Project52;
