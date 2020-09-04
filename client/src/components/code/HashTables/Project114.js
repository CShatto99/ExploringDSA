import React from "react";
import "../../../css/chpt_11/Project11_4.css";
import project11_1_img from "../../../img/Chpt_11-Img/Project11_4Img.png";

const Project114 = () => {
  return (
    <div className="project-11_4-grid">
      <div className="title-11_4">
        <h2>Project 11.4</h2>
      </div>

      <div className="description-11_4">
        <p>
          In project 11.4 we will see an altered insert method of a hash table.
          This insert method will call a <b>rehash</b> method if the load factor
          (percentage of array space taken) is greater than 50%. The rehash
          method will ultimately double the size of the initial array and
          re-write the contents to the new array. You can view the complete
          project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%2011/TestClass11_4.java"
            target="blank"
          >
            <i>Project 11.4</i>
          </a>
          .
        </p>
      </div>

      <div className="image-11_4">
        <img
          style={{ width: "400px" }}
          src={project11_1_img}
          alt="Project 11.4 Visual"
        />
      </div>

      <div className="project-11_4-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Write a rehash() method for the hash.java program. It should be called
          by insert() to move the entire hash table to an array about twice as
          large whenever the load factor exceeds 0.5. The new array size should
          be a prime number. Refer to the section “Expanding the Array” in this
          chapter. Don’t forget you’ll need to handle items that have been
          “deleted,” that is, written over with –1.
        </p>
      </div>

      <pre className="project-11_4-insert">
        <code>
          {`public void insert(DataItem newItem) {

  int key = newItem.getKey(),
  hashVal = hashFunc(key),
  loadFactor = numItems / arraySize;

  if(loadFactor > .5)
    rehash();

  while(hashArray[hashVal] != null
        && hashArray[hashVal].getKey() != -1) {

    ++hashVal;
    hashVal %= arraySize;

  }

  hashArray[hashVal] = newItem;
  numItems++;

}`}
        </code>
      </pre>

      <pre className="project-11_4-re-hash">
        <code>
          {`public void rehash() {

  int newSize = arraySize * 2;

  while(!isPrime(newSize))
    newSize++;

  DataItem tempArray[] =
    Arrays.copyOf(hashArray, hashArray.length);

  hashArray = new DataItem[newSize];
  numItems = 0;

  for(int i = 0; i < tempArray.length; i++) {

    if(tempArray[i] != null
       && tempArray[i].getKey() != -1)

      insert(tempArray[i]);

  }

}`}
        </code>
      </pre>

      <pre className="project-11_4-is-prime">
        <code>
          {`public boolean isPrime(int num) {

  int sqrt = (int)Math.sqrt(num) + 1;

  for(int i = 2; i < sqrt; i++) {

    if(num % i == 0)
      return false;

  }

  return true;

}`}
        </code>
      </pre>

      <div className="project-11_4-insert-exp">
        <b>Function:</b> inserts a new item into the hash table.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            Get the key of the new item and the hash value using this new key.
          </li>
          <li>Calculate the current load factor.</li>
          <li>
            If the load factor is greater than .5 (50%), call the rehash method.
          </li>
          <li>
            While the DataItem is not null and the key of the DataItem it not
            equal to -1:
            <ul>
              <li>Increment the hash value by 1.</li>
              <li>Reduce the hash value by taking hashVal modulo arraySize.</li>
            </ul>
          </li>
          <li>
            Set the DataItem element of the new hash value equal to the new
            item.
          </li>
          <li>Increment the number of items by 1.</li>
        </ul>
      </div>

      <div className="project-11_4-re-hash-exp">
        <b>Function:</b> doubles the size of the hash table array and re-writes
        the contents to this new array.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Declare the new size.</li>
          <li>While this new size is not prime: increment the size by 1.</li>
          <li>Save a temporary copy of the current array.</li>
          <li>
            For every item in the inital hash array:
            <ul>
              <li>
                Check if the DataItem is not null and the key of the DataItem is
                not equal to -1.
              </li>
              <li>
                If the previous condition is true, insert the DataItem into the
                new array.
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="project-11_4-is-prime-exp">
        <b>Function:</b> determines is a given integer is a prime number.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Take the square root of the number plus 1.</li>
          <li>
            For every number up to the value of the square root (starting at 2):
            <ul>
              <li>
                Check if the value of the index evenly divides the given number.
              </li>
              <li>If the previous step is true, return false.</li>
            </ul>
          </li>
          <li>Return true.</li>
        </ul>
      </div>

      <div className="hr-11_4">
        <hr />
      </div>
    </div>
  );
};

export default Project114;
