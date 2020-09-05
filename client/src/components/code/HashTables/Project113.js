import React from "react";
import "../../../css/chpt_11/Project11_3.css";
import project11_1_img from "../../../img/Chpt_11-Img/Project11_3Img.png";

const Project113 = () => {
  let digitalFolding = "https://www.austincc.edu/akochis/COSC2415/hashing.htm";
  return (
    <div className="project-11_3-grid">
      <div className="title-11_3">
        <h2>Project 11.3</h2>
      </div>

      <div className="description-11_3">
        <p>
          Project 11.3 will involve the implementation of a{" "}
          <a href={digitalFolding} target="blank">
            <i>digital folding</i>
          </a>
          approach to a hash function of a linear probing hash table. This page
          will only be covering the solution method. You can view the complete
          project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%2011/TestClass11_3.java"
            target="blank"
          >
            <i>Project 11.3</i>
          </a>
          .
        </p>
      </div>

      <div className="image-11_3">
        <img
          style={{ width: "400px" }}
          src={project11_1_img}
          alt="Project 11.3 Visual"
        />
      </div>

      <div className="project-11_3-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Write a hash function to implement a digit-folding approach in the
          hash function (as described in the “Hash Functions” section of this
          chapter). Your program should work for any array size and any key
          length. Use linear probing. Accessing a group of digits in a number
          may be easier than you think. Does it matter if the array size is not
          a multiple of 10?
        </p>
      </div>

      <pre className="project-11_3-digital-fold">
        <code className="language-js">
          {`public int digitalFold(int k) {

  String key = Integer.toString(k),
  arrSize = Integer.toString(arraySize),
  group = "";

  int groupSize = arrSize.length() - 1,
  hashVal = 0,
  groupPtr = 0,
  numGroups = key.length() / groupSize;

  for(int i = 0; i < numGroups; i++) {

    if((key.length() - groupPtr) > groupSize) {

      group = key.substring(groupPtr, (groupPtr + groupSize));

      hashVal += Integer.parseInt(group);

      groupPtr += groupSize;

    }

  }

  hashVal += Integer.parseInt(key.substring(groupPtr, key.length()));

  return (hashVal %= arraySize);

}`}
        </code>
      </pre>

      <div className="project-11_3-digital-fold-exp">
        <b>Function:</b> implements a hash function using a digital folding
        approach.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            Convert the given key and the size of the array to a string and set
            the initial group to an empty string.
          </li>
          <li>
            Declare the group size, the initial hash value, a pointer for the
            current group and the number of groups.
          </li>
          <li>
            For every group in the string:
            <ul>
              <li>
                Check if the number of indexes left is greater than the group
                size.
              </li>
              <li>
                If the previous step is true: get a substring of integers of
                size "groupSize", convert the substring to an integer and add it
                to the hash value and increment the group pointer by the group
                size.
              </li>
            </ul>
          </li>
          <li>
            Create a substring with the remaining indices, parse the substring
            add it to the hash value.
          </li>
          <li>
            Reduce and return the hash value by taking hashVal modulo arraySize.
          </li>
        </ul>
      </div>

      <div className="hr-11_3">
        <hr />
      </div>
    </div>
  );
};

export default Project113;
