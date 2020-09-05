import React from "react";
import "../../../css/chpt_11/Project11_1.css";
import project11_1_img from "../../../img/Chpt_11-Img/Project11_1Img.png";

const Project111 = () => {
  let quadraticProbing =
    "https://en.wikipedia.org/wiki/Quadratic_probing#targetText=Quadratic%20probing%20is%20an%20open,an%20open%20slot%20is%20found.";
  return (
    <div className="project-11_1-grid">
      <div className="title-11_1">
        <h2>Project 11.1</h2>
      </div>

      <div className="description-11_1">
        <p>
          In project 11.1 we will be looking at a hash table that uses{" "}
          <a href={quadraticProbing} target="blank">
            <i>quadratic probing</i>
          </a>{" "}
          to resolve hash collisons. This page will cover the probing method and
          three fundamental methods that are essential to the functionality of a
          hash table. You can view the complete project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%2011/TestClass11_1.java"
            target="blank"
          >
            <i>Project 11.1</i>
          </a>
          .
        </p>
      </div>

      <div className="image-11_1">
        <img
          style={{ width: "400px" }}
          src={project11_1_img}
          alt="Project 11.1 Visual"
        />
      </div>

      <div className="project-11_1-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Modify the hash.java program (Listing 11.1) to use quadratic probing.
        </p>
      </div>

      <pre className="project-11_1-quadratic-probe">
        <code className="language-js">
          {`public int quadraticProbe(int hashVal, int stepNum) {

  return (hashVal + stepNum*stepNum);

}`}
        </code>
      </pre>

      <pre className="project-11_1-insert">
        <code className="language-js">
          {`public void insert(DataItem newItem) {

  int stepNum = 0;
  int key = newItem.getKey();
  int hashVal = hashFunc(key);

  while(hashArray[hashVal] != null && hashArray[hashVal].getKey() != -1) {

    stepNum++;
    hashVal = quadraticProbe(hashVal, stepNum);
    hashVal %= arraySize;

  }

  hashArray[hashVal] = newItem;

}`}
        </code>
      </pre>

      <pre className="project-11_1-delete">
        <code className="language-js">
          {`public DataItem delete(int key) {

  int stepNum = 0;
  int hashVal = hashFunc(key);

  while(hashArray[hashVal] != null) {

    if(hashArray[hashVal].getKey() == key) {

      DataItem temp = hashArray[hashVal];
      hashArray[hashVal] = nonItem;

      return temp;

    }

    stepNum++;
    hashVal = quadraticProbe(hashVal, stepNum);
    hashVal %= arraySize;

  }

  return null;

}`}
        </code>
      </pre>

      <pre className="project-11_1-find">
        <code className="language-js">
          {`public DataItem find(int key) {

  int stepNum = 0;
  int hashVal = hashFunc(key);

  while(hashArray[hashVal] != null) {

    if(hashArray[hashVal].getKey() == key)
      return hashArray[hashVal];

    stepNum++;
    hashVal = quadraticProbe(hashVal, stepNum);
    hashVal %= arraySize;

  }

  return null;

}`}
        </code>
      </pre>

      <div className="project-11_1-quadratic-probe-exp">
        <b>Function:</b> resolves hash collisions using quadratic probing.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            Return the sum of the hash value and the square of the step number.
          </li>
        </ul>
      </div>

      <div className="project-11_1-insert-exp">
        <b>Function:</b> inserts a new item into the hash table.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            Declare the initial step number, the key (data) of the new item and
            the hash value of that key.
          </li>
          <li>
            While the DataItem object of the hash value index exists and the
            data attribute of this object is not equal to -1:
            <ul>
              <li>Increment the step number.</li>
              <li>Get the new hash value.</li>
              <li>Reduce the hash value by hashVal modulo arraySize.</li>
            </ul>
          </li>
          <li>Set the DataItem of the new hash value equal to the new item.</li>
        </ul>
      </div>

      <div className="project-11_1-delete-exp">
        <b>Function:</b> removes an item from the hash table.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            Declare the initial step number and hash value using the given key.
          </li>
          <li>
            While the DataItem object of the hash value index exists:
            <ul>
              <li>
                Check if the data attribute of the data item is equal to the
                key.
              </li>
              <li>
                If the previous step is true: save a copy of the data item to be
                returned, set the data item to a nonItem (data is -1) and return
                the copy.
              </li>
              <li>Increment the step number.</li>
              <li>Get the new hash value.</li>
              <li>Reduce the hash value by hashVal modulo arraySize.</li>
            </ul>
          </li>
          <li>Return null if the data item is null.</li>
        </ul>
      </div>

      <div className="project-11_1-find-exp">
        <b>Function:</b> searches for a specifed item in the hash table.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            Declare the initial step number and hash value using the given key.
          </li>
          <li>
            While the DataItem object of the hash value index exists:
            <ul>
              <li>
                Check if the data attribute of the data item is equal to the
                key.
              </li>
              <li>If the previous step is true: return the matching data.</li>
              <li>Increment the step number.</li>
              <li>Get the new hash value.</li>
              <li>Reduce the hash value by hashVal modulo arraySize.</li>
            </ul>
          </li>
          <li>Return null if the data item is null.</li>
        </ul>
      </div>

      <div className="hr-11_1">
        <hr />
      </div>
    </div>
  );
};

export default Project111;
