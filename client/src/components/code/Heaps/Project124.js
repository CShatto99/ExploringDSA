import React from "react";
import "../../../css/chpt_12/Project12_4.css";
import project12_1_img from "../../../img/Chpt_12-Img/Project12_4Img.png";

const Project124 = () => {
  return (
    <div className="project-12_4-grid">
      <div className="title-12_4">
        <h2>Project 12.4</h2>
      </div>

      <div className="description-12_4">
        <p>
          In project 12.4 we will cover a binary search tree that is able to
          support a priority queue. The <b>removeMax</b> and <b>findMax</b>{" "}
          methods in the BinaryTree class will by synonymous will the remove and
          peek methods that are in a traditional priority queue. You can view
          the complete project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%2012/TestClass12_4.java"
            target="blank"
          >
            <i>Project 12.4</i>
          </a>
          .
        </p>
      </div>

      <div className="image-12_4">
        <img
          style={{ width: "400px" }}
          src={project12_1_img}
          alt="Project 12.4 Visual"
        />
      </div>

      <div className="project-12_4-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Start with the Tree class from the tree.java program (Listing 8.1).
          Modify this class so it supports priority queues by adding a
          removeMax() method that removes the largest item. In a heap this is
          easy, but in a tree it’s slightly harder. How do you find the largest
          item in a tree? Do you need to worry about both its children when you
          delete it? Implementing change() is optional. It’s easily handled in a
          binary search tree by deleting the old item and inserting a new one
          with a different key.
        </p>
        <br />
        <p>
          The application should relate to a PriorityQ class; the Tree class
          should be invisible to main() (except perhaps for displaying the tree
          while you’re debugging). Insertion and removeMax() will operate in
          O(logN) time.
        </p>
      </div>

      <pre className="project-12_4-insert">
        <code className="language-js">
          {`public void insert(int data) {

  nItems++;
  BST.insertBST(data);

}

public void insertBST(int data) {

  Node newNode = new Node(data);

  if(root == null)
    root = newNode;

  else {

    Node current = root;
    Node parent;

    while(true) {

      parent = current;

      if(data < current.data) {

        current = current.left;

        if(current == null) {

          parent.left = newNode;
          return;

        }

      }

      else {

        current = current.right;

        if(current == null) {

          parent.right = newNode;
          return;

        }
      }
    }
  }
}`}
        </code>
      </pre>

      <pre className="project-12_4-remove">
        <code className="language-js">
          {`public int remove() {

  nItems--;
  return BST.removeMax();

}

public int removeMax() {

  Node last = null;
  Node current = root;

  while(current != null) {

    last = current;
    current = current.right;

  }

  delete(last.data);

  return last.data;

}`}
        </code>
      </pre>

      <pre className="project-12_4-peek">
        <code className="language-js">
          {`public int peek() {

  return BST.findMax();

}

public int findMax() {

  Node last = null;
  Node current = root;

  while(current != null) {

    last = current;
    current = current.right;

  }

  return last.data;

}`}
        </code>
      </pre>

      <div className="project-12_4-insert-exp">
        <b>Function:</b> inserts a node into the binary search tree.
        <br />
        <b>Algorithm, part 1 (PriorityQ class)</b>
        <br />
        <ul>
          <li>Increment the number of items in the tree by 1.</li>
          <li>Call the tree insert method using the new data</li>
        </ul>
        <b>Algorithm, part 2 (BinaryTree class)</b>
        <br />
        <ul>
          <li>Initialize the new node with the new data.</li>
          <li>If the root is null, set root equal to the new node.</li>
          <li>
            Otherwise:
            <ul>
              <li>Initialize the current node (root) and the parent node.</li>
              <li>
                While a return statement is not encountered:
                <ul>
                  <li>Update parent to current.</li>
                  <li>
                    If the data of the new node is less than the data of the
                    current node:
                    <ul>
                      <li>Update current to its left child.</li>
                      <li>
                        If current is equal to null: set the left child of the
                        parent node equal to the new node.
                      </li>
                      <li>Return to exit the While Loop.</li>
                    </ul>
                  </li>
                  <li>
                    Otherwise, if the data of the new node is greater than the
                    data of the current node:
                    <ul>
                      <li>Update current to its right child.</li>
                      <li>
                        If current is equal to null: set the right child of the
                        parent node equal to the new node.
                      </li>
                      <li>Return to exit the While Loop.</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="project-12_4-remove-exp">
        <b>Function:</b> removes and returns the right-most node (largest item)
        from the binary search tree.
        <br />
        <b>Algorithm, part 1 (PriorityQ class)</b>
        <br />
        <ul>
          <li>Decrement the number of items in the priority queue by 1.</li>
          <li>
            Call the removeMax method of the BinaryTree class and return the
            data of the resulting node.
          </li>
        </ul>
        <b>Algorithm, part 2 (BinaryTree class)</b>
        <br />
        <ul>
          <li>Initialize last to null and current to the root.</li>
          <li>
            While the current node exists:
            <ul>
              <li>Update last to current.</li>
              <li>Update current to its right child (larger child).</li>
            </ul>
          </li>
          <li>Call the delete method using the data of the last node.</li>
          <li>Return the data of the last node.</li>
        </ul>
      </div>

      <div className="project-12_4-peek-exp">
        <b>Function:</b> returns the right-most node (largest item) from the
        binary search tree.
        <br />
        <b>Algorithm, part 1 (PriorityQ class)</b>
        <br />
        <ul>
          <li>
            Call the findMax method of the BinaryTree class and return the data
            of the resulting node.
          </li>
        </ul>
        <b>Algorithm, part 2 (BinaryTree class)</b>
        <br />
        <ul>
          <li>Initialize last to null and current to the root.</li>
          <li>
            While the current node exists:
            <ul>
              <li>Update last to current.</li>
              <li>Update current to its right child (larger child).</li>
            </ul>
          </li>
          <li>Return the data of the last node.</li>
        </ul>
      </div>

      <div className="hr-12_4">
        <hr />
      </div>
    </div>
  );
};

export default Project124;
