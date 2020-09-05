import React from "react";
import "../../../css/chpt_6/Project6_1.css";
import project6_1_img from "../../../img/Chpt_6-Img/Project6_1Img.png";

const Project6_1 = () => {
  return (
    <div className="project-6_1-grid">
      <div className="title-6_1">
        <h2>Project 6.1</h2>
      </div>

      <div className="description-6_1">
        <p>
          In project 6.1 we are going to be looking at a recursive approach to a
          method that performs multiplication on two integers. This page will
          cover the multiplication method and a main method to demonstrate the
          functionality of the project. You can view the complete project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%206/TestClass6_1.java"
            target="blank"
          >
            <i>Project 6.1</i>
          </a>
          .
        </p>
      </div>

      <div className="image-6_1">
        <img
          style={{ width: "400px" }}
          src={project6_1_img}
          alt="Project 6.1 Visual"
        />
      </div>

      <div className="project-6_1-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Suppose you buy a budget-priced pocket PC and discover that the chip
          inside can’t do multiplication, only addition. You program your way
          out of this quandary by writing a recursive method, mult(), that
          performs multiplication of x and y by adding x to itself y times. Its
          arguments are x and y and its return value is the product of x and y.
          Write such a method and a main() program to call it. Does the addition
          take place when the method calls itself or when it returns?
        </p>
      </div>

      <pre className="project-6_1-multiply">
        <code className="language-js">
          {`public static int mult(int x, int y) {
  if(x == 0 || y == )
    return 0;

  else {

    System.out.println("Current value of y: " + y);
    return (x + mult(x, y-1));

  }
}`}
        </code>
      </pre>

      <pre className="project-6_1-main">
        <code className="language-js">
          {`public static void main(String[] args) {

  int x = 3, y = 5, product = mult(x, y);

  System.out.println(x + " times " + y + " = " + product);

}`}
        </code>
      </pre>

      <div className="project-6_1-multiply-exp">
        <b>Function:</b> multiplies two arbitrary variables x and y together by
        adding x to itself y times.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Check if x or y is equal to 0 (base case).</li>
          <li>
            If the previous step is true, trigger the series of returns by
            returning 0.
          </li>
          <li>
            Otherwise, print the current value of y and recursively call mult
            with x and y-1 until y is equal to 0.
          </li>
        </ul>
      </div>

      <div className="project-6_1-main-exp">
        <b>Function:</b> show that the mult method functions correctly.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Declare x, y and the product of x and y.</li>
          <li>Display the product of x and y.</li>
        </ul>
        <h4>
          <b>Output:</b>
        </h4>
        <pre>
          <code className="language-js">
            {`Current value of y: 3
Current value of y: 2
Current value of y: 1

5^3 = 125`}
          </code>
        </pre>
      </div>

      <div className="hr-6_1">
        <hr />
      </div>
    </div>
  );
};

export default Project6_1;
