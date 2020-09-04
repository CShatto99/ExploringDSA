import React from "react";
import "../../../css/chpt_6/Project6_3.css";
import project6_1_img from "../../../img/Chpt_6-Img/Project6_3Img.png";

const Project6_3 = () => {
  return (
    <div className="project-6_3-grid">
      <div className="title-6_3">
        <h2>Project 6.3</h2>
      </div>

      <div className="description-6_3">
        <p>
          In project 6.3 we are going to look at a method that will accept two
          arbitrary variables 'x' and 'y' and raise x to the power of y. This
          page will cover a power method and a main method to demonstrate the
          functionality of the project. You can view the complete project here:{" "}
          <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%206/TestClass6_3.java"
            target="blank"
          >
            {" "}
            <i>Project 6.3</i>
          </a>
          .
        </p>
      </div>

      <div className="image-6_3">
        <img
          style={{ width: "400px" }}
          src={project6_1_img}
          alt="Project 6.3 Visual"
        />
      </div>

      <div className="project-6_3-requirements">
        <h4>Project requirements</h4>
        <br />
        <p>
          Implement the recursive approach to raising a number to a power, as
          described in the “Raising a Number to a Power” section near the end of
          this chapter. Write the recursive power() function and a main()
          routine to test it.
        </p>
      </div>

      <pre className="project-6_3-power">
        <code>
          {`public static int power(int x, int y) {

  if(y == 0)
    return 1;

  else {

    System.out.println(
      "Current value of y: " + y
    );
    return (x * power(x, y-1));

  }

}`}
        </code>
      </pre>

      <pre className="project-6_3-main">
        <code>
          {`public static void main(String[] args) {

  int x = 5, y = 3, result = power(x, y);

  System.out.print(
    x + "^" + y + " = " + result
  );

}`}
        </code>
      </pre>

      <div className="project-6_3-power-exp">
        <b>Function:</b> raises variable x to to the power of variable y.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Check if y is equal to 0 (base case).</li>
          <li>
            If the previous step is true, trigger the series of returns by
            returning 1.
          </li>
          <li>
            Otherwise, print the current value of y and recursively call power
            with x and y-1 until y is equal to 0.
          </li>
        </ul>
      </div>

      <div className="project-6_3-main-exp">
        <b>Function:</b> demonstrates the functionality of the power method.
        <br />
        <b>Algorithm</b>
        <br />
        <ul>
          <li>Delcare x, y, and the result of x raised to the power of y.</li>
          <li>If the previous step is true, return 0.</li>
          <li>
            Otherwise, print the current value of y and recursively call mult
            with x and y-1 until y is equal to 0.
          </li>
        </ul>
        <h4>
          <b>Output:</b>
        </h4>
        <pre>
          <code>
            {`Current value of y: 5
Current value of y: 4
Current value of y: 3
Current value of y: 2
Current value of y: 1

3 times 5 = 15`}
          </code>
        </pre>
      </div>

      <div className="hr-6_3">
        <hr />
      </div>
    </div>
  );
};

export default Project6_3;
