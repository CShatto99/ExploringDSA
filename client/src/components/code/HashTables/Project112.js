import React from "react";
import "../../../css/chpt_11/Project11_2.css";
import project11_1_img from "../../../img/Chpt_11-Img/Project11_2Img.png";

const Project112 = () => {
  let linearProbing =
    "https://en.wikipedia.org/wiki/Linear_probing#targetText=Linear%20probing%20is%20a%20scheme,associated%20with%20a%20given%20key.";
  return (
    <div className="project-11_2-grid">
      <div className="title-11_2">
        <h2>Project 11.2</h2>
      </div>

      <div className="description-11_2">
        <p>
          In project 11.2 we will see a hash table that will use{" "}
          <a href={linearProbing} target="blank">
            <i>linear probing</i>
          </a>{" "}
          to store strings. On this page we will look at a hash function, an
          insert method, a delete method and a find method. You can view the
          complete project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%2011/TestClass11_2.java"
            target="blank"
          >
            <i>Project 11.2</i>
          </a>
          .
        </p>
      </div>

      <div className="image-11_2">
        <img
          style={{ width: "400px" }}
          src={project11_1_img}
          alt="Project 11.2 Visual"
        />
      </div>

      <div className="project-11_2-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Implement a linear probe hash table that stores strings. You’ll need a
          hash function that converts a string to an index number; see the
          section “Hashing Strings” in this chapter. Assume the strings will be
          lowercase words, so 26 characters will suffice.
        </p>
      </div>

      <pre className="project-11_2-hash">
        <code>
          {`public int hashFunc(String s) {

  int hashVal = 0;

  for(int i = 0; i < s.length(); i++) {

    int letter = s.charAt(i) - 96;
    hashVal = (hashVal * 27 + letter) % arraySize;

  }

  return hashVal;

}`}
        </code>
      </pre>

      <pre className="project-11_2-insert">
        <code>
          {`public void insert(DataItem newItem) {

  String key = newItem.getKey();
  int hashVal = hashFunc(key);

  while(hashArray[hashVal] != null && hashArray[hashVal].getKey() != "*") {

    ++hashVal;
    hashVal %= arraySize;

  }

  hashArray[hashVal] = newItem;

}`}
        </code>
      </pre>

      <pre className="project-11_2-delete">
        <code>
          {`public DataItem delete(String key) {

  int hashVal = hashFunc(key);

  while(hashArray[hashVal] != null) {

    if(hashArray[hashVal].getKey() == key) {

      DataItem temp = hashArray[hashVal];
      hashArray[hashVal] = nonItem;

      return temp;

    }

    ++hashVal;
    hashVal %= arraySize;

  }

  return null;

}`}
        </code>
      </pre>

      <pre className="project-11_2-find">
        <code>
          {`public DataItem find(String key) {

  int hashVal = hashFunc(key);

  while(hashArray[hashVal] != null) {

    if(hashArray[hashVal].getKey() == key)
      return hashArray[hashVal];

    ++hashVal;
    hashVal %= arraySize;

  }

  return null;

}`}
        </code>
      </pre>

      <div className="project-11_2-hash-exp">
        <b>Function:</b> map arbitrary strings to a fixed-size equal to the size
        of the given array.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Declare the initial hash value to 0.</li>
          <li>
            Declare a For Loop that iterates over the entire string and in each
            iteration:
            <ul>
              <li>Get the character code of the current letter.</li>
              <li>
                Get the hash value by using a bit-manipulation formula with base
                27.
              </li>
            </ul>
          </li>
          <li>Return the hash value.</li>
        </ul>
      </div>

      <div className="project-11_2-insert-exp">
        <b>Function:</b> inserts a string into the hash table.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Declare the key and get the hash value of that key.</li>
          <li>
            While the DataItem of the hash value index is not null and the
            string attribute is not equal to "*" (doesn't exist):
            <ul>
              <li>Increment the hash value by 1.</li>
              <li>Reduce the hash value by hashVal modulo arraySize.</li>
            </ul>
          </li>
          <li>Set the DataItem of the new hash value equal to the new item.</li>
        </ul>
      </div>

      <div className="project-11_2-delete-exp">
        <b>Function:</b> replaces a specified string with the "*" character.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Get the hash value of the given key.</li>
          <li>
            While the DataItem object of the hash value index exists:
            <ul>
              <li>
                Check if the data attribute of the data item is equal to the
                key.
              </li>
              <li>
                If the previous step is true: save a copy of the data item to be
                returned, set the data item to a nonItem (string is "*") and
                return the copy.
              </li>
              <li>Increment the hash value.</li>
              <li>Reduce the hash value by hashVal modulo arraySize.</li>
            </ul>
          </li>
          <li>Return null if the data item is null.</li>
        </ul>
      </div>

      <div className="project-11_2-find-exp">
        <b>Function:</b> searches for a specifed string in the hash table.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Declare the initial hash value using the given key.</li>
          <li>
            While the DataItem object of the hash value index exists:
            <ul>
              <li>
                Check if the string attribute of the data item is equal to the
                key.
              </li>
              <li>If the previous step is true: return the matching data.</li>
              <li>Increment the hash value.</li>
              <li>Reduce the hash value by hashVal modulo arraySize.</li>
            </ul>
          </li>
          <li>Return null if the data item is null.</li>
        </ul>
      </div>

      <div className="hr-11_2">
        <hr />
      </div>
    </div>
  );
};

export default Project112;
