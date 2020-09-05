import React from "react";
import "../../../css/chpt_6/Project6_4.css";
import project6_1_img from "../../../img/Chpt_6-Img/Project6_4Img.png";

const Project6_4 = () => {
  let knapsack = "https://en.wikipedia.org/wiki/Knapsack_problem";
  return (
    <div className="project-6_4-grid">
      <div className="title-6_4">
        <h2>Project 6.4</h2>
      </div>

      <div className="description-6_4">
        <p>
          In project 6.4 we will be looking at the classic{" "}
          <a href={knapsack} target="blank">
            <i>knapsack</i>
          </a>{" "}
          problem. This page will include a knapsack method and a main method to
          demonstrate the functionality of the knapsack method. You can view the
          complete project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%206/TestClass6_4.java"
            target="blank"
          >
            {" "}
            <i>Project 6.4</i>
          </a>
          .
        </p>
      </div>

      <div className="image-6_4">
        <img
          style={{ width: "400px" }}
          src={project6_1_img}
          alt="Project 6.4 Visual"
        />
      </div>

      <div className="project-6_4-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Write a program that solves the knapsack problem for an arbitrary
          knapsack capacity and series of weights. Assume the weights are stored
          in an array. Hint: The arguments to the recursive knapsack() function
          are the target weight and the array index where the remaining items
          start.
        </p>
      </div>

      <pre className="project-6_4-knapsack">
        <code className="language-js">
          {`public static int knapsack(
  int maxWeight, int[] weights,
  int[] values, int index) {

  if(index == 0 || maxWeight == 0)
    return 0;

  if(weights[index-1] > maxWeight)
    return knapsack(maxWeight, weights, values, index-1);

  else
    return Math.max(

      values[index-1] + 
      knapsack(maxWeight-weights[index-1], weights, values, index-1),

      knapsack(maxWeight, weights, values, index-1)

    );

  }`}
        </code>
      </pre>

      <pre className="project-6_4-main">
        <code className="language-js">
          {`public static void main(String[] args) {

  int maxWeight = 50, size = 3;
  int[] weights = {10, 20, 30},
        values = {60, 100, 120};

  for(int i = 0 ; i < size; i++) {

    System.out.println(
      "Weight = " + weights[i] + " : " +
      "Value = " + values[i]
    );

  }

  System.out.println(
    "Maximum value: " +
    knapsack( maxWeight, weights, values, size)
  );

}`}
        </code>
      </pre>

      <div className="project-6_4-knapsack-exp">
        <b>Function:</b> solves the classic knapsack problem.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>
            If the current index equals 0 or the max weight of the knapsack is 0
            (base case), the algorithm is complete so return 0.
          </li>
          <li>
            If the weight of the current index is greater than the max weight,
            it cannot be added to the knapsack so make a recursive call with a
            different index (index-1).
          </li>
          <li>
            Otherwise, return the maximum of two cases:
            <ol>
              <li>The nth item (current index) is included</li>
              <li>The nth item (current index) is not included</li>
            </ol>
            .
          </li>
        </ul>
      </div>

      <div className="project-6_4-main-exp">
        <b>Function:</b> demonstrates the functionality of the knapsack method.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Declare the variables necessary for the knapsack problem.</li>
          <li>Declare a For Loop that prints out every weight-value pair.</li>
          <li>Call the knapsack method and print out the result.</li>
        </ul>
        <h4>
          <b>Output:</b>
        </h4>
        <pre>
          <code className="language-js">
            {`Weight = 10 : Value = 60
Weight = 20 : Value = 100
Weight = 30 : Value = 120

Maximum value: 220`}
          </code>
        </pre>
      </div>

      <div className="hr-6_4">
        <hr />
      </div>
    </div>
  );
};

export default Project6_4;
