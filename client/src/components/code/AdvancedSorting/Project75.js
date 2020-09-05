import React from "react";
import "../../../css/chpt_7/Project7_5.css";
import project7_1_img from "../../../img/Chpt_7-Img/Project7_5Img.png";

const Project75 = () => {
  let radixSort =
    "https://en.wikipedia.org/wiki/Radix_sort#targetText=In%20computer%20science%2C%20radix%20sort,buckets%20according%20to%20their%20radix.";
  let countSort = "https://en.wikipedia.org/wiki/Counting_sort";
  return (
    <div className="project-7_5-grid">
      <div className="title-7_5">
        <h2>Project 7.5</h2>
      </div>

      <div className="description-7_5">
        <p>
          In project 7.5 we will look at an implementation of a{" "}
          <a href={radixSort} target="blank">
            <i>radix sort</i>
          </a>
          . This sorting algorithm will be implemented with the help of the{" "}
          <a href={countSort} target="blank">
            <i>count sort</i>
          </a>{" "}
          algorithm. This page will be covering the radix sort method, a method
          for finding the max value in an array and the count sort method. You
          can view the complete project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%207/TestClass7_5.java"
            target="blank"
          >
            <i>Project 7.5</i>
          </a>
          .
        </p>
      </div>

      <div className="image-7_5">
        <img
          style={{ width: "400px" }}
          src={project7_1_img}
          alt="Project 7.5 Visual"
        />
      </div>

      <div className="project-7_5-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Implement a radix sort as described in the last section of this
          chapter. It should handle variable amounts of data and variable
          numbers of digits in the key. You could make the number-base variable
          as well (so it can be something other than 10), but it will be hard to
          see what’s happening unless you develop a routine to print values in
          different bases.
        </p>
      </div>

      <pre className="project-7_5-radix-sort">
        <code className="language-js">
          {`public void radixSort() {

  int max = getMax();

  for(int exp = 1; max/exp > 0; exp*=10)
    countSort(exp);

}`}
        </code>
      </pre>

      <pre className="project-7_5-get-max">
        <code className="language-js">
          {`public int getMax() {

  int max = arr[0];

  for(int i = 0; i < n; i++) {

    if(arr[i] > max)
      max = arr[i];

  }

  return max;

}`}
        </code>
      </pre>

      <pre className="project-7_5-count-sort">
        <code className="language-js">
          {`public void countSort(int exp) {

  int[] output = new int[n];
  int[] count = new int[10];

  Arrays.fill(count, 0);

  for(int i = 0; i < n; i++)
    count[(arr[i] / exp) % 10]++;

  for(int i = 1; i < 10; i++)
    count[i] += count[i-1];

  for(int i = n-1; i >= 0; i--) {

    output[count[(arr[i] / exp) % 10] - 1] = arr[i];
    count[(arr[i] / exp) % 10]--;

  }

  for(int i = 0; i < n; i++)
    arr[i] = output[i];

}`}
        </code>
      </pre>

      <div className="project-7_5-radix-sort-exp">
        <b>Function:</b> performs a radix sort on an array of integers.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Get the max value of the given array.</li>
          <li>
            Declare a For Loop that iterates for every digit in the max value.
          </li>
          <li>In each iteration, perform a count sort.</li>
        </ul>
      </div>

      <div className="project-7_5-get-max-exp">
        <b>Function:</b> returns the max value of a given array.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Declare the initial max value.</li>
          <li>Declare a For Loop that iterates over the entire array.</li>
          <li>
            In each iteration, if the current element is greater than the
            current max, set the max to the current element.
          </li>
          <li>Return the max value.</li>
        </ul>
      </div>

      <div className="project-7_5-count-sort-exp">
        <b>Function:</b> performs a count sort with a specified digit 'exp'.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Declare the output and occurences arrays.</li>
          <li>Fill the occurence array with all 0's.</li>
          <li>
            Declare a For Loop that stores the occurences of each digit in the
            count array.
          </li>
          <li>
            Declare a For Loop that updates count[i] to store the final position
            in the output array.
          </li>
          <li>
            Declare a For Loop that builds the output array using the updated
            count array.
          </li>
          <li>
            Declare a For Loop that copies the count array to the final output
            array.
          </li>
        </ul>
      </div>

      <div className="hr-7_5">
        <hr />
      </div>
    </div>
  );
};

export default Project75;
