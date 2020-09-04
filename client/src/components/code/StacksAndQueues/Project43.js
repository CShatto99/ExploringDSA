import React from 'react'
import '../../../css/chpt_4/Project4_3.css'
import project4_3_img from '../../../img/Chpt_4-Img/Project4_3Img.png'

const Project43 = () => {
  return (
    <div className="project-4_3-grid">
      <div className="title-4_3">
        <h2>Project 4.3</h2>
      </div>

      <div className="description-4_3">
        <p>
          For project 4.3 we will be looking at an implementation of an
          array-based double-ended stack. For this project four methods
          will be covered. These methods
          are <b>pushTop</b>, <b>popTop</b>, <b>pushBottom</b> and <b>popBottom</b>.
          These methods that perform operations on the top
          and bottom do not work interchangeably. You can view the complete project here: <a
            href="https://github.com/CShatto99/Data-Structures-and-Algorithms-Projects/blob/master/Source%20Files/Chapter%204/TestClass4_3.java"
            target="blank"><i>Project 4.3</i>
          </a>.
        </p>
      </div>

      <div className="image-4_3">
        <img style={{width: '300px'}} src={project4_3_img}  alt="Project 4.3 Visual"/>
      </div>

      <div className="project-4_3-requirements">
        <p><b>Project requirements</b></p>
        <br/>
        <p>
           Write a program that implements a stack class that is based on the
           Deque class in Programming Project 4.2. This stack class should have
           the same methods and capabilities as the StackX class in the
           stack.java program (Listing 4.1).
        </p>
      </div>

      <pre className="project-4_3-push_top">
        <code>
{`public void pushTop(long value) {

  if(top == maxSize-1)
    top = -1;

  arr[++top] = value;

}`}
        </code>
      </pre>

      <pre className="project-4_3-pop_top">
        <code>
{`public long popTop() {

  if(top == -1)
    top = maxSize-1;

  return arr[top--];

}`}
        </code>
      </pre>

      <pre className="project-4_3-push_bottom">
        <code>
{`public void pushBottom(long value) {

  if(bottom == maxSize-1)
    bottom = -1;

  arr[++bottom] = value;

}`}
        </code>
      </pre>

      <pre className="project-4_3-pop_bottom">
        <code>
{`public long popBottom() {

  if(bottom == -1)
    bottom = maxSize-1;

  return arr[bottom--];

}`}
        </code>
      </pre>

      <div className="project-4_3-push_top-exp">
        <b>Function:</b> insert an item on the top of a stack.
        <br/>
        <b>Algorithm</b>
        <br/>
        <ul>
          <li>Check if the top index needs to be wrapped around.</li>
          <li>Increment the top index and insert the new value.</li>
        </ul>
      </div>

      <div className="project-4_3-pop_top-exp">
        <b>Function:</b> remove the top value of a stack.
        <br/>
        <b>Algorithm</b>
        <br/>
        <ul>
          <li>Check if the top index needs to be wrapped around.</li>
          <li>Return the top value and decrement the top index.</li>
        </ul>
      </div>

      <div className="project-4_3-push_bottom-exp">
        <b>Function:</b> insert an item on the bottom of a stack.
        <br/>
        <b>Algorithm</b>
        <br/>
        <ul>
          <li>Check if the bottom index needs to be wrapped around.</li>
          <li>Increment the bottom index and insert the new value.</li>
        </ul>
      </div>

      <div className="project-4_3-pop_bottom-exp">
        <b>Function:</b> remove the bottom of a stack.
        <br/>
        <b>Algorithm</b>
        <br/>
        <ul>
          <li>Check if the bottom index needs to be wrapped around.</li>
          <li>Return the bottom value and decrement the bottom index.</li>
        </ul>
      </div>

      <div className="hr-4_3">
        <hr/>
      </div>

    </div>
  )
}

export default Project43
