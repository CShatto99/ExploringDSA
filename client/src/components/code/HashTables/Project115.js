import React from "react";
import "../../../css/chpt_11/Project11_5.css";
import project11_1_img from "../../../img/Chpt_11-Img/Project11_5Img.png";

const Project115 = () => {
  return (
    <div className="project-11_5-grid">
      <div className="title-11_5">
        <h2>Project 11.5</h2>
      </div>

      <div className="description-11_5">
        <p>
          Project 11.5 is going to show the implementation of a hash table using
          an array of binary search trees. This project will not cover deletion
          due to its complexity but rather just insertion and finding items in a
          hash table and binary search tree. You can view the complete project
          here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%2011/TestClass11_5.java"
            target="blank"
          >
            <i>Project 11.5</i>
          </a>
          .
        </p>
      </div>

      <div className="image-11_5">
        <img
          style={{ width: "400px" }}
          src={project11_1_img}
          alt="Project 11.5 Visual"
        />
      </div>

      <div className="project-11_5-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Instead of using a linked list to resolve collisions, as in separate
          chaining, use a binary search tree. That is, create a hash table that
          is an array of trees. You can use the hashChain.java program (Listing
          11.3) as a starting point and the Tree class from the tree.java rogram
          (Listing 8.1) in Chapter 8. To display a small tree-based hash table,
          you could use an inorder traversal of each tree.
        </p>
        <br />
        <p>
          Duplicates can present problems in both trees and hash tables, so add
          some code that prevents a duplicate key from being inserted in the
          hash table. (Beware: The find() method in Tree assumes a non-empty
          tree.) To shorten the listing for this program, you can forget about
          deletion, which for trees requires a lot of code.
        </p>
      </div>

      <pre className="project-11_5-insert">
        <code className="language-js">
          {`public void insert(Node newNode) {

  int key = newNode.getKey();

  int hashVal = hashFunc(key);

  hashArray[hashVal].insertBST(newNode);

}`}
        </code>
      </pre>

      <pre className="project-11_5-insert_BST">
        <code className="language-js">
          {`public void insertBST(Node newNode) {

  if(root == null)
    root = newNode;

  else {

    Node current = root;
    Node parent;

    while(true) {

      parent = current;

      if(newNode.data < current.data) {

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

      <pre className="project-11_5-find_BST">
        <code className="language-js">
          {`public Node findBST(int key) {

  Node current = root;

  while(current.data != key) {

    if(key < current.data)
      current = current.left;

    else
      current = current.right;

    if(current == null)
      return null;

  }

  return current;

}`}
        </code>
      </pre>

      <pre className="project-11_5-find">
        <code className="language-js">
          {`public Node find(int key) {

  int hashVal = hashFunc(key);

  Node l = hashArray[hashVal].findBST(key);

  return l;

}`}
        </code>
      </pre>

      <div className="project-11_5-insert-exp">
        <b>Function:</b> inserts a new item into the hash table.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Get the key of the new node.</li>
          <li>Get the hash value of the new node's key.</li>
          <li>
            Call the insert method on the DataItem of the hash value index using
            the new node.
          </li>
        </ul>
      </div>

      <div className="project-11_5-insert_BST-exp">
        <b>Function:</b> inserts a node into the binary search tree.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
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

      <div className="project-11_5-find-exp">
        <b>Function:</b> find a node in the hash table given a specified key.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Get the hash value of the given key.</li>
          <li>
            Get the node by calling the find method on the DataItem of the hash
            value index.
          </li>
          <li>Return the resulting node.</li>
        </ul>
      </div>

      <div className="project-11_5-find_BST-exp">
        <b>Function:</b> find a node in the binary search tree using a specified
        key.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Initialize the current node.</li>
          <li>
            While the data of the current node is not equal to the key:
            <ul>
              <li>
                If the key is less than the data of the current node: set
                current to its left child.
              </li>
              <li>Otherwise, set current to its right child.</li>
              <li>If current is equal to null: return a null node.</li>
            </ul>
          </li>
          <li>Return the current node.</li>
        </ul>
      </div>

      <div className="hr-11_5">
        <hr />
      </div>
    </div>
  );
};

export default Project115;
